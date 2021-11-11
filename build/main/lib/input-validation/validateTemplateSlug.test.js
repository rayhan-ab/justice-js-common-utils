"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateTemplateSlug_1 = require("./validateTemplateSlug");
var mockValidateTemplateSlug = jest.fn(validateTemplateSlug_1.validateTemplateSlug);
afterEach(mockValidateTemplateSlug.mockClear);
afterAll(mockValidateTemplateSlug.mockRestore);
describe("validateTemplateSlug returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateTemplateSlug("", { isRequired: false });
        expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
        expect(mockValidateTemplateSlug).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabets without separators", function () {
        mockValidateTemplateSlug("ABC");
        expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
        expect(mockValidateTemplateSlug).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets without separators", function () {
        mockValidateTemplateSlug("abc");
        expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
        expect(mockValidateTemplateSlug).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase & uppercase alphabets with single `-` separators ", function () {
        mockValidateTemplateSlug("abc-ABC");
        expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
        expect(mockValidateTemplateSlug).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabets with 2 `-`separators", function () {
        mockValidateTemplateSlug("abc-ABC-abc");
        expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
        expect(mockValidateTemplateSlug).toHaveReturnedWith(null);
    });
    it("returns error string `empty` when given empty string", function () {
        mockValidateTemplateSlug("");
        expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
        expect(mockValidateTemplateSlug).toHaveReturnedWith(validateTemplateSlug_1.ValidateTemplateSlugErrorType.empty);
    });
    // tslint:disable-next-line
    it("returns error string `exceedLengthLimit` when given string with length more than default max length (256)", function () {
        mockValidateTemplateSlug(
        // tslint:disable-next-line
        "abc-ABC-abc-ABCabc-ABC-abc-ABC-abc-ABC-abc-ABCabc-ABC-abc-ABC-abc-ABC-abc-ABCabc-ABC-abc-ABC-abc-ABC-abc-ABC-abc-ABC-abc-ABCabc-ABC-abc-ABCabc-ABC-abc-ABC-abc-ABC-abc-ABCabc-ABC-abc-ABC-abc-ABC-abc-ABCabc-ABC-abc-ABC-abc-ABC-abc-ABCabc-ABC-abc-ABC-abc-ABC-a");
        expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
        expect(mockValidateTemplateSlug).toHaveReturnedWith(validateTemplateSlug_1.ValidateTemplateSlugErrorType.exceedLengthLimit);
    });
    it("returns error string `invalidFormat` when given symbol only", function () {
        mockValidateTemplateSlug("@#");
        expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
        expect(mockValidateTemplateSlug).toHaveReturnedWith(validateTemplateSlug_1.ValidateTemplateSlugErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given numbers only", function () {
        mockValidateTemplateSlug("123");
        expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
        expect(mockValidateTemplateSlug).toHaveReturnedWith(validateTemplateSlug_1.ValidateTemplateSlugErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given lowercase and numbers separated by `-`", function () {
        mockValidateTemplateSlug("abc-123");
        expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
        expect(mockValidateTemplateSlug).toHaveReturnedWith(validateTemplateSlug_1.ValidateTemplateSlugErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given uppercase alphabets that ends in separator `-`", function () {
        mockValidateTemplateSlug("ABC-");
        expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
        expect(mockValidateTemplateSlug).toHaveReturnedWith(validateTemplateSlug_1.ValidateTemplateSlugErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given uppercase alphabets and numeric that is separated with double separator `:`", function () {
        mockValidateTemplateSlug("abc--ABC");
        expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
        expect(mockValidateTemplateSlug).toHaveReturnedWith(validateTemplateSlug_1.ValidateTemplateSlugErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given numeric and lowercase alphabet that is separated with invalid separator `$`", function () {
        mockValidateTemplateSlug("ABC_abc");
        expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
        expect(mockValidateTemplateSlug).toHaveReturnedWith(validateTemplateSlug_1.ValidateTemplateSlugErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVUZW1wbGF0ZVNsdWcudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVRlbXBsYXRlU2x1Zy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILCtEQUE2RjtBQUU3RixJQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsMkNBQW9CLENBQUMsQ0FBQztBQUMvRCxTQUFTLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRS9DLFFBQVEsQ0FBQyw2Q0FBNkMsRUFBRTtJQUN0RCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsd0JBQXdCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOEVBQThFLEVBQUU7UUFDakYsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOEVBQThFLEVBQUU7UUFDakYsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJB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