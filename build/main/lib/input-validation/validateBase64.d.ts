import { Enum } from "../../types/types";
export declare const ValidateBase64ErrorType: Readonly<{
    empty: "empty";
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateBase64ErrorType = Enum<typeof ValidateBase64ErrorType>;
export interface ValidateBase64Options {
    isRequired?: boolean;
}
export declare const validateBase64: (value: string, { isRequired }?: ValidateBase64Options) => "empty" | "invalidFormat" | null;
