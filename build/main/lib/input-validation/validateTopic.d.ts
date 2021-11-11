import { Enum } from "../../types/types";
export declare const ValidateTopicErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateTopicErrorType = Enum<typeof ValidateTopicErrorType>;
export interface ValidateTopicOptions {
    isRequired?: boolean;
}
export declare const validateTopic: (value: string, { isRequired }?: ValidateTopicOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
