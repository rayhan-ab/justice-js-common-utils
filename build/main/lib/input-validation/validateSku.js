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
exports.ValidateSkuErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
var MAXIMUM_SKU_LENGTH = 32;
exports.validateSku = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.maxLength, maxLength = _d === void 0 ? MAXIMUM_SKU_LENGTH : _d;
    var REGEX = "^[a-zA-Z0-9]+([_:-]{1}[a-zA-Z0-9]+)*$|^$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateSkuErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateSkuErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: maxLength });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTa3UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVTa3UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUFxRDtBQUNyRCxrREFBaUU7QUFDakUsbURBQTJFO0FBRTlELFFBQUEsb0JBQW9CLEdBQUcsa0JBQVUsQ0FBQyx3Q0FBdUIsRUFBRSxxQ0FBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUdqSCxJQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQU9qQixRQUFBLFdBQVcsR0FBRyxVQUN6QixLQUFhLEVBQ2IsRUFBOEU7UUFBOUUsNEJBQThFLEVBQTVFLGtCQUFpQixFQUFqQixzQ0FBaUIsRUFBRSxpQkFBOEIsRUFBOUIsbURBQThCO0lBRW5ELElBQU0sS0FBSyxHQUFHLDBDQUEwQyxDQUFDO0lBQ3pELElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sNEJBQW9CLENBQUMsS0FBSyxDQUFDO0tBQ25DO0lBQ0QsSUFBSSxDQUFDLG1CQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sNEJBQW9CLENBQUMsYUFBYSxDQUFDO0tBQzNDO0lBQ0QsT0FBTywrQkFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyJ9