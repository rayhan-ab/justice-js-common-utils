/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateDockerImage, ValidateDockerImageErrorType } from "./validateDockerImage";
var mockValidateDockerImage = jest.fn(validateDockerImage);
afterEach(mockValidateDockerImage.mockClear);
afterAll(mockValidateDockerImage.mockRestore);
describe("validateDockerImage returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateDockerImage("", { isRequired: false });
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(null);
    });
    it("returns empty error string when given all lowercase only", function () {
        mockValidateDockerImage("accelbyte");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(null);
    });
    it("returns empty error string when given all numeric only", function () {
        mockValidateDockerImage("123");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase and numeric combination", function () {
        mockValidateDockerImage("accelbyte123");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(null);
    });
    it("returns empty error string when given all lowercase and `-` separated", function () {
        mockValidateDockerImage("justice-iam-service");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(null);
    });
    it("returns empty error string when given all lowercase, separated with `/` and `-`", function () {
        mockValidateDockerImage("accelbyte/justice-iam-service");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(null);
    });
    it("returns empty error string when given all lowercase, separated with `_` and `-`", function () {
        mockValidateDockerImage("accelbyte_justice-iam-service");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(null);
    });
    it("returns empty error string when given all lowercase, with tag containing numbers and `.` separated", function () {
        mockValidateDockerImage("accelbyte:1.0.0");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns empty error string when given all lowercase, with tag containing numbers and lowercase and is separated by `.` and `-`", function () {
        mockValidateDockerImage("accelbyte:1.0.0beta1-alpine3.10");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(null);
    });
    it("returns empty error string when given all lowercase, with tag containing numbers only", function () {
        mockValidateDockerImage("accelbyte:20190101");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(null);
    });
    it("returns empty error string when given all lowercase, with tag containing lowercase only", function () {
        mockValidateDockerImage("accelbyte:latest");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(null);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateDockerImage("");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.empty);
    });
    // tslint:disable-next-line
    it("returns error string 'exceedLengthLimit' when given valid dockerImage format with length more than the default max length (256)", function () {
        mockValidateDockerImage(
        // tslint:disable-next-line
        "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.exceedLengthLimit);
    });
    it("returns error string 'invalidFormat' when given image name with wrong separator", function () {
        mockValidateDockerImage("accel$byte");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given image name with double `-` separator", function () {
        mockValidateDockerImage("accel--byte");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given image name with uppercase after `-` separator", function () {
        mockValidateDockerImage("accel-BYTE");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given image name that ended in tag starter `:`", function () {
        mockValidateDockerImage("accelbyte:");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given image name that ended in double tag starter `:`", function () {
        mockValidateDockerImage("accelbyte::");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given valid image name, with tag in uppercase", function () {
        mockValidateDockerImage("accelbyte:AB");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given valid image name, with tag containing numeric but wrong separator`$`", function () {
        mockValidateDockerImage("accelbyte:1$0");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given valid image name, with tag containing numeric but double separator `-`", function () {
        mockValidateDockerImage("accelbyte:1--0");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given valid image name, with tag containing numeric but uppercase after separator `-`", function () {
        mockValidateDockerImage("accelbyte:1-BYTE");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
    });
    it("returns empty error string when given aws image registry", function () {
        mockValidateDockerImage("175114933870.dkr.ecr.us-west-2.amazonaws.com/sdk-test-intg:latest");
        expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
        expect(mockValidateDockerImage).toHaveReturnedWith(null);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVEb2NrZXJJbWFnZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlRG9ja2VySW1hZ2UudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUYsSUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0QsU0FBUyxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUU5QyxRQUFRLENBQUMsNENBQTRDLEVBQUU7SUFDckQsRUFBRSxDQUFDLG9GQUFvRixFQUFFO1FBQ3ZGLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBEQUEwRCxFQUFFO1FBQzdELHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdEQUF3RCxFQUFFO1FBQzNELHVCQUF1QixDQUFDLEtBQUssQ0FBQyxD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