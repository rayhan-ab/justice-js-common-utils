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
exports.ValidateTagErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateTag = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var MAXIMUM_TAG_LENGTH = 30;
    var REGEX = "^[a-zA-Z]+([_:-]{1}[a-zA-Z]+)*$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateTagErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateTagErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: MAXIMUM_TAG_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVUYWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVUYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUFxRDtBQUNyRCxrREFBaUU7QUFDakUsbURBQTJFO0FBRTlELFFBQUEsb0JBQW9CLEdBQUcsa0JBQVUsQ0FBQyx3Q0FBdUIsRUFBRSxxQ0FBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQU9wRyxRQUFBLFdBQVcsR0FBRyxVQUFDLEtBQWEsRUFBRSxFQUE4QztRQUE1Qyx5Q0FBaUIsRUFBakIsc0NBQWlCO0lBQzVELElBQU0sa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLElBQU0sS0FBSyxHQUFHLGlDQUFpQyxDQUFDO0lBQ2hELElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sNEJBQW9CLENBQUMsS0FBSyxDQUFDO0tBQ25DO0lBQ0QsSUFBSSxDQUFDLG1CQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sNEJBQW9CLENBQUMsYUFBYSxDQUFDO0tBQzNDO0lBQ0QsT0FBTywrQkFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7QUFDNUQsQ0FBQyxDQUFDIn0=