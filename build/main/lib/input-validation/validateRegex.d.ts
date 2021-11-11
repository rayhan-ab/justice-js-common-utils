import { Enum } from "../../types/types";
export declare const ValidateRegexErrorType: Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateRegexErrorType = Enum<typeof ValidateRegexErrorType>;
export declare const validateRegex: (value: string, regex: string) => "invalidFormat" | null;
