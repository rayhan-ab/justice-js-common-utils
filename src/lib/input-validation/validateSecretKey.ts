/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateSecretKeyErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export type ValidateSecretKeyErrorType = Enum<typeof ValidateSecretKeyErrorType>;

export interface ValidateSecretKeyOptions {
  isRequired?: boolean;
  maxLength?: number;
}

export const validateSecretKey = (
  value: string,
  { isRequired = true, maxLength = 256 }: ValidateSecretKeyOptions = {}
) => {
  const REGEX = `^[^*\\s]+$`;
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateSecretKeyErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateSecretKeyErrorType.invalidFormat;
  }
  return validateLength(value, { max: maxLength });
};
