import { Enum } from "../../types/types";
export declare const ValidateJSONErrorType: Readonly<{
    empty: "empty";
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateJSONErrorType = Enum<typeof ValidateJSONErrorType>;
export interface ValidateJSONOption {
    isRequired?: boolean;
    isObject?: boolean;
}
export declare const validateJSON: (value: string, { isRequired, isObject }?: ValidateJSONOption) => "empty" | "invalidFormat" | null;
