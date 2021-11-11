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
exports.ValidateSecretKeyErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateSecretKey = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.maxLength, maxLength = _d === void 0 ? 256 : _d;
    var REGEX = "^[^*\\s]+$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateSecretKeyErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateSecretKeyErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: maxLength });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTZWNyZXRLZXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVTZWNyZXRLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUFxRDtBQUNyRCxrREFBaUU7QUFDakUsbURBQTJFO0FBRTlELFFBQUEsMEJBQTBCLEdBQUcsa0JBQVUsQ0FBQyx3Q0FBdUIsRUFBRSxxQ0FBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQVExRyxRQUFBLGlCQUFpQixHQUFHLFVBQy9CLEtBQWEsRUFDYixFQUFxRTtRQUFyRSw0QkFBcUUsRUFBbkUsa0JBQWlCLEVBQWpCLHNDQUFpQixFQUFFLGlCQUFlLEVBQWYsb0NBQWU7SUFFcEMsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQzNCLElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sa0NBQTBCLENBQUMsS0FBSyxDQUFDO0tBQ3pDO0lBQ0QsSUFBSSxDQUFDLG1CQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sa0NBQTBCLENBQUMsYUFBYSxDQUFDO0tBQ2pEO0lBQ0QsT0FBTywrQkFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyJ9