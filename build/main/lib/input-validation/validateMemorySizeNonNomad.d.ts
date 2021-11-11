import { Enum } from "../../types/types";
export declare const ValidateMemorySizeNonNomadErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateMemorySizeNonNomadErrorType = Enum<typeof ValidateMemorySizeNonNomadErrorType>;
export interface ValidateMemorySizeNonNomadOptions {
    isRequired?: boolean;
}
export declare const validateMemorySizeNonNomad: (value: string, { isRequired }?: ValidateMemorySizeNonNomadOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
