/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, isNumeric } from "validator";
import { Enum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";

export const ValidateNumericErrorType = Enum(
  ErrorTypes.empty,
  ErrorTypes.lessThanMinimumValue,
  ErrorTypes.exceedMaximumValue,
  ErrorTypes.notANumber,
  ErrorTypes.invalidOption
);
export type ValidateNumericErrorType = Enum<typeof ValidateNumericErrorType>;

export interface ValidateNumericOption {
  min?: number;
  max?: number;
}

export const validateNumeric = (value: string, option?: ValidateNumericOption) => {
  const DEFAULT_MAX_VALUE = Number.MAX_SAFE_INTEGER;
  const DEFAULT_MIN_VALUE = Number.MIN_SAFE_INTEGER;

  const maximumValue = option && option.max !== undefined ? option.max : DEFAULT_MAX_VALUE;
  const minimumValue = option && option.min !== undefined ? option.min : DEFAULT_MIN_VALUE;

  const isMaxOptionSmallerThanMinOption = maximumValue < minimumValue;
  if (isMaxOptionSmallerThanMinOption) {
    return ValidateNumericErrorType.invalidOption;
  }
  if (isEmpty(value)) {
    return ValidateNumericErrorType.empty;
  }
  if (!isNumeric(value)) {
    return ValidateNumericErrorType.notANumber;
  }
  if (Number(value) < minimumValue) {
    return ValidateNumericErrorType.lessThanMinimumValue;
  }
  if (Number(value) > maximumValue) {
    return ValidateNumericErrorType.exceedMaximumValue;
  }

  return null;
};
