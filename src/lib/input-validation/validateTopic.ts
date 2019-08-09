/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateTopicErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export type ValidateTopicErrorType = Enum<typeof ValidateTopicErrorType>;

export interface ValidateTopicOptions {
  isRequired?: boolean;
}

export const validateTopic = (value: string, { isRequired = true }: ValidateTopicOptions = {}) => {
  const REGEX = "^[A-Z]+([_]{1}[A-Z]+)*$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateTopicErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateTopicErrorType.invalidFormat;
  }
  return validateLength(value);
};
