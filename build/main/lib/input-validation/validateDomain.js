"use strict";
/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("validator");
var types_1 = require("../../types/types");
var errorType_1 = require("./constant/errorType");
var validateLength_1 = require("./validateLength");
exports.ValidateDomainErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateDomain = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.maxLength, maxLength = _c === void 0 ? 63 : _c, _d = _b.isRequired, isRequired = _d === void 0 ? true : _d;
    var REGEX = "^\\w[\\w.-]+\\w$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateDomainErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX) && value.length <= maxLength) {
        return exports.ValidateDomainErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: maxLength });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVEb21haW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVEb21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUFxRDtBQUNyRCxrREFBaUU7QUFDakUsbURBQTJFO0FBRTlELFFBQUEsdUJBQXVCLEdBQUcsa0JBQVUsQ0FDL0Msd0NBQXVCLEVBQ3ZCLHFDQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQztBQVFXLFFBQUEsY0FBYyxHQUFHLFVBQzVCLEtBQWEsRUFDYixFQUFpRTtRQUFqRSw0QkFBaUUsRUFBL0QsaUJBQWMsRUFBZCxtQ0FBYyxFQUFFLGtCQUFpQixFQUFqQixzQ0FBaUI7SUFDbkMsSUFBTSxLQUFLLEdBQUcsa0JBQWtCLENBQUM7SUFDakMsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTywrQkFBdUIsQ0FBQyxLQUFLLENBQUM7S0FDdEM7SUFDRCxJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7UUFDdkQsT0FBTywrQkFBdUIsQ0FBQyxhQUFhLENBQUM7S0FDOUM7SUFDRCxPQUFPLCtCQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDIn0=