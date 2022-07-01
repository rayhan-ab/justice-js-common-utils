/*
 * Copyright (c) 2022. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateEventPayloadErrorType = ExtendEnum(
  ValidateLengthErrorType,
  CommonValidationErrorType.invalidFormat
);
export type ValidateEventPayloadErrorType = Enum<typeof ValidateEventPayloadErrorType>;

export interface ValidateEventPayloadOptions {
  maxLength?: number;
  isRequired?: boolean;
}

export const validateEventPayload = (
  value: string,
  { maxLength = 255, isRequired = true }: ValidateEventPayloadOptions = {}
) => {
  const REGEX = "^\\b((?=[\\w])[\\w]+(\\.[\\w]+)*:)+[\\w]{1,255}\\b$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateEventPayloadErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateEventPayloadErrorType.invalidFormat;
  }
  return validateLength(value, { max: maxLength });
};
