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
exports.ValidateAlphaNumericErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateAlphanumeric = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.maxLength, maxLength = _c === void 0 ? 256 : _c, _d = _b.isRequired, isRequired = _d === void 0 ? true : _d;
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateAlphaNumericErrorType.empty;
    }
    if (!validator_1.isAlphanumeric(value)) {
        return exports.ValidateAlphaNumericErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: maxLength });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVBbHBoYW51bWVyaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVBbHBoYW51bWVyaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQW9EO0FBQ3BELDJDQUFxRDtBQUNyRCxrREFBaUU7QUFDakUsbURBQTJFO0FBRTlELFFBQUEsNkJBQTZCLEdBQUcsa0JBQVUsQ0FDckQsd0NBQXVCLEVBQ3ZCLHFDQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQztBQVFXLFFBQUEsb0JBQW9CLEdBQUcsVUFDbEMsS0FBYSxFQUNiLEVBQXdFO1FBQXhFLDRCQUF3RSxFQUF0RSxpQkFBZSxFQUFmLG9DQUFlLEVBQUUsa0JBQWlCLEVBQWpCLHNDQUFpQjtJQUVwQyxJQUFJLG1CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLHFDQUE2QixDQUFDLEtBQUssQ0FBQztLQUM1QztJQUNELElBQUksQ0FBQywwQkFBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8scUNBQTZCLENBQUMsYUFBYSxDQUFDO0tBQ3BEO0lBQ0QsT0FBTywrQkFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyJ9