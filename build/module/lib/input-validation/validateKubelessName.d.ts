import { Enum } from "../../types/types";
export declare const ValidateKubelessNameErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateKubelessNameErrorType = Enum<typeof ValidateKubelessNameErrorType>;
export interface ValidateKubelessNameOptions {
    isRequired?: boolean;
}
export declare const validateKubelessName: (value: string, { isRequired }?: ValidateKubelessNameOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
