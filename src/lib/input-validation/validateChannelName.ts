/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateChannelNameErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidateChannelNameErrorType = Enum<typeof ValidateChannelNameErrorType>;

export interface ValidateChannelNameOptions {
  isRequired?: boolean;
}

export const validateChannelName = (value: string, { isRequired = true }: ValidateChannelNameOptions = {}) => {
  const MAX_LENGTH = 64;
  const REGEX = "^([a-z0-9]+)(-?[a-z0-9])*$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateChannelNameErrorType.empty;
  }
  if (!matches(value, REGEX) && value.length <= MAX_LENGTH) {
    return ValidateChannelNameErrorType.invalidFormat;
  }
  return validateLength(value, { max: MAX_LENGTH });
};
