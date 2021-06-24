/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { MAX_SHORT_TEXT_LENGTH } from "./constant/numbers";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateDockerVersionErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);

export type ValidateDockerVersionErrorType = Enum<typeof ValidateDockerVersionErrorType>;

export interface ValidateImageNameOptions {
  maxLength?: number;
  isRequired?: boolean;
}

export const validateDockerImageVersion = (
  value: string,
  { maxLength = MAX_SHORT_TEXT_LENGTH, isRequired = true }: ValidateImageNameOptions = {}
) => {
  const REGEX = "[^A-Za-z0-9-_.]";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateDockerVersionErrorType.empty;
  }

  if (matches(value, REGEX)) {
    return ValidateDockerVersionErrorType.invalidFormat;
  }

  return validateLength(value, { max: maxLength });
};
