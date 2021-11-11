import { Enum } from "../../types/types";
export declare const ValidateUrlErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateUrlErrorType = Enum<typeof ValidateUrlErrorType>;
export interface ValidateUrlOptions {
    isRequired?: boolean;
    allowCustomProtocol?: boolean;
}
export declare const validateUrl: (value: string, { isRequired, allowCustomProtocol }?: ValidateUrlOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
