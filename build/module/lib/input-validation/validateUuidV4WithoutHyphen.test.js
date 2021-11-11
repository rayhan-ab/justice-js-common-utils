/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateUuidV4WithoutHyphen, ValidateUuidV4WithoutHyphenErrorType } from "./validateUuidV4WithoutHyphen";
var mockValidateUuidV4WithoutHyphen = jest.fn(validateUuidV4WithoutHyphen);
afterEach(mockValidateUuidV4WithoutHyphen.mockClear);
afterAll(mockValidateUuidV4WithoutHyphen.mockRestore);
describe("validateUuidV4WithoutHyphen returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateUuidV4WithoutHyphen("", { isRequired: false });
        expect(mockValidateUuidV4WithoutHyphen).toHaveBeenCalledTimes(1);
        expect(mockValidateUuidV4WithoutHyphen).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a uuid v4 format without Hyphen", function () {
        mockValidateUuidV4WithoutHyphen("ee796cd4ee9449748268b77c4343e147");
        expect(mockValidateUuidV4WithoutHyphen).toHaveBeenCalledTimes(1);
        expect(mockValidateUuidV4WithoutHyphen).toHaveReturnedWith(null);
    });
    it("returns error string invalidFormat when given a uuid v4 format with Hyphen", function () {
        mockValidateUuidV4WithoutHyphen("ee796cd4-ee94-4974-8268-b77c4343e147");
        expect(mockValidateUuidV4WithoutHyphen).toHaveBeenCalledTimes(1);
        expect(mockValidateUuidV4WithoutHyphen).toHaveReturnedWith(ValidateUuidV4WithoutHyphenErrorType.invalidFormat);
    });
    it("returns error string invalidFormat when given any string less than 32 character", function () {
        mockValidateUuidV4WithoutHyphen("ee796cd4ee9449748268b77c4343e14");
        expect(mockValidateUuidV4WithoutHyphen).toHaveBeenCalledTimes(1);
        expect(mockValidateUuidV4WithoutHyphen).toHaveReturnedWith(ValidateUuidV4WithoutHyphenErrorType.invalidFormat);
    });
    it("returns error string invalidFormat when given any string more than 32 character", function () {
        mockValidateUuidV4WithoutHyphen("ee796cd4ee9449748268b77c4343e1478");
        expect(mockValidateUuidV4WithoutHyphen).toHaveBeenCalledTimes(1);
        expect(mockValidateUuidV4WithoutHyphen).toHaveReturnedWith(ValidateUuidV4WithoutHyphenErrorType.invalidFormat);
    });
    it("returns error string invalidFormat when given random string", function () {
        mockValidateUuidV4WithoutHyphen("123 abcd");
        expect(mockValidateUuidV4WithoutHyphen).toHaveBeenCalledTimes(1);
        expect(mockValidateUuidV4WithoutHyphen).toHaveReturnedWith(ValidateUuidV4WithoutHyphenErrorType.invalidFormat);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateUuidV4WithoutHyphen("");
        expect(mockValidateUuidV4WithoutHyphen).toHaveBeenCalledTimes(1);
        expect(mockValidateUuidV4WithoutHyphen).toHaveReturnedWith(ValidateUuidV4WithoutHyphenErrorType.empty);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVVdWlkVjRXaXRob3V0SHlwaGVuLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVVdWlkVjRXaXRob3V0SHlwaGVuLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWxILElBQU0sK0JBQStCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQzdFLFNBQVMsQ0FBQywrQkFBK0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyRCxRQUFRLENBQUMsK0JBQStCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFdEQsUUFBUSxDQUFDLG9EQUFvRCxFQUFFO0lBQzdELEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtRQUN2RiwrQkFBK0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1RUFBdUUsRUFBRTtRQUMxRSwrQkFBK0IsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDRFQUE0RSxFQUFFO1FBQy9FLCtCQUErQixDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDeEUsTUFBTSxDQUFDLCtCQUErQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLCtCQUErQixDQUFDLENBQUMsa0JBQWtCLENBQUMsb0NBQW9DLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakgsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUZBQWlGLEVBQUU7UUFDcEYsK0JBQStCLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxvQ0FBb0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqSCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpRkFBaUYsRUFBRTtRQUNwRiwrQkFBK0IsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLG9DQUFvQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pILENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZEQUE2RCxFQUFFO1FBQ2hFLCtCQUErQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLG9DQUFvQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pILENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNEQUFzRCxFQUFFO1FBQ3pELCtCQUErQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLG9DQUFvQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pHLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==