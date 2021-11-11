import { Enum } from "../../types/types";
export declare const ValidateAlphaErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateAlphaErrorType = Enum<typeof ValidateAlphaErrorType>;
export interface ValidateAlphaOptions {
    maxLength?: number;
    isRequired?: boolean;
    isUppercaseOnly?: boolean;
    isLowercaseOnly?: boolean;
}
export declare const validateAlpha: (value: string, { maxLength, isRequired, isUppercaseOnly, isLowercaseOnly }?: ValidateAlphaOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
