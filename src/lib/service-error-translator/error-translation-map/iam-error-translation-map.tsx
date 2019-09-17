/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { Trans } from "react-i18next";

export const IAMErrorTranslationMap: { [key: string]: React.ReactNode } = {
  10130: <Trans i18nKey="serviceError.10130">Sorry, we are unable to process this request</Trans>,
  10131: <Trans i18nKey="serviceError.10131">Please enter valid date of birth format</Trans>,
  10132: (
    <Trans i18nKey="serviceError.10132">Please enter valid email address format, for example: user@example.com</Trans>
  ),
  10142: <Trans i18nKey="serviceError.10142">Sorry, your new password cannot be the same as the old one</Trans>,
  10143: (
    <Trans i18nKey="serviceError.10143">
      The password that you enter does not match. Please make sure you input the correct password
    </Trans>
  ),
  10155: <Trans i18nKey="serviceError.10155">Country is required</Trans>,
  20002: <Trans i18nKey="serviceError.20002">Please correct the errors in the form to proceed</Trans>,
  20019: (
    <Trans i18nKey="serviceError.20019">
      Something went wrong. For more information please contact our support at hello@accelbyte.io
    </Trans>
  ),
  20021: (
    <Trans i18nKey="serviceError.20021">
      Something went wrong. For more information please contact our support at hello@accelbyte.io
    </Trans>
  ),
  20001: <Trans i18nKey="serviceError.20001">Sorry, the page you want to access is publicly unavailable.</Trans>,
  10136: (
    <Trans i18nKey="serviceError.10136">Sorry, the code you entered is already used. Please resquest a new one.</Trans>
  ),
  10137: <Trans i18nKey="serviceError.10137">Sorry, the code you entered is expired. Please request a new one.</Trans>,
  10138: <Trans i18nKey="serviceError.10138">Sorry, the code you entered is invalid. Please try again.</Trans>,
  20013: (
    <Trans i18nKey="serviceError.20013">Sorry, you have no permission to do this action or access this page</Trans>
  ),
  10154: <Trans i18nKey="serviceError.10154">Country does not exist</Trans>,
  10171: <Trans i18nKey="serviceError.10171">This email address is not registered</Trans>,
  20008: <Trans i18nKey="serviceError.20008">User does not exist</Trans>,
  10133: <Trans i18nKey="serviceError.10133">Sorry, you must enter a new email address</Trans>,
  10140: <Trans i18nKey="serviceError.10140">User is already verified</Trans>,
  10153: <Trans i18nKey="serviceError.10153">User already exists</Trans>,
  20007: <Trans i18nKey="serviceError.20007">You have requested too many codes. Please try again later.</Trans>,
};
