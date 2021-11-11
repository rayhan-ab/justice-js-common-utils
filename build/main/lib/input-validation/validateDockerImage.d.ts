import { Enum } from "../../types/types";
export declare const ValidateDockerImageErrorType: Readonly<{
    empty: "empty";
    lessThanLengthLimit: "lessThanLengthLimit";
    exceedLengthLimit: "exceedLengthLimit";
}> & Readonly<{
    invalidFormat: "invalidFormat";
}>;
export declare type ValidateDockerImageErrorType = Enum<typeof ValidateDockerImageErrorType>;
export interface ValidateDockerImageOptions {
    isRequired?: boolean;
}
export declare const validateDockerImage: (value: string, { isRequired }?: ValidateDockerImageOptions) => "empty" | "lessThanLengthLimit" | "exceedLengthLimit" | "invalidFormat" | null;
