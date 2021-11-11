import { Enum } from "../../types/types";
export declare const ValidateKubelessHandlerErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateKubelessHandlerErrorType = Enum<typeof ValidateKubelessHandlerErrorType>;
export interface ValidateKubelessHandlerOptions {
    isRequired?: boolean;
}
export declare const validateKubelessHandler: (value: string, { isRequired }?: ValidateKubelessHandlerOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
