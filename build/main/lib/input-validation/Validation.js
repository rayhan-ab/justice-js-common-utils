"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Validation = /** @class */ (function () {
    function Validation() {
        this.validationMap = new Map();
        this.subscriber = new Set();
    }
    Validation.prototype.set = function (key, value) {
        this.validationMap.set(key, value);
        this.notifySubscribers();
    };
    Validation.prototype.get = function (key) {
        return this.validationMap.get(key) || null;
    };
    Validation.prototype.clear = function () {
        this.validationMap = new Map();
        this.notifySubscribers();
    };
    Validation.prototype.listen = function (listener) {
        this.subscriber.add(listener);
    };
    Validation.prototype.unlisten = function (listener) {
        this.subscriber.delete(listener);
    };
    Validation.prototype.clearSubscriber = function () {
        this.subscriber = new Set();
    };
    Validation.prototype.isAllValid = function () {
        if (this.validationMap.size === 0) {
            return true;
        }
        var mapArray = Array.from(this.validationMap.values());
        return mapArray.every(function (value) {
            return value === null;
        });
    };
    Validation.prototype.notifySubscribers = function () {
        Array.from(this.subscriber).forEach(function (a) { return a(); });
    };
    return Validation;
}());
exports.Validation = Validation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi9WYWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVIO0lBQUE7UUFDVSxrQkFBYSxHQUFvQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzNELGVBQVUsR0FBdUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQXlDckQsQ0FBQztJQXZDUSx3QkFBRyxHQUFWLFVBQVcsR0FBWSxFQUFFLEtBQTJCO1FBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sd0JBQUcsR0FBVixVQUFXLEdBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUVNLDBCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLDJCQUFNLEdBQWIsVUFBYyxRQUF1QjtRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sNkJBQVEsR0FBZixVQUFnQixRQUF1QjtRQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sb0NBQWUsR0FBdEI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLCtCQUFVLEdBQWpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDMUIsT0FBTyxLQUFLLEtBQUssSUFBSSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHNDQUFpQixHQUF6QjtRQUNFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRSxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7QUEzQ1ksZ0NBQVUifQ==