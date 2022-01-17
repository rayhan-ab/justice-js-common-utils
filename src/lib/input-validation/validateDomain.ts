/*
 * Copyright (c) 2021-2022. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateDomainErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export type ValidateDomainErrorType = Enum<typeof ValidateDomainErrorType>;

export interface ValidateDomainOptions {
  maxLength?: number;
  isRequired?: boolean;
  isFullDomain?: boolean;
}

export const validateDomain = (
  value: string,
  { maxLength = 63, isRequired = true, isFullDomain = false }: ValidateDomainOptions = {}
) => {
  const REGEX = isFullDomain
    ? "^\\b((?=[a-z0-9-]{1,63}\\.)[a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,63}\\b$"
    : "^\\w[\\w.-]+\\w$";
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
