"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Validation_1 = require("./Validation");
describe("Return isAllValid function with correct output", function () {
    it("Should return true if validation is empty", function () {
        var validation = new Validation_1.Validation();
        var called = validation.isAllValid();
        expect(called).toBe(true);
    });
    it("Should return true if validation has value and all value are null", function () {
        var validation = new Validation_1.Validation();
        validation.set("variable 1", null);
        validation.set("variable 2", null);
        validation.set("variable 3", null);
        var isAllValid = validation.isAllValid();
        expect(isAllValid).toBe(true);
    });
    it("Should return false if validation has string value and null at the end of array", function () {
        var validation = new Validation_1.Validation();
        validation.set("variable 1", "null");
        validation.set("variable 2", "ashdjgsak");
        validation.set("variable 3", null);
        var isAllValid = validation.isAllValid();
        expect(isAllValid).toBe(false);
    });
    it("Should return false if validation has string value and null in the beginning of array", function () {
        var validation = new Validation_1.Validation();
        validation.set("variable 1", null);
        validation.set("variable 2", "ashdjgsak");
        validation.set("variable 3", "null");
        var isAllValid = validation.isAllValid();
        expect(isAllValid).toBe(false);
    });
    it("Should return false if validation has string value and null in the middle of array", function () {
        var validation = new Validation_1.Validation();
        validation.set("variable 1", "asdsad");
        validation.set("variable 2", null);
        validation.set("variable 3", "asdas");
        var isAllValid = validation.isAllValid();
        expect(isAllValid).toBe(false);
    });
    it("Should return false if all value contain string", function () {
        var validation = new Validation_1.Validation();
        validation.set("variable 1", "zxchg");
        validation.set("variable 2", "ashdjgsak");
        validation.set("variable 3", "asdas");
        var isAllValid = validation.isAllValid();
        expect(isAllValid).toBe(false);
    });
    it("Should return false if value contain empty string", function () {
        var validation = new Validation_1.Validation();
        validation.set("variable 1", "");
        validation.set("variable 2", "ashdjgsak");
        validation.set("variable 3", null);
        var isAllValid = validation.isAllValid();
        expect(isAllValid).toBe(false);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvbi50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL1ZhbGlkYXRpb24udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCwyQ0FBMEM7QUFFMUMsUUFBUSxDQUFDLGdEQUFnRCxFQUFFO0lBQ3pELEVBQUUsQ0FBQywyQ0FBMkMsRUFBRTtRQUM5QyxJQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUNwQyxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxtRUFBbUUsRUFBRTtRQUN0RSxJQUFNLFVBQVUsR0FJWCxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUN0QixVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxpRkFBaUYsRUFBRTtRQUNwRixJQUFNLFVBQVUsR0FJWCxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUN0QixVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMxQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyx1RkFBdUYsRUFBRTtRQUMxRixJQUFNLFVBQVUsR0FJWCxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUN0QixVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMxQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtRQUN2RixJQUFNLFVBQVUsR0FJWCxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUN0QixVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxpREFBaUQsRUFBRTtRQUNwRCxJQUFNLFVBQVUsR0FJWCxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUN0QixVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMxQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxtREFBbUQsRUFBRTtRQUN0RCxJQUFNLFVBQVUsR0FJWCxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUN0QixVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMxQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=