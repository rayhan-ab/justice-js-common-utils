import { Enum } from "../../types/types";
export declare const ValidateCpuSizeNonNomadErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateCpuSizeNonNomadErrorType = Enum<typeof ValidateCpuSizeNonNomadErrorType>;
export interface ValidateCpuSizeNonNomadOptions {
    isRequired?: boolean;
}
export declare const validateCpuSizeNonNomad: (value: string, { isRequired }?: ValidateCpuSizeNonNomadOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
