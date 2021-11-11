import { Enum } from "../../types/types";
export declare const ValidateMemorySizeErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateMemorySizeErrorType = Enum<typeof ValidateMemorySizeErrorType>;
export interface ValidateMemorySizeOptions {
    isRequired?: boolean;
}
export declare const validateMemorySize: (value: string, { isRequired }?: ValidateMemorySizeOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
