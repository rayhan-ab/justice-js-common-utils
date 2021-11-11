import { Enum } from "../../types/types";
export declare const ValidatePathErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidatePathErrorType = Enum<typeof ValidatePathErrorType>;
export interface ValidatePathSizeOptions {
    isRequired?: boolean;
}
export declare const validatePath: (value: string, { isRequired }?: ValidatePathSizeOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
