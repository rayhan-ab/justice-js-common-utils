import { Enum } from "../../types/types";
export declare const ValidatePersonNameErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidatePersonNameErrorType = Enum<typeof ValidatePersonNameErrorType>;
export interface ValidatePersonNameOptions {
    isRequired?: boolean;
}
export declare const validatePersonName: (value: string, { isRequired }?: ValidatePersonNameOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
