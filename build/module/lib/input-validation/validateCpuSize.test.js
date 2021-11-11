/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateCpuSize, ValidateCpuSizeErrorType } from "./validateCpuSize";
var mockValidateCpuSize = jest.fn(validateCpuSize);
afterEach(mockValidateCpuSize.mockClear);
afterAll(mockValidateCpuSize.mockRestore);
describe("validateCpuSize returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateCpuSize("", { isRequired: false });
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a string started in numbers", function () {
        mockValidateCpuSize("100");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns empty error string when given a string started in numbers, with a total max length of 8", function () {
        mockValidateCpuSize("1000000");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns error string 'exceedLengthLimit' when given a string started in numbers, with a total max length of more than 8", function () {
        mockValidateCpuSize("100000000");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.exceedLengthLimit);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateCpuSize("");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.empty);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given a string started in numbers and ended a character", function () {
        mockValidateCpuSize("10000z");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string containing characters", function () {
        mockValidateCpuSize("100ds");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string containing only symbols", function () {
        mockValidateCpuSize("!!!");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string containing only alphabets", function () {
        mockValidateCpuSize("asd");
        expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
        expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVDcHVTaXplLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVDcHVTaXplLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxlQUFlLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5RSxJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDckQsU0FBUyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUUxQyxRQUFRLENBQUMsd0NBQXdDLEVBQUU7SUFDakQsRUFBRSxDQUFDLG9GQUFvRixFQUFFO1FBQ3ZGLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1FQUFtRSxFQUFFO1FBQ3RFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ0gsMkJBQTJCO0lBQzNCLEVBQUUsQ0FBQyxpR0FBaUcsRUFBRTtRQUNwRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNILDJCQUEyQjtJQUMzQixFQUFFLENBQUMseUhBQXlILEVBQUU7UUFDNUgsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM3RixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzREFBc0QsRUFBRTtRQUN6RCxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRixDQUFDLENBQUMsQ0FBQztJQUNILDJCQUEyQjtJQUMzQixFQUFFLENBQUMsbUdBQW1HLEVBQUU7UUFDdEcsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0ZBQWdGLEVBQUU7UUFDbkYsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0ZBQWtGLEVBQUU7UUFDckYsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekYsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9