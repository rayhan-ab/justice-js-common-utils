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
  CommonValidationErrorType.invalidFileExtensions
);
export type ValidateFileErrorType = Enum<typeof ValidateFileErrorType>;

export interface ValidateFileOption {
  isRequired?: boolean;
  acceptedFileExtensions?: string[];
}

export const validateFile = (
  file: File | null,
  { isRequired = true, acceptedFileExtensions }: ValidateFileOption = {}
) => {
  const fileExtension = file ? `.${file.name.split(".").pop()}` : "";

  if (isRequired && !file) {
    return ValidateFileErrorType.empty;
  }

  if (acceptedFileExtensions && (isEmpty(fileExtension) || acceptedFileExtensions.indexOf(fileExtension) === -1)) {
    return ValidateFileErrorType.invalidFileExtensions;
  }

  return null;
};
