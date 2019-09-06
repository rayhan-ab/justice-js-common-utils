/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { Trans } from "react-i18next";
import { IAMErrorTranslationMap } from "./error-translation-map/iam-error-translation-map";


interface ServiceErrorProps {
  errorCode: number;
}

// tslint:disable-next-line no-any
const isValidServiceError = (errorCode: number): errorCode is number => {
  return typeof errorCode === "number";
};

export const ServiceErrorTranslator = (props: ServiceErrorProps) => {
  if (isValidServiceError(props.errorCode) && props.errorCode in serviceErrorTranslationMap) {
    return serviceErrorTranslationMap[props.errorCode];
  }
  return null;
};

export const translateServiceError= (errorCode: number) => {
  if (isValidServiceError(errorCode) && errorCode in serviceErrorTranslationMap) {
    return serviceErrorTranslationMap[errorCode];
  }
  return (<Trans i18nKey="serviceError.unknown">
    Failed to complete the request
  </Trans>);
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
  ...IAMErrorTranslationMap
});
