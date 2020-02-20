/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isAlpha, isEmpty, isLowercase, isUppercase } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType, ThrownErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateAlphaErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export type ValidateAlphaErrorType = Enum<typeof ValidateAlphaErrorType>;

export interface ValidateAlphaOptions {
  maxLength?: number;
  isRequired?: boolean;
  isUppercaseOnly?: boolean;
  isLowercaseOnly?: boolean;
}

export const validateAlpha = (
  value: string,
  { maxLength = 256, isRequired = true, isUppercaseOnly = false, isLowercaseOnly = false }: ValidateAlphaOptions = {}
) => {
  if (isLowercaseOnly && isUppercaseOnly) {
    throw new Error(ThrownErrorType.invalidOption);
  }
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateAlphaErrorType.empty;
  }
  if (isUppercaseOnly && !isUppercase(value)) {
    return ValidateAlphaErrorType.invalidFormat;
  }
  if (isLowercaseOnly && !isLowercase(value)) {
    return ValidateAlphaErrorType.invalidFormat;
  }
  if (!isAlpha(value)) {
    return ValidateAlphaErrorType.invalidFormat;
  }
  return validateLength(value, { max: maxLength });
};
