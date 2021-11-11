"use strict";
/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateStatisticCode_1 = require("./validateStatisticCode");
var mockValidateStatisticCode = jest.fn(validateStatisticCode_1.validateStatisticCode);
afterEach(mockValidateStatisticCode.mockClear);
afterAll(mockValidateStatisticCode.mockRestore);
describe("validateStatisticCode returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateStatisticCode("", { isRequired: false });
        expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets without separators", function () {
        mockValidateStatisticCode("abc");
        expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets with single `-` separators ", function () {
        mockValidateStatisticCode("abc-abc");
        expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets with 2 `-` separators", function () {
        mockValidateStatisticCode("abc-abc-abc");
        expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets and numeric with  `-` separators", function () {
        mockValidateStatisticCode("abc-123");
        expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticCode).toHaveReturnedWith(null);
    });
    it("returns error string `empty` when given empty string", function () {
        mockValidateStatisticCode("");
        expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticCode).toHaveReturnedWith(validateStatisticCode_1.ValidateStatisticCodeErrorType.empty);
    });
    // tslint:disable-next-line
    it("returns error string `exceedLengthLimit` when given string with length more than default max length (256)", function () {
        mockValidateStatisticCode(
        // tslint:disable-next-line
        "abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-a");
        expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticCode).toHaveReturnedWith(validateStatisticCode_1.ValidateStatisticCodeErrorType.exceedLengthLimit);
    });
    it("returns error string `invalidFormat` when given symbol only", function () {
        mockValidateStatisticCode("@#");
        expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticCode).toHaveReturnedWith(validateStatisticCode_1.ValidateStatisticCodeErrorType.invalidFormat);
    });
    it("returns empty error string when given numbers only", function () {
        mockValidateStatisticCode("123");
        expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticCode).toHaveReturnedWith(null);
    });
    it("returns error string `invalidFormat` when given uppercase only", function () {
        mockValidateStatisticCode("ABC");
        expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticCode).toHaveReturnedWith(validateStatisticCode_1.ValidateStatisticCodeErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given uppercase and lowercase separated by `-`", function () {
        mockValidateStatisticCode("ABC-abc");
        expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticCode).toHaveReturnedWith(validateStatisticCode_1.ValidateStatisticCodeErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given lowercase alphabets that ends in hyphen `-`", function () {
        mockValidateStatisticCode("abc-");
        expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticCode).toHaveReturnedWith(validateStatisticCode_1.ValidateStatisticCodeErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given lowercase alphabets that is separated with double hyphen `-`", function () {
        mockValidateStatisticCode("abc--abc");
        expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticCode).toHaveReturnedWith(validateStatisticCode_1.ValidateStatisticCodeErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given lowercase alphabets that is separated with invalid separator `$`", function () {
        mockValidateStatisticCode("abc$abc");
        expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticCode).toHaveReturnedWith(validateStatisticCode_1.ValidateStatisticCodeErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTdGF0aXN0aWNDb2RlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVTdGF0aXN0aWNDb2RlLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsaUVBQWdHO0FBRWhHLElBQU0seUJBQXlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyw2Q0FBcUIsQ0FBQyxDQUFDO0FBQ2pFLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQyxRQUFRLENBQUMseUJBQXlCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFaEQsUUFBUSxDQUFDLDhDQUE4QyxFQUFFO0lBQ3ZELEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtRQUN2Rix5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw4RUFBOEUsRUFBRTtRQUNqRix5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1RkFBdUYsRUFBRTtRQUMxRix5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQyxx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