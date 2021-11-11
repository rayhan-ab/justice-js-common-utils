import { Enum } from "../../types/types";
export declare const ValidateSecretKeyErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateSecretKeyErrorType = Enum<typeof ValidateSecretKeyErrorType>;
export interface ValidateSecretKeyOptions {
    isRequired?: boolean;
    maxLength?: number;
}
export declare const validateSecretKey: (value: string, { isRequired, maxLength }?: ValidateSecretKeyOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
