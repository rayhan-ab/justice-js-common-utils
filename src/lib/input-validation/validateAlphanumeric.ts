/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isAlphanumeric, isEmpty } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateAlphaNumericErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidateAlphaNumericErrorType = Enum<typeof ValidateAlphaNumericErrorType>;

export interface ValidateAlphanumericOptions {
  maxLength?: number;
  isRequired?: boolean;
}

export const validateAlphanumeric = (
  value: string,
  { maxLength = 256, isRequired = true }: ValidateAlphanumericOptions = {}
) => {
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateAlphaNumericErrorType.empty;
  }
  if (!isAlphanumeric(value)) {
    return ValidateAlphaNumericErrorType.invalidFormat;
  }
  return validateLength(value, { max: maxLength });
};
