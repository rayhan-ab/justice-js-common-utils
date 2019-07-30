/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isAlphanumeric, isEmpty } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateAlphaNumericErrorType = ExtendEnum(ValidateLengthErrorType, ErrorTypes.invalidFormat);
export type ValidateAlphaNumericErrorType = Enum<typeof ValidateAlphaNumericErrorType>;

export interface ValidateAlphanumericOptions {
  maxLength: number;
}

export const validateAlphanumeric = (value: string, options: ValidateAlphanumericOptions = { maxLength: 256 }) => {
  if (isEmpty(value)) {
    return ValidateAlphaNumericErrorType.empty;
  }
  if (!isAlphanumeric(value)) {
    return ValidateAlphaNumericErrorType.invalidFormat;
  }
  return validateLength(value, { max: options.maxLength });
};
