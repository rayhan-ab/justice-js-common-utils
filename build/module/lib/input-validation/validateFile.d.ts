import { Enum } from "../../types/types";
export declare const ValidateFileErrorType: Readonly<{
    empty: "empty";
    invalidFileExtensions: "invalidFileExtensions";
    exceedMaximumFileSize: "exceedMaximumFileSize";
}>;
export declare type ValidateFileErrorType = Enum<typeof ValidateFileErrorType>;
export interface ValidateFileOption {
    isRequired?: boolean;
    acceptedFileExtensions?: string[];
    maxFileSize?: number;
}
export declare const validateFile: (file: File | null, { isRequired, acceptedFileExtensions, maxFileSize }?: ValidateFileOption) => "empty" | "invalidFileExtensions" | "exceedMaximumFileSize" | null;
