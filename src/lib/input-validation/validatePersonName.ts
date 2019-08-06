/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidatePersonNameErrorType = ExtendEnum(ValidateLengthErrorType, ErrorTypes.invalidFormat);
export type ValidatePersonNameErrorType = Enum<typeof ValidatePersonNameErrorType>;

export const validatePersonName = (value: string) => {
  const REGEX = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
  if (isEmpty(value)) {
    return ValidatePersonNameErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidatePersonNameErrorType.invalidFormat;
  }
  return validateLength(value);
};
