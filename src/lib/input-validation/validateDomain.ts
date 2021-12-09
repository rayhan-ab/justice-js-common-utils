/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateDomainErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidateDomainErrorType = Enum<typeof ValidateDomainErrorType>;

export interface ValidateDomainOptions {
  maxLength?: number;
  isRequired?: boolean;
}

export const validateDomain = (
  value: string,
  { maxLength = 63, isRequired = true }: ValidateDomainOptions = {}) => {
  const REGEX = "^\w[\w.-]+\w$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateDomainErrorType.empty;
  }
  if (!matches(value, REGEX) && value.length <= maxLength) {
    return ValidateDomainErrorType.invalidFormat;
  }
  return validateLength(value, { max: maxLength });
};
