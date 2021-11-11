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
var validateLength_1 = require("./validateLength");
exports.ValidateChannelNameErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateChannelName = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var MAX_LENGTH = 64;
    var REGEX = "^([a-zA-Z0-9]+)((-|_)?[a-zA-Z0-9])*$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateChannelNameErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX) && value.length <= MAX_LENGTH) {
        return exports.ValidateChannelNameErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: MAX_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVDaGFubmVsTmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUNoYW5uZWxOYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILHVDQUE2QztBQUM3QywyQ0FBcUQ7QUFDckQsa0RBQWlFO0FBQ2pFLG1EQUEyRTtBQUU5RCxRQUFBLDRCQUE0QixHQUFHLGtCQUFVLENBQ3BELHdDQUF1QixFQUN2QixxQ0FBeUIsQ0FBQyxhQUFhLENBQ3hDLENBQUM7QUFPVyxRQUFBLG1CQUFtQixHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQXNEO1FBQXBELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDcEUsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLElBQU0sS0FBSyxHQUFHLHNDQUFzQyxDQUFDO0lBQ3JELElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sb0NBQTRCLENBQUMsS0FBSyxDQUFDO0tBQzNDO0lBQ0QsSUFBSSxDQUFDLG1CQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksVUFBVSxFQUFFO1FBQ3hELE9BQU8sb0NBQTRCLENBQUMsYUFBYSxDQUFDO0tBQ25EO0lBQ0QsT0FBTywrQkFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyJ9