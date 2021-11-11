/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateDockerImageVersion, ValidateDockerVersionErrorType } from "./validateDockerImageVersion";
var mockValidateDockerImageVersion = jest.fn(validateDockerImageVersion);
afterEach(mockValidateDockerImageVersion.mockClear);
afterAll(mockValidateDockerImageVersion.mockRestore);
describe("validateImageName returns correct output", function () {
    it("return empty error string when given empty string, but it is not a required field", function () {
        mockValidateDockerImageVersion("", { isRequired: false });
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    it("returns error string `empty` when given empty string", function () {
        mockValidateDockerImageVersion("");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(ValidateDockerVersionErrorType.empty);
    });
    it("return empty error string when given lowercase alphabets without separators", function () {
        mockValidateDockerImageVersion("test");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    it("return empty error string when given uppercase alphabet without separator", function () {
        mockValidateDockerImageVersion("TEST");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    it("return empty error string when given numbers without separator", function () {
        mockValidateDockerImageVersion("1234");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    it("returns empty error string when given number, lowercase and uppercase alphabet without separator", function () {
        mockValidateDockerImageVersion("test123ABCD");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    it("return empty error string when given lowercase alphabets with single '-' separator", function () {
        mockValidateDockerImageVersion("test-test");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    it("return empty error string when given uppercase alphabets with single '-' separator", function () {
        mockValidateDockerImageVersion("TEST-TEST");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    it("return empty error string when given numbers with single '-' separator", function () {
        mockValidateDockerImageVersion("123-456");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    it("return empty error string when given lowercase alphabets with single '.' separator", function () {
        mockValidateDockerImageVersion("test.test");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    it("return empty error string when given numbers with '.' as separator", function () {
        mockValidateDockerImageVersion("123.45.6");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    it("return empty error string when given uppercase alphabets with '_' as separator", function () {
        mockValidateDockerImageVersion("AB_CD_EF_GH");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    it("returns empty error string when given numeric, lowercase and uppercase alphabet with valid separator", function () {
        mockValidateDockerImageVersion("123-test_AB.CD");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("return empty error string when given lowercase alphabets with 3 separators: dash, dot, underscore respectively", function () {
        mockValidateDockerImageVersion("test-._test");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    it("return empty error string when given string with length 256 and maxLength as default (256)", function () {
        mockValidateDockerImageVersion(
        // tslint:disable-next-line
        "test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.e");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    it("return empty error string when given string with length of 40 (with 40 set as custom maxLength)", function () {
        mockValidateDockerImageVersion("test_1234.5678-ABCD.EFGH_abcd.efgh-12345", { maxLength: 40 });
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns error string `exceedLengthLimit` when given string with length more than default max length (256)", function () {
        mockValidateDockerImageVersion(
        // tslint:disable-next-line
        "test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(ValidateDockerVersionErrorType.exceedLengthLimit);
    });
    // tslint:disable-next-line
    it("returns error string `exceedLengthLimit` when given string with length 41 (with 40 set as custom maxLength)", function () {
        mockValidateDockerImageVersion("test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5", { maxLength: 40 });
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(ValidateDockerVersionErrorType.exceedLengthLimit);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given alphabets and numeric separated with invalid separator `$`", function () {
        mockValidateDockerImageVersion("Test$123");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(ValidateDockerVersionErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given alphabets and numeric separated with whitespace`", function () {
        mockValidateDockerImageVersion("test 123");
        expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImageVersion).toHaveReturnedWith(ValidateDockerVersionErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVEb2NrZXJJbWFnZVZlcnNpb24udGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZURvY2tlckltYWdlVmVyc2lvbi50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRyxJQUFNLDhCQUE4QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUMzRSxTQUFTLENBQUMsOEJBQThCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEQsUUFBUSxDQUFDLDhCQUE4QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJELFFBQVEsQ0FBQywwQ0FBMEMsRUFBRTtJQUNuRCxFQUFFLENBQUMsbUZBQW1GLEVBQUU7UUFDdEYsOEJBQThCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0RBQXNELEVBQUU7UUFDekQsOEJBQThCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUMsOEJBQThCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEcsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkVBQTZFLEVBQUU7UUFDaEYsOEJBQThCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkVBQTJFLEVBQUU7UUFDOUUsOEJBQThCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0VBQWdFLEVBQUU7UUFDbkUsOEJBQThCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0dBQWtHLEVBQUU7UUFDckcsOEJBQThCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsOEJBQThCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsOEJBQThCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0VBQXdFLEVBQUU7UUFDM0UsOEJBQThCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsOEJBQThCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0VBQW9FLEVBQUU7UUFDdkUsOEJBQThCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0ZBQWdG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