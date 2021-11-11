/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateMemorySize, ValidateMemorySizeErrorType } from "./validateMemorySize";
var mockValidateMemorySize = jest.fn(validateMemorySize);
afterEach(mockValidateMemorySize.mockClear);
afterAll(mockValidateMemorySize.mockRestore);
describe("validateMemorySize returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateMemorySize("", { isRequired: false });
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a string started in numbers", function () {
        mockValidateMemorySize("100");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns empty error string when given a string started in numbers, with a total max length of 9", function () {
        mockValidateMemorySize("1000000");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns error string 'exceedLengthLimit' when given a string started in numbers, with a total max length of more than 9", function () {
        mockValidateMemorySize("1000000000");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeErrorType.exceedLengthLimit);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateMemorySize("");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeErrorType.empty);
    });
    it("returns error string 'invalidFormat' when given a string containing numbers and string", function () {
        mockValidateMemorySize("10000m");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string containing only symbols", function () {
        mockValidateMemorySize("!!!");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string containing alphabets", function () {
        mockValidateMemorySize("asd");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVNZW1vcnlTaXplLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVNZW1vcnlTaXplLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZGLElBQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNELFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxRQUFRLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFN0MsUUFBUSxDQUFDLDJDQUEyQyxFQUFFO0lBQ3BELEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtRQUN2RixzQkFBc0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtRUFBbUUsRUFBRTtRQUN0RSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNILDJCQUEyQjtJQUMzQixFQUFFLENBQUMsaUdBQWlHLEVBQUU7UUFDcEcsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDSCwyQkFBMkI7SUFDM0IsRUFBRSxDQUFDLHlIQUF5SCxFQUFFO1FBQzVILHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkcsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0RBQXNELEVBQUU7UUFDekQsc0JBQXNCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0ZBQXdGLEVBQUU7UUFDM0Ysc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0YsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0ZBQWtGLEVBQUU7UUFDckYsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0YsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsK0VBQStFLEVBQUU7UUFDbEYsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0YsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9