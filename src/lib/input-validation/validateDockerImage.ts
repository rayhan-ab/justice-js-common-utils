/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateDockerImageErrorType = ExtendEnum(ValidateLengthErrorType, ErrorTypes.invalidFormat);
export type ValidateDockerImageErrorType = Enum<typeof ValidateDockerImageErrorType>;

export const validateDockerImage = (value: string) => {
  const REGEX = "^[a-z0-9]+([\\/_-]{1}[a-z0-9]+)*([:]{1}([0-9a-z]+([.-]{1}[0-9a-z]+)*)+)?$";
  if (isEmpty(value)) {
    return ValidateDockerImageErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateDockerImageErrorType.invalidFormat;
  }
  return validateLength(value);
};
