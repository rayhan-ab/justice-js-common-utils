/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { Trans } from "react-i18next";

export const EcommerceErrorTranslationMap: { [key: string]: React.ReactNode } = {
  38171: <Trans i18nKey="serviceError.38171">Sorry, you already own this item</Trans>,
  30122: (
    <Trans i18nKey="serviceError.30122">
      Draft Store should have the same Default Language, Default Region and Namespace with the Published Store.
    </Trans>
  ),
};
