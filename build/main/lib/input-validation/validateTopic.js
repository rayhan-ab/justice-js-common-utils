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
exports.ValidateTopicErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateTopic = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[A-Z]+([_]{1}[A-Z]+)*$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateTopicErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateTopicErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVUb3BpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVRvcGljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILHVDQUE2QztBQUM3QywyQ0FBcUQ7QUFDckQsa0RBQWlFO0FBQ2pFLG1EQUEyRTtBQUU5RCxRQUFBLHNCQUFzQixHQUFHLGtCQUFVLENBQUMsd0NBQXVCLEVBQUUscUNBQXlCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFPdEcsUUFBQSxhQUFhLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBZ0Q7UUFBOUMseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUM5RCxJQUFNLEtBQUssR0FBRyx5QkFBeUIsQ0FBQztJQUN4QyxJQUFJLG1CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLDhCQUFzQixDQUFDLEtBQUssQ0FBQztLQUNyQztJQUNELElBQUksQ0FBQyxtQkFBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMxQixPQUFPLDhCQUFzQixDQUFDLGFBQWEsQ0FBQztLQUM3QztJQUNELE9BQU8sK0JBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMifQ==