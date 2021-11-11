import { Enum } from "../../types/types";
export declare const ValidateNotEmptyErrorType: Readonly<{
    empty: "empty";
}>;
export declare type ValidateNotEmptyErrorType = Enum<typeof ValidateNotEmptyErrorType>;
interface Options {
    ignore_whitespace: boolean;
}
export declare const validateNotEmpty: (value: string, options?: Options | undefined) => "empty" | null;
export {};
