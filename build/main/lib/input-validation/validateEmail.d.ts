import { Enum } from "../../types/types";
export declare const ValidateEmailErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateEmailErrorType = Enum<typeof ValidateEmailErrorType>;
export interface ValidateEmailOptions {
    isRequired?: boolean;
}
export declare const validateEmail: (value: string, { isRequired }?: ValidateEmailOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
