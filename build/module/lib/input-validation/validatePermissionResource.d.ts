import { Enum } from "../../types/types";
export declare const ValidatePermissionResourceErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidatePermissionResourceErrorType = Enum<typeof ValidatePermissionResourceErrorType>;
export interface ValidatePermissionResourceOptions {
    isRequired?: boolean;
}
export declare const validatePermissionResource: (value: string, { isRequired }?: ValidatePermissionResourceOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
