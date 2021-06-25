/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";

export const ValidateFileErrorType = Enum(
  CommonValidationErrorType.empty,
  CommonValidationErrorType.invalidFileExtensions,
  CommonValidationErrorType.exceedMaximumFileSize
);
export type ValidateFileErrorType = Enum<typeof ValidateFileErrorType>;

export interface ValidateFileOption {
  isRequired?: boolean;
  acceptedFileExtensions?: string[];
  maxFileSize?: number;
}

export const validateFile = (
  file: File | null,
  { isRequired = true, acceptedFileExtensions, maxFileSize }: ValidateFileOption = {}
) => {
  const fileExtension = file ? `.${file.name.split(".").pop()}` : "";
  const fileSize = file ? file.size : 0;

  if (isRequired && !file) {
    return ValidateFileErrorType.empty;
  }

  if (acceptedFileExtensions && (isEmpty(fileExtension) || acceptedFileExtensions.indexOf(fileExtension) === -1)) {
    return ValidateFileErrorType.invalidFileExtensions;
  }

  if (maxFileSize && fileSize > maxFileSize) {
    return ValidateFileErrorType.exceedMaximumFileSize;
  }

  return null;
};
