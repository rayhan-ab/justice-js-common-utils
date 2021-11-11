/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateJSON, ValidateJSONErrorType } from "./validateJSON";
var mockValidateJSON = jest.fn(validateJSON);
afterEach(mockValidateJSON.mockClear);
afterAll(mockValidateJSON.mockRestore);
describe("validateJSON returns correct output", function () {
    it("returns null when given empty string, but it is not a required field", function () {
        mockValidateJSON("", { isRequired: false });
        expect(mockValidateJSON).toHaveBeenCalledTimes(1);
        expect(mockValidateJSON).toHaveReturnedWith(null);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateJSON("");
        expect(mockValidateJSON).toHaveBeenCalledTimes(1);
        expect(mockValidateJSON).toHaveReturnedWith(ValidateJSONErrorType.empty);
    });
    it("return error invalid format when given string with invalid JSON format", function () {
        mockValidateJSON("adsfasdfasdf");
        expect(mockValidateJSON).toHaveBeenCalledTimes(1);
        expect(mockValidateJSON).toHaveReturnedWith(ValidateJSONErrorType.invalidFormat);
    });
    it("return null when given string with valid JSON format", function () {
        mockValidateJSON('{"hello":"world"}');
        expect(mockValidateJSON).toHaveBeenCalledTimes(1);
        expect(mockValidateJSON).toHaveReturnedWith(null);
    });
    it("return null when given only bracket string", function () {
        mockValidateJSON("{}");
        expect(mockValidateJSON).toHaveBeenCalledTimes(1);
        expect(mockValidateJSON).toHaveReturnedWith(null);
    });
    it("return error invalid format when given number string input", function () {
        mockValidateJSON("123123");
        expect(mockValidateJSON).toHaveBeenCalledTimes(1);
        expect(mockValidateJSON).toHaveReturnedWith(ValidateJSONErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVKU09OLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVKU09OLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxZQUFZLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRSxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDL0MsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUV2QyxRQUFRLENBQUMscUNBQXFDLEVBQUU7SUFDOUMsRUFBRSxDQUFDLHNFQUFzRSxFQUFFO1FBQ3pFLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNEQUFzRCxFQUFFO1FBQ3pELGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdFQUF3RSxFQUFFO1FBQzNFLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25GLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNEQUFzRCxFQUFFO1FBQ3pELGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNENBQTRDLEVBQUU7UUFDL0MsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNERBQTRELEVBQUU7UUFDL0QsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkYsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9