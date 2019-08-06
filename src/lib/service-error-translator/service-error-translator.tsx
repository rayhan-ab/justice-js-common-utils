/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { Trans } from "react-i18next";

interface ServiceError {
  ErrorCode: number,
  ErrorMessage: string,
}

interface ServiceErrorProps {
  error: ServiceError;
}

// tslint:disable-next-line no-any
const isValidServiceError = (error: any): error is ServiceError => {
  return typeof error === "object" && typeof error.ErrorCode === "number" && typeof error.ErrorMessage === "string";
}

export const ServiceErrorTranslator = (props: ServiceErrorProps): React.ReactNode => {
  if (isValidServiceError(props.error) && props.error.ErrorCode in serviceErrorTranslationMap) {
    return serviceErrorTranslationMap[props.error.ErrorCode];
  }
  return (
    <Trans i18nKey="serviceError.unknown">
      Failed to complete the request
    </Trans>
  );
};

const serviceErrorTranslationMap: { [key: string]: React.ReactNode } = Object.freeze({
  1014002:
    <Trans i18nKey="serviceError.1014002">
      User already exist
    </Trans>,
  1014047:
    <Trans i18nKey="serviceError.1014047">
      Failed to create User. Date of birth does not meet the age requirement.
    </Trans>,
});
