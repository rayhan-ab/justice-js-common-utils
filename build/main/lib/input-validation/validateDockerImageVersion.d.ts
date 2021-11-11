import { Enum } from "../../types/types";
export declare const ValidateDockerVersionErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateDockerVersionErrorType = Enum<typeof ValidateDockerVersionErrorType>;
export interface ValidateImageNameOptions {
    maxLength?: number;
    isRequired?: boolean;
}
export declare const validateDockerImageVersion: (value: string, { maxLength, isRequired }?: ValidateImageNameOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
