import { Enum } from "../../types/types";
export declare const ValidateUuidV4WithoutHyphenErrorType: Readonly<{
    empty: "empty";
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateUuidV4WithoutHyphenErrorType = Enum<typeof ValidateUuidV4WithoutHyphenErrorType>;
export interface ValidateUuidV4WithoutHyphenOptions {
    isRequired?: boolean;
}
export declare const validateUuidV4WithoutHyphen: (value: string, { isRequired }?: ValidateUuidV4WithoutHyphenOptions) => "empty" | "invalidFormat" | null;
