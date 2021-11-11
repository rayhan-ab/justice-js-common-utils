/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import * as naughtyWords from "naughty-words";
import { isEmpty } from "validator";
import { Enum } from "../../types/types";
import enExtra from "./constant/badWords/en.json";
import { CommonValidationErrorType } from "./constant/errorType";
export var ValidateBadWordsErrorType = Enum(CommonValidationErrorType.empty, CommonValidationErrorType.containsBadWords);
var localizedBadWords = {
    ar: naughtyWords.ar,
    cs: naughtyWords.cs,
    da: naughtyWords.da,
    de: naughtyWords.de,
    en: naughtyWords.en.concat(enExtra),
    eo: naughtyWords.eo,
    es: naughtyWords.es,
    fa: naughtyWords.fa,
    fi: naughtyWords.fi,
    fil: naughtyWords.fil,
    fr: naughtyWords.fr,
    hi: naughtyWords.hi,
    hu: naughtyWords.hu,
    it: naughtyWords.it,
    ja: naughtyWords.ja,
    kab: naughtyWords.kab,
    ko: naughtyWords.ko,
    nl: naughtyWords.nl,
    no: naughtyWords.no,
    pl: naughtyWords.pl,
    pt: naughtyWords.pt,
    ru: naughtyWords.ru,
    sv: naughtyWords.sv,
    th: naughtyWords.th,
    tlh: naughtyWords.tlh,
    tr: naughtyWords.tr,
    zh: naughtyWords.zh,
};
/**
 *
 * @param value
 * @param isRequired
 * @param languageCode (string "*") or ValidateBadWordsLanguageCode.keys or ValidateBadWordsLanguageCode.keys[]
 * @param matchingMode (string "exact" | "contain")
 * @default languageCode en
 * @default matchingMode contain
 */
export var validateBadWords = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.languageCode, languageCode = _d === void 0 ? "en" : _d, _e = _b.matchingMode, matchingMode = _e === void 0 ? "contain" : _e;
    if (isEmpty(value) && isRequired) {
        return ValidateBadWordsErrorType.empty;
    }
    if (languageCode === "*") {
        var filteredBadWord = Object.values(localizedBadWords).find(function (badWords) {
            return isBadWord(badWords, value, matchingMode);
        });
        if (!!filteredBadWord && !!filteredBadWord.length) {
            return ValidateBadWordsErrorType.containsBadWords;
        }
    }
    else if (Array.isArray(languageCode)) {
        var filteredBadWord = languageCode.find(function (code) { return isBadWord(localizedBadWords[code] || [], value, matchingMode); });
        if (!!filteredBadWord) {
            return ValidateBadWordsErrorType.containsBadWords;
        }
    }
    else {
        if (isBadWord(localizedBadWords[languageCode] || [], value, matchingMode)) {
            return ValidateBadWordsErrorType.containsBadWords;
        }
    }
    return null;
};
function isBadWord(badWords, word, matchingMode) {
    var noRepeatedChar = word.replace(/[^\w\s]|(.)(?=\1)/gi, "").toLowerCase();
    var noSpecialChar = word.replace(/[^a-zA-Z0-9 :]/gi, "").toLowerCase();
    var lowerCase = word.toLowerCase();
    var words = [lowerCase, noRepeatedChar, noSpecialChar];
    return words.some(function (value) { return doesBadWordsContainWord(badWords, value, matchingMode); });
}
function doesBadWordsContainWord(badWords, word, matchingMode) {
    switch (matchingMode) {
        case "exact":
            return badWords.includes(word);
        default:
            return badWords.includes(word) || badWords.some(function (badWord) { return word.includes(badWord); });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVCYWRXb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUJhZFdvcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEtBQUssWUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLE9BQU8sTUFBTSw2QkFBNkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRSxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxJQUFJLENBQzNDLHlCQUF5QixDQUFDLEtBQUssRUFDL0IseUJBQXlCLENBQUMsZ0JBQWdCLENBQzNDLENBQUM7QUFTRixJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRTtJQUNuQixFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUU7SUFDbkIsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFO0lBQ25CLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRTtJQUNuQixFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25DLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRTtJQUNuQixFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUU7SUFDbkIsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFO0lBQ25CLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRTtJQUNuQixHQUFHLEVBQUUsWUFBWSxDQUFDLEdBQUc7SUFDckIsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFO0lBQ25CLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRTtJQUNuQixFQUFFLEVBQUUsWUFBWSxD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