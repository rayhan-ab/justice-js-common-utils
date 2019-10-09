/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateDockerImageErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidateDockerImageErrorType = Enum<typeof ValidateDockerImageErrorType>;

export interface ValidateDockerImageOptions {
  isRequired?: boolean;
}

export const validateDockerImage = (value: string, { isRequired = true }: ValidateDockerImageOptions = {}) => {
  const REGEX = "^[a-z0-9]+([.\\/_-]{1}[a-z0-9]+)*([:]{1}([0-9a-z]+([.-]{1}[0-9a-z]+)*)+)?$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateDockerImageErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateDockerImageErrorType.invalidFormat;
  }
  return validateLength(value);
};
