/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateBadWords, ValidateBadWordsErrorType } from "./validateBadWords";

const mockValidateBadWords = jest.fn(validateBadWords);
afterEach(mockValidateBadWords.mockClear);
afterAll(mockValidateBadWords.mockRestore);

describe("validateBadWords returns correct output", () => {
  it("returns empty when given empty string", () => {
    mockValidateBadWords("", { isRequired: false });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(null);
  });
  it('returns null error when given "Normal text" string with language *', () => {
    mockValidateBadWords("Normal text", { isRequired: true, languageCode: "*" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(null);
  });
  it('returns null error when given "" string with language * and isRequired false', () => {
    mockValidateBadWords("", { isRequired: false, languageCode: "*" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(null);
  });
  it("returns empty error when given empty string with isRequired true", () => {
    mockValidateBadWords("", { isRequired: true });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.empty);
  });
  it('returns containsBadWords error when given "Don\'t be an asshole" string with language en', () => {
    mockValidateBadWords("Don't be an asshole", { languageCode: "en" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
  it('returns containsBadWords when given "4l4sk4np1p3l1n3" string with language en with matchingMode exact', () => {
    mockValidateBadWords("4l4sk4np1p3l1n3", { languageCode: "en", matchingMode: "exact" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
  it('returns containsBadWords error when given "b4byb4tt3r" string with language en', () => {
    mockValidateBadWords("b4byb4tt3r", { languageCode: "en" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
  it('returns containsBadWords error when given "Don\'t be an asshole" string with language *', () => {
    mockValidateBadWords("Don't be an asshole", { languageCode: "*" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
  it('returns null error when given "Don\'t be an asshole" string with language * with matchingMode exact', () => {
    mockValidateBadWords("Don't be an asshole", { languageCode: "*", matchingMode: "exact" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(null);
  });
  it('returns containsBadWords error when given "肏你妈" string with language zh', () => {
    mockValidateBadWords("肏你妈", { languageCode: "zh" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
  it('returns null error when given "肏你妈" string with language zh with matchingMode exact', () => {
    mockValidateBadWords("肏你妈", { languageCode: "zh", matchingMode: "exact" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(null);
  });
  it('returns null when given "肏你妈" string with language en', () => {
    mockValidateBadWords("肏你妈", { languageCode: ["en"] });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(null);
  });
  it('returns containsBadWords error when given "肏你妈" string with array of language [en, zh]', () => {
    mockValidateBadWords("肏你妈", { languageCode: ["zh", "en"] });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
  it('returns null error when given "肏你妈" string with array of language [en, zh] with matchingMode exact', () => {
    mockValidateBadWords("肏你妈", { languageCode: ["zh", "en"], matchingMode: "exact" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(null);
  });
  it('returns containsBadWords error when given "Don\'t be an asshole" string with array of language [en, zh]', () => {
    mockValidateBadWords("Don't be an asshole", { languageCode: ["zh", "en"] });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
  it('returns containsBadWords error when given "Don\'t be an asshole" string with language *', () => {
    mockValidateBadWords("Don't be an asshole", { languageCode: "*" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
  it('returns containsBadWords error when given "肏你妈" string with language *', () => {
    mockValidateBadWords("肏你妈", { languageCode: "*" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
  it('returns null error when given "طيزك حمرا." string with language ar with matchingMode exact', () => {
    mockValidateBadWords("طيزك حمرا.", { languageCode: "ar", matchingMode: "exact" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(null);
  });
  it('returns containsBadWords error when given "طيزك حمرا." string with language ar', () => {
    mockValidateBadWords("طيزك حمرا.", { languageCode: "ar" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
  it('returns containsBadWords error when given "طيزك حمرا." string with language *', () => {
    mockValidateBadWords("طيزك حمرا.", { languageCode: "*" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
  it('returns containsBadWords error when given "ебать тебя" string with language ru', () => {
    mockValidateBadWords("ебать тебя", { languageCode: "ru" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
  it('returns containsBadWords error when given "ебать тебя" string with language *', () => {
    mockValidateBadWords("ебать тебя", { languageCode: "*" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
  it('returns containsBadWords error when given "Fick dich" string with language de', () => {
    mockValidateBadWords("Fick dich", { languageCode: "de" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
  it('returns containsBadWords error when given "Fick dich" string with language *', () => {
    mockValidateBadWords("Fick dich", { languageCode: "*" });
    expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
    expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
  });
});
