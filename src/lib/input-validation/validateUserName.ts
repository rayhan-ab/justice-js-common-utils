/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { MAX_DISPLAY_NAME_LENGTH } from "./constant/numbers";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateUserNameErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export type ValidateUserNameErrorType = Enum<typeof ValidateUserNameErrorType>;

export const MIN_USERNAME_LENGTH = 3;

export interface ValidateUserNameOptions {
  isRequired?: boolean;
  maxLength?: number;
  minLength?: number;
}

/**
 *
 * @param value
 * @param isRequired
 * @param maxLength
 * @param minLength
 *
 * @default isRequired true
 * @default maxLength MAX_DISPLAY_NAME_LENGTH
 * @default minLength MIN_USERNAME_LENGTH
 */
export const validateUserName = (
  value: string,
  {
    isRequired = true,
    maxLength = MAX_DISPLAY_NAME_LENGTH,
    minLength = MIN_USERNAME_LENGTH,
  }: ValidateUserNameOptions = {}
) => {
  const REGEX = "^[^\\W_][\\w]+[^\\W_]$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateUserNameErrorType.empty;
  }

  if (!matches(value, REGEX)) {
    return ValidateUserNameErrorType.invalidFormat;
  }

  return validateLength(value, {
    max: maxLength,
    min: minLength,
  });
};
