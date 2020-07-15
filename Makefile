# Copyright (c) 2018-2019 AccelByte Inc. All Rights Reserved.
# This is licensed software from AccelByte Inc, for limitations
# and restrictions contact your company contract manager.

ifeq ($(CUSTOMER),)
    SERVICE=justice-js-common-utils
else
    SERVICE=$(CUSTOMER)-justice-js-common-utils
endif

SERVICE_PATH=$(SERVICE)
BUILDER_IMAGE=$(SERVICE)-builder
REVISION_ID?=unknown
export SONARQUBE?=false

RUN=docker run --rm \
	-v $(CURDIR):/workspace/$(SERVICE_PATH) \
	-w /workspace/$(SERVICE_PATH)

.PHONY: build test

build:
	docker build --target builder --tag="$(BUILDER_IMAGE)" .
	$(RUN) $(BUILDER_IMAGE) yarn install
	$(RUN) $(BUILDER_IMAGE) yarn build

run:
	$(RUN) -it $(BUILDER_IMAGE) yarn watch

clean:
	$(RUN) $(BUILDER_IMAGE) yarn run clean
	-$(RUN) --user=root $(BUILDER_IMAGE) rm -rf node_modules
	-$(RUN) --user=root $(BUILDER_IMAGE) rm -rf build
	-docker rmi -f $(BUILDER_IMAGE) $(SERVICE):$(REVISION_ID)

rebuild:
	$(RUN) $(BUILDER_IMAGE) yarn install
	$(RUN) $(BUILDER_IMAGE) npm rebuild --update-binary

test:
	$(RUN) $(BUILDER_IMAGE) yarn test

publish:
	echo 'registry=${NEXUS_REPOSITORY_URL}\nemail=${NEXUS_EMAIL}\nalways-auth=true\n_auth=${NEXUS_AUTH}' > .npmrc
	npm publish

pack:
	npm pack
