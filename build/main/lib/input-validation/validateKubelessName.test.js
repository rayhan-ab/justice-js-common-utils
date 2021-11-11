"use strict";
/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateKubelessName_1 = require("./validateKubelessName");
var mockValidateKubelessName = jest.fn(validateKubelessName_1.validateKubelessName);
afterEach(mockValidateKubelessName.mockClear);
afterAll(mockValidateKubelessName.mockRestore);
describe("validateKubelessName returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateKubelessName("", { isRequired: false });
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alpha with length of 1", function () {
        mockValidateKubelessName("k");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alpha with length of 2", function () {
        mockValidateKubelessName("ku");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(null);
    });
    it("returns error string containing `exceedLengthLimit` when given alpha with length of 65", function () {
        mockValidateKubelessName("asdasdasdasdasasdadasdasdasdasdasdasdasdasdasdasdasasdadasdaadasd");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(validateKubelessName_1.ValidateKubelessNameErrorType.exceedLengthLimit);
    });
    it("returns error string `invalid format` when given symbol at the end of word", function () {
        mockValidateKubelessName("kubeless!@#");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(validateKubelessName_1.ValidateKubelessNameErrorType.invalidFormat);
    });
    it("returns error string `invalid format` when given symbol at the beginning of word", function () {
        mockValidateKubelessName("!@#kubeless");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(validateKubelessName_1.ValidateKubelessNameErrorType.invalidFormat);
    });
    it("returns error string `invalid format` when given symbol at the middle of word", function () {
        mockValidateKubelessName("kube!@#less");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(validateKubelessName_1.ValidateKubelessNameErrorType.invalidFormat);
    });
    it("returns error string `invalid format` when given hyphens at the beginning of word", function () {
        mockValidateKubelessName("-kubeless");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(validateKubelessName_1.ValidateKubelessNameErrorType.invalidFormat);
    });
    it("returns error string `invalid format` when given hyphens at the end of word", function () {
        mockValidateKubelessName("kubeless-");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(validateKubelessName_1.ValidateKubelessNameErrorType.invalidFormat);
    });
    // tslint:disable-next-line:max-line-length
    it("returns empty error string when it when given hyphen at the middle of word", function () {
        mockValidateKubelessName("kube-less");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(null);
    });
    it("returns empty error string when it when given more than 1 hyphens at the middle of word", function () {
        mockValidateKubelessName("kube--less");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(null);
    });
    it("returns empty error string when the words contain valid pattern multiple times", function () {
        mockValidateKubelessName("kube--kubeless-kubeless");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(null);
    });
    it("returns error string `invalid format` when given numbers at the beginning of the word", function () {
        mockValidateKubelessName("123kubeless");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(validateKubelessName_1.ValidateKubelessNameErrorType.invalidFormat);
    });
    it("returns empty error string when the words contain number in the middle of the word", function () {
        mockValidateKubelessName("kube123less");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(null);
    });
    it("returns empty error string when the words contain number in the end of the word", function () {
        mockValidateKubelessName("kubeless123");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(null);
    });
    it("returns empty error string when the words contain valid pattern multiple times using hyphens and numbers", function () {
        mockValidateKubelessName("kube--kubel12312ess-kubeless");
        expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessName).toHaveReturnedWith(null);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVLdWJlbGVzc05hbWUudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUt1YmVsZXNzTmFtZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILCtEQUE2RjtBQUU3RixJQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsMkNBQW9CLENBQUMsQ0FBQztBQUMvRCxTQUFTLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRS9DLFFBQVEsQ0FBQyw2Q0FBNkMsRUFBRTtJQUN0RCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsd0JBQXdCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsOERBQThELEVBQUU7UUFDakUsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsOERBQThELEVBQUU7UUFDakUsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJB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