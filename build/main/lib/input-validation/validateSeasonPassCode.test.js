"use strict";
/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateSeasonPassCode_1 = require("./validateSeasonPassCode");
var mockValidateSeasonPassCode = jest.fn(validateSeasonPassCode_1.validateSeasonPassCode);
afterEach(mockValidateSeasonPassCode.mockClear);
afterAll(mockValidateSeasonPassCode.mockRestore);
describe("validateSeasonPassCode returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateSeasonPassCode("", { isRequired: false });
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets without separators", function () {
        mockValidateSeasonPassCode("abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets with single `-` separators ", function () {
        mockValidateSeasonPassCode("abc-abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets with single `_` separators ", function () {
        mockValidateSeasonPassCode("abc_abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets with single `:` separators ", function () {
        mockValidateSeasonPassCode("abc:abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets with 2 `-` separators", function () {
        mockValidateSeasonPassCode("abc-abc-abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets with 2 `_` separators", function () {
        mockValidateSeasonPassCode("abc_abc_abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets with 2 `:` separators", function () {
        mockValidateSeasonPassCode("abc:abc:abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets with combination separators `-`, `_`, and `:`", function () {
        mockValidateSeasonPassCode("abc-abc_abc:abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets with combination separators `-`, `_`, and `:`", function () {
        mockValidateSeasonPassCode("abc_abc-abc:abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets and numeric with  `-` separators", function () {
        mockValidateSeasonPassCode("abc-123");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets and numeric with  `_` separators", function () {
        mockValidateSeasonPassCode("abc_123");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets and numeric with  `_` separators", function () {
        mockValidateSeasonPassCode("abc:123");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
    });
    it("returns error string `empty` when given empty string", function () {
        mockValidateSeasonPassCode("");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.empty);
    });
    // tslint:disable-next-line
    it("returns error string `exceedLengthLimit` when given string with length more than default max length (256)", function () {
        mockValidateSeasonPassCode(
        // tslint:disable-next-line
        "abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-a");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.exceedLengthLimit);
    });
    it("returns error string `invalidFormat` when given symbol only", function () {
        mockValidateSeasonPassCode("@#");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
    it("returns empty error string when given numbers only", function () {
        mockValidateSeasonPassCode("123");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
    });
    it("returns error string `invalidFormat` when given uppercase only", function () {
        mockValidateSeasonPassCode("ABC");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given uppercase and lowercase separated by `-`", function () {
        mockValidateSeasonPassCode("ABC-abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given uppercase and lowercase separated by `_`", function () {
        mockValidateSeasonPassCode("ABC_abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given uppercase and lowercase separated by `:`", function () {
        mockValidateSeasonPassCode("ABC:abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given lowercase alphabets that ends in hyphen `-`", function () {
        mockValidateSeasonPassCode("abc-");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given lowercase alphabets that ends in hyphen `_`", function () {
        mockValidateSeasonPassCode("abc_");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given lowercase alphabets that ends in hyphen `:`", function () {
        mockValidateSeasonPassCode("abc:");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given lowercase alphabets that is separated with double hyphen `-`", function () {
        mockValidateSeasonPassCode("abc--abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given lowercase alphabets that is separated with double hyphen `_`", function () {
        mockValidateSeasonPassCode("abc__abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given lowercase alphabets that is separated with double hyphen `:`", function () {
        mockValidateSeasonPassCode("abc::abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given lowercase alphabets that is separated with combination of `_` and `-`", function () {
        mockValidateSeasonPassCode("abc-_abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given lowercase alphabets that is separated with combination of `_` and `-`", function () {
        mockValidateSeasonPassCode("abc_-abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given lowercase alphabets that is separated with combination of `_`, `-`, and `:`", function () {
        mockValidateSeasonPassCode("abc-_:abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given lowercase alphabets that is separated with invalid separator `$`", function () {
        mockValidateSeasonPassCode("abc$abc");
        expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
        expect(mockValidateSeasonPassCode).toHaveReturnedWith(validateSeasonPassCode_1.ValidateSeasonPassCodeErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTZWFzb25QYXNzQ29kZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlU2Vhc29uUGFzc0NvZGUudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCxtRUFBbUc7QUFFbkcsSUFBTSwwQkFBMEIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLCtDQUFzQixDQUFDLENBQUM7QUFDbkUsU0FBUyxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2hELFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUVqRCxRQUFRLENBQUMsK0NBQStDLEVBQUU7SUFDeEQsRUFBRSxDQUFDLG9GQUFvRixFQUFFO1FBQ3ZGLDBCQUEwQixDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhFQUE4RSxFQUFFO1FBQ2pGLDBCQUEwQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVGQUF1RixFQUFFO1FBQzFGLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVGQUF1RixFQUFFO1FBQzFGLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVGQUF1RixFQUFFO1FBQzFGLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlGQUFpRixFQUFFO1FBQ3BGLDBCQUEwQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlGQUFpRixFQUFFO1FBQ3BGLDBCQUEwQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENB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UUFDNUQsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMsa0JBQWtCLENBQUMsd0RBQStCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkcsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0RBQW9ELEVBQUU7UUFDdkQsMEJBQTBCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0VBQWdFLEVBQUU7UUFDbkUsMEJBQTBCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMsa0JBQWtCLENBQUMsd0RBQStCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkcsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEZBQTBGLEVBQUU7UUFDN0YsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMsa0JBQWtCLENBQUMsd0RBQStCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkcsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEZBQTBGLEVBQUU7UUFDN0YsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMsa0JBQWtCLENBQUMsd0RBQStCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkcsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEZBQTBGLEVBQUU7UUFDN0YsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMsa0JBQWtCLENBQUMsd0RBQStCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkcsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkZBQTZGLEVBQUU7UUFDaEcsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMsa0JBQWtCLENBQUMsd0RBQStCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkcsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkZBQTZGLEVBQUU7UUFDaEcsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMsa0JBQWtCLENBQUMsd0RBQStCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkcsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkZBQTZGLEVBQUU7UUFDaEcsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMsa0JBQWtCLENBQUMsd0RBQStCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkcsQ0FBQyxDQUFDLENBQUM7SUFFSCwyQkFBMkI7SUFD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