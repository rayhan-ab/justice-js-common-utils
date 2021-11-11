import { Enum } from "../../types/types";
export declare const ValidateCpuSizeErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateCpuSizeErrorType = Enum<typeof ValidateCpuSizeErrorType>;
export interface ValidateCpuSizeOptions {
    isRequired?: boolean;
}
export declare const validateCpuSize: (value: string, { isRequired }?: ValidateCpuSizeOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
