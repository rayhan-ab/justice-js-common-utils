/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { Trans } from "react-i18next";

export const EcommerceAdminErrorTranslationMap: { [key: string]: React.ReactNode } = {
  30326: <Trans i18nKey="adminServiceError.30326">Subscription item cannot be bundled</Trans>,
  30327: <Trans i18nKey="adminServiceError.30327">Invalid item trial price</Trans>,
  31178: <Trans i18nKey="adminServiceError.31178">Entitlement out of time range</Trans>,
  33271: (
    <Trans i18nKey="adminServiceError.33271">
      Payment provider config for current namespace and region already exists
    </Trans>
  ),
  37271: <Trans i18nKey="adminServiceError.37271">Key Group Name is already exists.</Trans>,
  37221: (
    <Trans i18nKey="adminServiceError.37221">
      Upload file failed. It's either empty or file extension is not acceptable
    </Trans>
  ),
  38122: <Trans i18nKey="adminServiceError.38122">Subscription end date required</Trans>,
  40141: <Trans i18nKey="adminServiceError.40141">Subscription does not exist</Trans>,
};
