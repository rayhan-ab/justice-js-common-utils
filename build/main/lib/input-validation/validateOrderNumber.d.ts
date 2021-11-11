import { Enum } from "../../types/types";
export declare const ValidateOrderNumberErrorType: Readonly<{
    empty: "empty";
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateOrderNumberErrorType = Enum<typeof ValidateOrderNumberErrorType>;
export interface ValidateOrderNumberOptions {
    isRequired?: boolean;
}
export declare const validateOrderNumber: (value: string, { isRequired }?: ValidateOrderNumberOptions) => "empty" | "invalidFormat" | null;
