/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty } from "validator";
import { Enum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";

export const ValidateNotEmptyErrorType = Enum(ErrorTypes.empty);
export type ValidateNotEmptyErrorType = Enum<typeof ValidateNotEmptyErrorType>;

export const validateNotEmpty = (value: string) => {
  if (isEmpty(value)) {
    return ValidateNotEmptyErrorType.empty;
  }
  return null;
};
