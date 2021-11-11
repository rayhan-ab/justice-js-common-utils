/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateCpuSizeNonNomad, ValidateCpuSizeNonNomadErrorType } from "./validateCpuSizeNonNomad";
var mockValidateCpuSize = jest.fn(validateCpuSizeNonNomad);
afterEach(mockValidateCpuSize.mockClear);
afterAll(mockValidateCpuSize.mockRestore);
describe("validateCpuSize returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateCpuSize("", { isRequired: false });
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a string started in numbers and ended in `m`", function () {
        mockValidateCpuSize("100m");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns empty error string when given a string started in numbers and ended in `m`, with a total max length of 8", function () {
        mockValidateCpuSize("1000000m");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns error string 'exceedLengthLimit' when given a string started in numbers and ended in `m`, with a total max length of more than 8", function () {
        mockValidateCpuSize("10000000m");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeNonNomadErrorType.exceedLengthLimit);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateCpuSize("");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeNonNomadErrorType.empty);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given a string started in numbers and ended in characters other than `m`", function () {
        mockValidateCpuSize("10000z");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeNonNomadErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string containing only numbers", function () {
        mockValidateCpuSize("10000");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeNonNomadErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string containing only symbols", function () {
        mockValidateCpuSize("!!!");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeNonNomadErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string containing only alphabets", function () {
        mockValidateCpuSize("asd");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeNonNomadErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVDcHVTaXplTm9uTm9tYWQudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUNwdVNpemVOb25Ob21hZC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV0RyxJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUM3RCxTQUFTLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRTFDLFFBQVEsQ0FBQyx3Q0FBd0MsRUFBRTtJQUNqRCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsbUJBQW1CLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDSCwyQkFBMkI7SUFDM0IsRUFBRSxDQUFDLGtIQUFrSCxFQUFFO1FBQ3JILG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ0gsMkJBQTJCO0lBQzNCLEVBQUUsQ0FBQywwSUFBMEksRUFBRTtRQUM3SSxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JHLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNEQUFzRCxFQUFFO1FBQ3pELG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLGdDQUFnQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pGLENBQUMsQ0FBQyxDQUFDO0lBQ0gsMkJBQTJCO0lBQzNCLEVBQUUsQ0FBQyxvSEFBb0gsRUFBRTtRQUN2SCxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrRkFBa0YsRUFBRTtRQUNyRixtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrRkFBa0YsRUFBRTtRQUNyRixtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtRQUN2RixtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=