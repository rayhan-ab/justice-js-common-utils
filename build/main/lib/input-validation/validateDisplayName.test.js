"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateDisplayName_1 = require("./validateDisplayName");
var mockValidateDisplayName = jest.fn(validateDisplayName_1.validateDisplayName);
afterEach(mockValidateDisplayName.mockClear);
afterAll(mockValidateDisplayName.mockRestore);
describe("validateDisplayName returns correct output", function () {
    it("returns null when using japanese 'ジョンドー' text", function () {
        mockValidateDisplayName("ジョンドー", { allowUnicode: true });
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns invalidFormat when using japanese 'ジョンドー' text with no allowUnicode param", function () {
        mockValidateDisplayName("ジョンドー");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(validateDisplayName_1.ValidateDisplayNameErrorType.invalidFormat);
    });
    it("returns invalidFormat when using JP 'ジョン・ドウ' (with middle point (・)) text", function () {
        mockValidateDisplayName("ジョン・ドウ", { allowUnicode: true });
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(validateDisplayName_1.ValidateDisplayNameErrorType.invalidFormat);
    });
    it("returns null when using RU 'гладиатор' text", function () {
        mockValidateDisplayName("гладиатор", { allowUnicode: true });
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns invalidFormat when using RU 'гладиатор' text with no allowUnicode param", function () {
        mockValidateDisplayName("гладиатор");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(validateDisplayName_1.ValidateDisplayNameErrorType.invalidFormat);
    });
    it("returns null when using AR '١المصارع١' text", function () {
        mockValidateDisplayName("المصارع", { allowUnicode: true });
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns null when using THAI 'จอห์น' text", function () {
        mockValidateDisplayName("จอห์น", { allowUnicode: true });
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns null when using TAMIL 'ஜான்' text", function () {
        mockValidateDisplayName("ஜான்", { allowUnicode: true });
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns null when using URDU 'جان' text", function () {
        mockValidateDisplayName("جان", { allowUnicode: true });
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateDisplayName("", { isRequired: false });
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet only display name", function () {
        mockValidateDisplayName("AccelByte");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet only display name with space", function () {
        mockValidateDisplayName("Accel Byte");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphanumeric and numeric first display name", function () {
        mockValidateDisplayName("01AccelByte");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphanumeric and numeric first display name with space", function () {
        mockValidateDisplayName("01 Accel Byte");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet only display name with the symbol `'`", function () {
        mockValidateDisplayName("John'Doe");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet only display name with the symbol `,`", function () {
        mockValidateDisplayName("John,Doe");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet only display name with the symbol `.`", function () {
        mockValidateDisplayName("John.Doe");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet only display name with the symbol `-`", function () {
        mockValidateDisplayName("John-Doe");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphanumeric with length of 48", function () {
        mockValidateDisplayName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(null);
    });
    it("returns error string containing exceedLengthLimit when given alphanumeric with length of 49", function () {
        mockValidateDisplayName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(validateDisplayName_1.ValidateDisplayNameErrorType.exceedLengthLimit);
    });
    it("returns error string containing invalidFormat with given long string with space at the end", function () {
        mockValidateDisplayName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvsafdsafsdfgsdfgw ");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(validateDisplayName_1.ValidateDisplayNameErrorType.invalidFormat);
    });
    it("returns error string containing invalidFormat with given long string with space at the beginning", function () {
        mockValidateDisplayName(" abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvsafdsafsdfgsdfgw");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(validateDisplayName_1.ValidateDisplayNameErrorType.invalidFormat);
    });
    it("returns error string invalidFormat when given string with non acceptable character _", function () {
        mockValidateDisplayName("Display_name_");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(validateDisplayName_1.ValidateDisplayNameErrorType.invalidFormat);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateDisplayName("");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(validateDisplayName_1.ValidateDisplayNameErrorType.empty);
    });
    it("returns error string invalidFormat when given string with at least 1 symbol other than `',. -`", function () {
        mockValidateDisplayName("$$$$ John Doe!!!");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(validateDisplayName_1.ValidateDisplayNameErrorType.invalidFormat);
    });
    it("returns error string invalidFormat when 2 empty string in a row", function () {
        mockValidateDisplayName("John  Doe");
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(validateDisplayName_1.ValidateDisplayNameErrorType.invalidFormat);
    });
    // tslint:disable-next-line:max-line-length
    it("returns invalidFormat when given EN string with 1 symbol other than `',. -` with strictlyAllowSpecialCharacters", function () {
        mockValidateDisplayName("John Doe", { strictlyAllowSpecialCharacters: false });
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(validateDisplayName_1.ValidateDisplayNameErrorType.invalidFormat);
    });
    // tslint:disable-next-line:max-line-length
    it("returns invalidFormat when given RU string with 1 symbol other than `',. -` with strictlyAllowSpecialCharacters", function () {
        mockValidateDisplayName("глади атор", { allowUnicode: true, strictlyAllowSpecialCharacters: false });
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(validateDisplayName_1.ValidateDisplayNameErrorType.invalidFormat);
    });
    // tslint:disable-next-line:max-line-length
    it("returns exceedLengthLimit error string when given alphanumeric with length of maxLength parameter", function () {
        mockValidateDisplayName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv", { maxLength: 16 });
        expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
        expect(mockValidateDisplayName).toHaveReturnedWith(validateDisplayName_1.ValidateDisplayNameErrorType.exceedLengthLimit);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVEaXNwbGF5TmFtZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlRGlzcGxheU5hbWUudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCw2REFBMEY7QUFFMUYsSUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLHlDQUFtQixDQUFDLENBQUM7QUFDN0QsU0FBUyxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUU5QyxRQUFRLENBQUMsNENBQTRDLEVBQUU7SUFDckQsRUFBRSxDQUFDLCtDQUErQyxFQUFFO1FBQ2xELHVCQUF1QixDQUFDLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1GQUFtRixFQUFFO1FBQ3RGLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLGtEQUE0QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pHLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDJFQUEyRSxFQUFFO1FBQzlFLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLGtEQUE0QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pHLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZDQUE2QyxFQUFFO1FBQ2hELHVCQUF1QixDQUFDLFdBQVcsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlGQUFpRixFQUFFO1FBQ3BGLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLGtEQUE0QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pHLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZDQUE2QyxFQUFFO1FBQ2hELHVCQUF1QixDQUFDLFNBQVMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDJDQUEyQyxFQUFFO1FBQzlDLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDJDQUEyQyxFQUFFO1FBQzlDLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlDQUF5QyxFQUFFO1FBQzVDLHVCQUF1QixDQUFDLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9GQUFvRixFQUFFO1FBQ3ZGLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtFQUFrRSxFQUFFO1FBQ3JFLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZFQUE2RSxFQUFFO1FBQ2hGLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1GQUFtRixFQUFFO1FBQ3RGLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhGQUE4RixFQUFFO1FBQ2pHLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNGQUFzRixFQUFFO1FBQ3pGLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFB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