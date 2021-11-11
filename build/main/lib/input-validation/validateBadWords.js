"use strict";
/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var naughtyWords = __importStar(require("naughty-words"));
var validator_1 = require("validator");
var types_1 = require("../../types/types");
var en_json_1 = __importDefault(require("./constant/badWords/en.json"));
var errorType_1 = require("./constant/errorType");
exports.ValidateBadWordsErrorType = types_1.Enum(errorType_1.CommonValidationErrorType.empty, errorType_1.CommonValidationErrorType.containsBadWords);
var localizedBadWords = {
    ar: naughtyWords.ar,
    cs: naughtyWords.cs,
    da: naughtyWords.da,
    de: naughtyWords.de,
    en: naughtyWords.en.concat(en_json_1.default),
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
exports.validateBadWords = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.languageCode, languageCode = _d === void 0 ? "en" : _d, _e = _b.matchingMode, matchingMode = _e === void 0 ? "contain" : _e;
    if (validator_1.isEmpty(value) && isRequired) {
        return exports.ValidateBadWordsErrorType.empty;
    }
    if (languageCode === "*") {
        var filteredBadWord = Object.values(localizedBadWords).find(function (badWords) {
            return isBadWord(badWords, value, matchingMode);
        });
        if (!!filteredBadWord && !!filteredBadWord.length) {
            return exports.ValidateBadWordsErrorType.containsBadWords;
        }
    }
    else if (Array.isArray(languageCode)) {
        var filteredBadWord = languageCode.find(function (code) { return isBadWord(localizedBadWords[code] || [], value, matchingMode); });
        if (!!filteredBadWord) {
            return exports.ValidateBadWordsErrorType.containsBadWords;
        }
    }
    else {
        if (isBadWord(localizedBadWords[languageCode] || [], value, matchingMode)) {
            return exports.ValidateBadWordsErrorType.containsBadWords;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVCYWRXb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUJhZFdvcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOzs7Ozs7Ozs7Ozs7QUFFSCwwREFBOEM7QUFDOUMsdUNBQW9DO0FBQ3BDLDJDQUF5QztBQUN6Qyx3RUFBa0Q7QUFDbEQsa0RBQWlFO0FBRXBELFFBQUEseUJBQXlCLEdBQUcsWUFBSSxDQUMzQyxxQ0FBeUIsQ0FBQyxLQUFLLEVBQy9CLHFDQUF5QixDQUFDLGdCQUFnQixDQUMzQyxDQUFDO0FBU0YsSUFBTSxpQkFBaUIsR0FBRztJQUN4QixFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUU7SUFDbkIsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFO0lBQ25CLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRTtJQUNuQixFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUU7SUFDbkIsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGlCQUFPLENBQUM7SUFDbkMsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFO0lBQ25CLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRTtJQUNuQixFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUU7SUFDbkIsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFO0lBQ25CLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRztJQUNyQixFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUU7SUFDbkIsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFO0lBQ25CLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRTtJQUNuQixFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUU7SUFDbkIsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFO0lBQ25CLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRztJQUNyQixFQUFFLEVBQUUsWUFBWSxDQUFDLEVB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