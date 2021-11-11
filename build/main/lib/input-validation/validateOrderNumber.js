"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("validator");
var types_1 = require("../../types/types");
var errorType_1 = require("./constant/errorType");
exports.ValidateOrderNumberErrorType = types_1.Enum(errorType_1.CommonValidationErrorType.empty, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateOrderNumber = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^O[0-9]{16,}$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateOrderNumberErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateOrderNumberErrorType.invalidFormat;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVPcmRlck51bWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZU9yZGVyTnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILHVDQUE2QztBQUM3QywyQ0FBeUM7QUFDekMsa0RBQWlFO0FBRXBELFFBQUEsNEJBQTRCLEdBQUcsWUFBSSxDQUM5QyxxQ0FBeUIsQ0FBQyxLQUFLLEVBQy9CLHFDQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQztBQU9XLFFBQUEsbUJBQW1CLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBc0Q7UUFBcEQseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUNwRSxJQUFNLEtBQUssR0FBRyxlQUFlLENBQUM7SUFDOUIsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxvQ0FBNEIsQ0FBQyxLQUFLLENBQUM7S0FDM0M7SUFDRCxJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxvQ0FBNEIsQ0FBQyxhQUFhLENBQUM7S0FDbkQ7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyJ9