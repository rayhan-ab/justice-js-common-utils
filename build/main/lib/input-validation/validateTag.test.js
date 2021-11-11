"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateTag_1 = require("./validateTag");
var mockValidateTag = jest.fn(validateTag_1.validateTag);
afterEach(mockValidateTag.mockClear);
afterAll(mockValidateTag.mockRestore);
describe("validateTag returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateTag("", { isRequired: false });
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabets without separators ", function () {
        mockValidateTag("ABC");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabets with single `-` separators ", function () {
        mockValidateTag("abc-ABC");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabets with single `:` separators ", function () {
        mockValidateTag("abc:ABC");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabets with single `_` separators ", function () {
        mockValidateTag("abc_ABC");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabets with 2 different separators `-` and `:` ", function () {
        mockValidateTag("abc-abc:ABC");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(null);
    });
    it("returns error string `empty` when given empty string", function () {
        mockValidateTag("");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(validateTag_1.ValidateTagErrorType.empty);
    });
    it("returns error string `exceedLengthLimit` when given string with length more than default max length (30)", function () {
        mockValidateTag("abc-ABC-abc-ABCabc-ABC-abc-ABCD");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(validateTag_1.ValidateTagErrorType.exceedLengthLimit);
    });
    it("returns error string `invalidFormat` when given numeric", function () {
        mockValidateTag("123");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(validateTag_1.ValidateTagErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given symbol only", function () {
        mockValidateTag("@");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(validateTag_1.ValidateTagErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given uppercase alphabets that ends in separator `-`", function () {
        mockValidateTag("ABC-");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(validateTag_1.ValidateTagErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given uppercase alphabets and numeric that is separated with double separator `:`", function () {
        mockValidateTag("123::ABC");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(validateTag_1.ValidateTagErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given numeric and lowercase alphabet that is separated with invalid separator `$`", function () {
        mockValidateTag("123$abc");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(validateTag_1.ValidateTagErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVUYWcudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVRhZy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILDZDQUFrRTtBQUVsRSxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLHlCQUFXLENBQUMsQ0FBQztBQUM3QyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JDLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFdEMsUUFBUSxDQUFDLG9DQUFvQyxFQUFFO0lBQzdDLEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtRQUN2RixlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrRUFBK0UsRUFBRTtRQUNsRixlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2RUFBNkUsRUFBRTtRQUNoRixlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxl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