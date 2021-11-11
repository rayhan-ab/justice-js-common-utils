"use strict";
/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateMemorySizeNonNomad_1 = require("./validateMemorySizeNonNomad");
var mockValidateMemorySize = jest.fn(validateMemorySizeNonNomad_1.validateMemorySizeNonNomad);
afterEach(mockValidateMemorySize.mockClear);
afterAll(mockValidateMemorySize.mockRestore);
describe("validateMemorySize returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateMemorySize("", { isRequired: false });
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a string started in numbers and ended in `Mi`", function () {
        mockValidateMemorySize("100Mi");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns empty error string when given a string started in numbers and ended in `Mi`, with a total max length of 9", function () {
        mockValidateMemorySize("1000000Mi");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns error string 'exceedLengthLimit' when given a string started in numbers and ended in `m`, with a total max length of more than 9", function () {
        mockValidateMemorySize("10000000Mi");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(validateMemorySizeNonNomad_1.ValidateMemorySizeNonNomadErrorType.exceedLengthLimit);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateMemorySize("");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(validateMemorySizeNonNomad_1.ValidateMemorySizeNonNomadErrorType.empty);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given a string started in numbers and ended in characters other than `Mi`", function () {
        mockValidateMemorySize("10000m");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(validateMemorySizeNonNomad_1.ValidateMemorySizeNonNomadErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string containing only numbers", function () {
        mockValidateMemorySize("10000");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(validateMemorySizeNonNomad_1.ValidateMemorySizeNonNomadErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string containing only symbols", function () {
        mockValidateMemorySize("!!!");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(validateMemorySizeNonNomad_1.ValidateMemorySizeNonNomadErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string containing only alphabets", function () {
        mockValidateMemorySize("asd");
        expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
        expect(mockValidateMemorySize).toHaveReturnedWith(validateMemorySizeNonNomad_1.ValidateMemorySizeNonNomadErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVNZW1vcnlTaXplTm9uTm9tYWQudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZU1lbW9yeVNpemVOb25Ob21hZC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILDJFQUErRztBQUUvRyxJQUFNLHNCQUFzQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsdURBQTBCLENBQUMsQ0FBQztBQUNuRSxTQUFTLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRTdDLFFBQVEsQ0FBQywyQ0FBMkMsRUFBRTtJQUNwRCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsc0JBQXNCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUZBQXFGLEVBQUU7UUFDeEYsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDSCwyQkFBMkI7SUFDM0IsRUFBRSxDQUFDLG1IQUFtSCxFQUFFO1FBQ3RILHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUMsQ0FBQyxDQUFDO0lBQ0gsMkJBQTJCO0lBQzNCLEVBQUUsQ0FBQywwSUFBMEksRUFBRTtRQUM3SSxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxnRUFBbUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNHLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNEQUFzRCxFQUFFO1FBQ3pELHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLGdFQUFtQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9GLENBQUMsQ0FBQyxDQUFDO0lBQ0gsMkJBQTJCO0lBQzNCLEVBQUUsQ0FBQyxxSEFBcUgsRUFBRTtRQUN4SCxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxnRUFBbUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrRkFBa0YsRUFBRTtRQUNyRixzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxnRUFBbUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrRkFBa0YsRUFBRTtRQUNyRixzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxnRUFBbUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtRQUN2RixzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxnRUFBbUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=