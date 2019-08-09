/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateUrlErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export type ValidateUrlErrorType = Enum<typeof ValidateUrlErrorType>;

export interface ValidateUrlOptions {
  isRequired?: boolean;
}

export const validateUrl = (value: string, { isRequired = true }: ValidateUrlOptions = {}) => {
  const DEFAULT_MAX_URL_LENGTH = 2000;
  const REGEX =
    // tslint:disable-next-line
    "^((((https?|ftps?|gopher|telnet|nntp):\\/\\/)|(mailto:|news:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:]])?$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateUrlErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateUrlErrorType.invalidFormat;
  }
  return validateLength(value, { max: DEFAULT_MAX_URL_LENGTH });
};
