/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Validation } from "./Validation";
describe("Return isAllValid function with correct output", function () {
    it("Should return true if validation is empty", function () {
        var validation = new Validation();
        var called = validation.isAllValid();
        expect(called).toBe(true);
    });
    it("Should return true if validation has value and all value are null", function () {
        var validation = new Validation();
        validation.set("variable 1", null);
        validation.set("variable 2", null);
        validation.set("variable 3", null);
        var isAllValid = validation.isAllValid();
        expect(isAllValid).toBe(true);
    });
    it("Should return false if validation has string value and null at the end of array", function () {
        var validation = new Validation();
        validation.set("variable 1", "null");
        validation.set("variable 2", "ashdjgsak");
        validation.set("variable 3", null);
        var isAllValid = validation.isAllValid();
        expect(isAllValid).toBe(false);
    });
    it("Should return false if validation has string value and null in the beginning of array", function () {
        var validation = new Validation();
        validation.set("variable 1", null);
        validation.set("variable 2", "ashdjgsak");
        validation.set("variable 3", "null");
        var isAllValid = validation.isAllValid();
        expect(isAllValid).toBe(false);
    });
    it("Should return false if validation has string value and null in the middle of array", function () {
        var validation = new Validation();
        validation.set("variable 1", "asdsad");
        validation.set("variable 2", null);
        validation.set("variable 3", "asdas");
        var isAllValid = validation.isAllValid();
        expect(isAllValid).toBe(false);
    });
    it("Should return false if all value contain string", function () {
        var validation = new Validation();
        validation.set("variable 1", "zxchg");
        validation.set("variable 2", "ashdjgsak");
        validation.set("variable 3", "asdas");
        var isAllValid = validation.isAllValid();
        expect(isAllValid).toBe(false);
    });
    it("Should return false if value contain empty string", function () {
        var validation = new Validation();
        validation.set("variable 1", "");
        validation.set("variable 2", "ashdjgsak");
        validation.set("variable 3", null);
        var isAllValid = validation.isAllValid();
        expect(isAllValid).toBe(false);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvbi50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL1ZhbGlkYXRpb24udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxQyxRQUFRLENBQUMsZ0RBQWdELEVBQUU7SUFDekQsRUFBRSxDQUFDLDJDQUEyQyxFQUFFO1FBQzlDLElBQU0sVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDcEMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsbUVBQW1FLEVBQUU7UUFDdEUsSUFBTSxVQUFVLEdBSVgsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUN0QixVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxpRkFBaUYsRUFBRTtRQUNwRixJQUFNLFVBQVUsR0FJWCxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLFVBQVUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLFVBQVUsQ0FB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