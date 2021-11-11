import { Enum } from "../../types/types";
export declare const ValidateProductKeyErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateProductKeyErrorType = Enum<typeof ValidateProductKeyErrorType>;
export interface ValidateProductKeyOptions {
    isRequired?: boolean;
    max?: number;
}
export declare const validateProductKey: (value: string, { isRequired, max }?: ValidateProductKeyOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
