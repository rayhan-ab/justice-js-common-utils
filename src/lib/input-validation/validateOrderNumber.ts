/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";

export const ValidateOrderNumberErrorType = Enum(ErrorTypes.empty, ErrorTypes.invalidFormat);
export type ValidateOrderNumberErrorType = Enum<typeof ValidateOrderNumberErrorType>;

export const validateOrderNumber = (value: string) => {
  const REGEX = "^O[0-9]{16}$";
  if (isEmpty(value)) {
    return ValidateOrderNumberErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateOrderNumberErrorType.invalidFormat;
  }

  return null;
};
