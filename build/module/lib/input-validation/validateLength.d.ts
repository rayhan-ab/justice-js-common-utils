import { Enum } from "../../types/types";
export declare const ValidateLengthErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}>;
export declare type ValidateLengthErrorType = Enum<typeof ValidateLengthErrorType>;
export interface ValidateLengthOption {
    min?: number;
    max?: number;
    isRequired?: boolean;
}
export declare const VALIDATE_LENGTH_DEFAULT_MAX_LENGTH = 256;
export declare const validateLength: (value: string, { min, max, isRequired }?: ValidateLengthOption) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | null;
