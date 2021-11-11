import { Enum } from "../../types/types";
export declare const ValidateBadWordsErrorType: Readonly<{
    empty: "empty";
    containsBadWords: "containsBadWords";
}>;
export declare type ValidateBadWordsErrorType = Enum<typeof ValidateBadWordsErrorType>;
export interface ValidateBadWordsOptions {
    isRequired?: boolean;
    matchingMode?: "exact" | "contain";
    languageCode?: Array<keyof typeof localizedBadWords> | keyof typeof localizedBadWords | "*";
}
declare const localizedBadWords: {
    ar: string[];
    cs: string[];
    da: string[];
    de: string[];
    en: string[];
    eo: string[];
    es: string[];
    fa: string[];
    fi: string[];
    fil: string[];
    fr: string[];
    hi: string[];
    hu: string[];
    it: string[];
    ja: string[];
    kab: string[];
    ko: string[];
    nl: string[];
    no: string[];
    pl: string[];
    pt: string[];
    ru: string[];
    sv: string[];
    th: string[];
    tlh: string[];
    tr: string[];
    zh: string[];
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
export declare const validateBadWords: (value: string, { isRequired, languageCode, matchingMode }?: ValidateBadWordsOptions) => "empty" | "containsBadWords" | null;
export {};
