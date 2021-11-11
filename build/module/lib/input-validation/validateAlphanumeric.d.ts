import { Enum } from "../../types/types";
export declare const ValidateAlphaNumericErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateAlphaNumericErrorType = Enum<typeof ValidateAlphaNumericErrorType>;
export interface ValidateAlphanumericOptions {
    maxLength?: number;
    isRequired?: boolean;
}
export declare const validateAlphanumeric: (value: string, { maxLength, isRequired }?: ValidateAlphanumericOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
