/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateEmailErrorType = ExtendEnum(ValidateLengthErrorType, ErrorTypes.invalidFormat);
export type ValidateEmailErrorType = Enum<typeof ValidateEmailErrorType>;

export const validateEmail = (value: string) => {
  const REGEX = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
  const MAX_EMAIL_LENGTH = 254;
  if (isEmpty(value)) {
    return ValidateEmailErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateEmailErrorType.invalidFormat;
  }
  return validateLength(value, { max: MAX_EMAIL_LENGTH });
};
