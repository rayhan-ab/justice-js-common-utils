/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
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
export { Validation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi9WYWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSDtJQUFBO1FBQ1Usa0JBQWEsR0FBb0MsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMzRCxlQUFVLEdBQXVCLElBQUksR0FBRyxFQUFFLENBQUM7SUF5Q3JELENBQUM7SUF2Q1Esd0JBQUcsR0FBVixVQUFXLEdBQVksRUFBRSxLQUEyQjtRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLHdCQUFHLEdBQVYsVUFBVyxHQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzdDLENBQUM7SUFFTSwwQkFBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSwyQkFBTSxHQUFiLFVBQWMsUUFBdUI7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLDZCQUFRLEdBQWYsVUFBZ0IsUUFBdUI7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLG9DQUFlLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSwrQkFBVSxHQUFqQjtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN6RCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQzFCLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxzQ0FBaUIsR0FBekI7UUFDRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEVBQUUsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBM0NELElBMkNDIn0=