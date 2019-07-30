# Copyright (c) 2018-2019 AccelByte Inc. All Rights Reserved.
# This is licensed software from AccelByte Inc, for limitations
# and restrictions contact your company contract manager.

FROM accelbyte/node:10.14.1-alpine3.8 as builder
RUN apk update && \
    apk add \
    yarn bash

