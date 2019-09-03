/*
 * Copyright (c) 2018-2019 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import flatten from "flat";
import i18next, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import config from "./config.json";

const loadedLanguages: { [key: string]: string } = {
  "en-US": "enUS",
};
const availableLanguageCodes = config.languageCodes;
const translationResource = availableLanguageCodes.reduce((resources: Resource, languageCode: string) => {
  // eslint-disable-next-line no-param-reassign
  resources[languageCode] = {
    // Loading unflattened resource
    translation: flatten.unflatten(loadedLanguages[languageCode]),
  };
  return resources;
}, {});

// @ts-ignore
export const i18nInstance = i18next.use(initReactI18next).createInstance(
  {
    lng: config.defaultLanguage,
    fallbackLng: config.fallbackLanguage,
    preload: availableLanguageCodes,
    resources: translationResource,
    initImmediate: false,
    debug: process.env.NODE_ENV === "development",
  },
  // tslint:disable-next-line no-empty
  () => {}
); // Do not remove the callback. It will break the i18n

// tslint:disable-next-line no-any
export function t(key: string, options?: any) {
  return i18nInstance.t(key, options);
}
