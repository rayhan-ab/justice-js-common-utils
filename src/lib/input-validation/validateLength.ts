/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty } from "validator";
import { Enum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";

export const ValidateLengthErrorType = Enum(
  ErrorTypes.empty,
  ErrorTypes.lessThanLengthLimit,
  ErrorTypes.exceedLengthLimit,
  ErrorTypes.invalidOption
);
export type ValidateLengthErrorType = Enum<typeof ValidateLengthErrorType>;

export interface ValidateLengthOption {
  min?: number;
  max?: number;
}

export const validateLength = (value: string, option?: ValidateLengthOption) => {
  const DEFAULT_MAX_LENGTH = 256;
  const DEFAULT_MIN_LENGTH = 1;

  const maximumLength = option && option.max !== undefined ? option.max : DEFAULT_MAX_LENGTH;
  const minimumLength = option && option.min !== undefined ? option.min : DEFAULT_MIN_LENGTH;

  const isMinOptionMinus = minimumLength < 0;
  const isMaxOptionMinus = maximumLength < 0;
  const isMaxOptionSmallerThanMinOption = maximumLength < minimumLength;
  if (isMinOptionMinus || isMaxOptionMinus || isMaxOptionSmallerThanMinOption) {
    return ValidateLengthErrorType.invalidOption;
  }
  if (isEmpty(value)) {
    return ValidateLengthErrorType.empty;
  }
  if (value && value.length < minimumLength) {
    return ValidateLengthErrorType.lessThanLengthLimit;
  }
  if (value && value.length > maximumLength) {
    return ValidateLengthErrorType.exceedLengthLimit;
  }

  return null;
};
