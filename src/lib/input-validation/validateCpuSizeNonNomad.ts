/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

// tslint:disable-next-line:max-line-length
export const ValidateCpuSizeNonNomadErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidateCpuSizeNonNomadErrorType = Enum<typeof ValidateCpuSizeNonNomadErrorType>;

export interface ValidateCpuSizeNonNomadOptions {
  isRequired?: boolean;
}

export const validateCpuSizeNonNomad = (value: string, { isRequired = true }: ValidateCpuSizeNonNomadOptions = {}) => {
  const MAX_LENGTH = 8;
  const REGEX = "^[0-9]+m$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateCpuSizeNonNomadErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateCpuSizeNonNomadErrorType.invalidFormat;
  }
  return validateLength(value, { max: MAX_LENGTH });
};
