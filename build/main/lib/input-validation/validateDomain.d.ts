import { Enum } from "../../types/types";
export declare const ValidateDomainErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateDomainErrorType = Enum<typeof ValidateDomainErrorType>;
export interface ValidateDomainOptions {
    maxLength?: number;
    isRequired?: boolean;
}
export declare const validateDomain: (value: string, { maxLength, isRequired }?: ValidateDomainOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
