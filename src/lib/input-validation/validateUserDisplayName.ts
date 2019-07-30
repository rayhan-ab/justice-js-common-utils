/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateUserDisplayNameErrorType = ExtendEnum(ValidateLengthErrorType, ErrorTypes.invalidFormat);
export type ValidateUserDisplayNameErrorType = Enum<typeof ValidateUserDisplayNameErrorType>;

export const validateUserDisplayName = (value: string) => {
  const REGEX = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
  if (isEmpty(value)) {
    return ValidateUserDisplayNameErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateUserDisplayNameErrorType.invalidFormat;
  }
  return validateLength(value);
};
