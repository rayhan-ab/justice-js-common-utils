/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validatePersonName, ValidatePersonNameErrorType } from "./validatePersonName";
var mockValidatePersonName = jest.fn(validatePersonName);
afterEach(mockValidatePersonName.mockClear);
afterAll(mockValidatePersonName.mockRestore);
describe("validatePersonName returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidatePersonName("", { isRequired: false });
        expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
        expect(mockValidatePersonName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet only display name", function () {
        mockValidatePersonName("JohnDoe");
        expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
        expect(mockValidatePersonName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet only display name with space", function () {
        mockValidatePersonName("John Doe John");
        expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
        expect(mockValidatePersonName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet only display name with the symbol `'`", function () {
        mockValidatePersonName("John'Doe");
        expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
        expect(mockValidatePersonName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet only display name with the symbol `,`", function () {
        mockValidatePersonName("John,Doe");
        expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
        expect(mockValidatePersonName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet only display name with the symbol `.`", function () {
        mockValidatePersonName("John.Doe");
        expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
        expect(mockValidatePersonName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet only display name with the symbol `-`", function () {
        mockValidatePersonName("John-Doe");
        expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
        expect(mockValidatePersonName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphanumeric with length of 48", function () {
        mockValidatePersonName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv");
        expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
        expect(mockValidatePersonName).toHaveReturnedWith(null);
    });
    it("returns error string containing exceedLengthLimit when given alphanumeric with length of 49", function () {
        mockValidatePersonName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw");
        expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
        expect(mockValidatePersonName).toHaveReturnedWith(ValidatePersonNameErrorType.exceedLengthLimit);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidatePersonName("");
        expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
        expect(mockValidatePersonName).toHaveReturnedWith(ValidatePersonNameErrorType.empty);
    });
    it("returns error string invalidFormat when given string with at least 1 number", function () {
        mockValidatePersonName("John Doe the 1st");
        expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
        expect(mockValidatePersonName).toHaveReturnedWith(ValidatePersonNameErrorType.invalidFormat);
    });
    it("returns error string invalidFormat when given string with at least 1 symbol other than `',. -`", function () {
        mockValidatePersonName("$$$$ John Doe!!!");
        expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
        expect(mockValidatePersonName).toHaveReturnedWith(ValidatePersonNameErrorType.invalidFormat);
    });
    it("returns error string invalidFormat when given 2 empty string in a row", function () {
        mockValidatePersonName("John  Doe");
        expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
        expect(mockValidatePersonName).toHaveReturnedWith(ValidatePersonNameErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVQZXJzb25OYW1lLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVQZXJzb25OYW1lLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZGLElBQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNELFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxRQUFRLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFN0MsUUFBUSxDQUFDLDJDQUEyQyxFQUFFO0lBQ3BELEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtRQUN2RixzQkFBc0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrRUFBa0UsRUFBRTtRQUNyRSxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2RUFBNkUsRUFBRTtRQUNoRixzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzRkFBc0YsRUFBRTtRQUN6RixzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzRkFBc0YsRUFBRTtRQUN6RixzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzRkFBc0YsRUFBRTtRQUN6RixzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzRkFBc0YsRUFBRTtRQUN6RixzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzRUFBc0UsRUFBRTtRQUN6RSxzQkFBc0IsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZGQUE2RixFQUFFO1FBQ2hHLHNCQUFzQixDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDNUUsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNuRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzREFBc0QsRUFBRTtRQUN6RCxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQywyQkFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2RUFBNkUsRUFBRTtRQUNoRixzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9GLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdHQUFnRyxFQUFFO1FBQ25HLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0YsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsdUVBQXVFLEVBQUU7UUFDMUUsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0YsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9