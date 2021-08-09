/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";

export const ValidateJSONErrorType = Enum(CommonValidationErrorType.empty, CommonValidationErrorType.invalidFormat);
export type ValidateJSONErrorType = Enum<typeof ValidateJSONErrorType>;

export interface ValidateJSONOption {
  isRequired?: boolean;
  isObject?: boolean;
}

export const validateJSON = (value: string, { isRequired = true, isObject = true }: ValidateJSONOption = {}) => {
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateJSONErrorType.empty;
  }

  try {
    const parsedJSON = JSON.parse(value);
    if (isObject && typeof parsedJSON !== "object") {
      return ValidateJSONErrorType.invalidFormat;
    }
    return null;
  } catch (e) {
    return ValidateJSONErrorType.invalidFormat;
  }
};
