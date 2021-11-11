/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateBadWords, ValidateBadWordsErrorType } from "./validateBadWords";
var mockValidateBadWords = jest.fn(validateBadWords);
afterEach(mockValidateBadWords.mockClear);
afterAll(mockValidateBadWords.mockRestore);
describe("validateBadWords returns correct output", function () {
    it("returns empty when given empty string", function () {
        mockValidateBadWords("", { isRequired: false });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(null);
    });
    it('returns null error when given "Normal text" string with language *', function () {
        mockValidateBadWords("Normal text", { isRequired: true, languageCode: "*" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(null);
    });
    it('returns null error when given "" string with language * and isRequired false', function () {
        mockValidateBadWords("", { isRequired: false, languageCode: "*" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(null);
    });
    it('returns containsBadWords when given "Fuck" string with language en with matchingMode exact', function () {
        mockValidateBadWords("Fuck", { languageCode: "en", matchingMode: "exact" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns containsBadWords when given "Fuuuck" string with language en with matchingMode exact', function () {
        mockValidateBadWords("Fuuuck", { languageCode: "en", matchingMode: "exact" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns containsBadWords when given "fuuuck" string with language en with matchingMode exact', function () {
        mockValidateBadWords("fuuuck", { languageCode: "en", matchingMode: "exact" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it("returns empty error when given empty string with isRequired true", function () {
        mockValidateBadWords("", { isRequired: true });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.empty);
    });
    it('returns containsBadWords error when given "Don\'t be an asshole" string with language en', function () {
        mockValidateBadWords("Don't be an asshole", { languageCode: "en" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns containsBadWords when given "4l4sk4np1p3l1n3" string with language en with matchingMode exact', function () {
        mockValidateBadWords("4l4sk4np1p3l1n3", { languageCode: "en", matchingMode: "exact" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns containsBadWords when given "y3llowshowers" string with language en with matchingMode exact', function () {
        mockValidateBadWords("y3llowshowers", { languageCode: "en", matchingMode: "exact" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns containsBadWords when given "acrotomophilia" string with language en with matchingMode exact', function () {
        mockValidateBadWords("acrotomophilia", { languageCode: "en", matchingMode: "exact" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns containsBadWords error when given "b4byb4tt3r" string with language en', function () {
        mockValidateBadWords("b4byb4tt3r", { languageCode: "en" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns containsBadWords error when given "Don\'t be an asshole" string with language *', function () {
        mockValidateBadWords("Don't be an asshole", { languageCode: "*" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns null error when given "Don\'t be an asshole" string with language * with matchingMode exact', function () {
        mockValidateBadWords("Don't be an asshole", { languageCode: "*", matchingMode: "exact" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(null);
    });
    it('returns containsBadWords error when given "肏你妈" string with language zh', function () {
        mockValidateBadWords("肏你妈", { languageCode: "zh" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns null error when given "肏你妈" string with language zh with matchingMode exact', function () {
        mockValidateBadWords("肏你妈", { languageCode: "zh", matchingMode: "exact" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(null);
    });
    it('returns null when given "肏你妈" string with language en', function () {
        mockValidateBadWords("肏你妈", { languageCode: ["en"] });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(null);
    });
    it('returns containsBadWords error when given "肏你妈" string with array of language [en, zh]', function () {
        mockValidateBadWords("肏你妈", { languageCode: ["zh", "en"] });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns null error when given "肏你妈" string with array of language [en, zh] with matchingMode exact', function () {
        mockValidateBadWords("肏你妈", { languageCode: ["zh", "en"], matchingMode: "exact" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(null);
    });
    it('returns containsBadWords error when given "Don\'t be an asshole" string with array of language [en, zh]', function () {
        mockValidateBadWords("Don't be an asshole", { languageCode: ["zh", "en"] });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns containsBadWords error when given "Don\'t be an asshole" string with language *', function () {
        mockValidateBadWords("Don't be an asshole", { languageCode: "*" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns containsBadWords error when given "肏你妈" string with language *', function () {
        mockValidateBadWords("肏你妈", { languageCode: "*" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns null error when given "طيزك حمرا." string with language ar with matchingMode exact', function () {
        mockValidateBadWords("طيزك حمرا.", { languageCode: "ar", matchingMode: "exact" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(null);
    });
    it('returns containsBadWords error when given "طيزك حمرا." string with language ar', function () {
        mockValidateBadWords("طيزك حمرا.", { languageCode: "ar" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns containsBadWords error when given "طيزك حمرا." string with language *', function () {
        mockValidateBadWords("طيزك حمرا.", { languageCode: "*" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns containsBadWords error when given "ебать тебя" string with language ru', function () {
        mockValidateBadWords("ебать тебя", { languageCode: "ru" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns containsBadWords error when given "ебать тебя" string with language *', function () {
        mockValidateBadWords("ебать тебя", { languageCode: "*" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns containsBadWords error when given "Fick dich" string with language de', function () {
        mockValidateBadWords("Fick dich", { languageCode: "de" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
    it('returns containsBadWords error when given "Fick dich" string with language *', function () {
        mockValidateBadWords("Fick dich", { languageCode: "*" });
        expect(mockValidateBadWords).toHaveBeenCalledTimes(1);
        expect(mockValidateBadWords).toHaveReturnedWith(ValidateBadWordsErrorType.containsBadWords);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVCYWRXb3Jkcy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlQmFkV29yZHMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakYsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkQsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUUzQyxRQUFRLENBQUMseUNBQXlDLEVBQUU7SUFDbEQsRUFBRSxDQUFDLHVDQUF1QyxFQUFFO1FBQzFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLG9FQUFvRSxFQUFFO1FBQ3ZFLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDN0UsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENB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