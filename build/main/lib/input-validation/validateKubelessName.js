"use strict";
/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("validator");
var types_1 = require("../../types/types");
var errorType_1 = require("./constant/errorType");
var validateLength_1 = require("./validateLength");
exports.ValidateKubelessNameErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateKubelessName = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[a-zA-Z]+(?:([a-zA-Z0-9]+)[-]*[a-zA-Z0-9]+)*$";
    var MAX_KUBELESS_NAME_LENGTH = 64;
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateKubelessNameErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateKubelessNameErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: MAX_KUBELESS_NAME_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVLdWJlbGVzc05hbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVLdWJlbGVzc05hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUFxRDtBQUNyRCxrREFBaUU7QUFDakUsbURBQTJFO0FBRTlELFFBQUEsNkJBQTZCLEdBQUcsa0JBQVUsQ0FDckQsd0NBQXVCLEVBQ3ZCLHFDQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQztBQU9XLFFBQUEsb0JBQW9CLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBdUQ7UUFBckQseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUNyRSxJQUFNLEtBQUssR0FBRyxnREFBZ0QsQ0FBQztJQUMvRCxJQUFNLHdCQUF3QixHQUFHLEVBQUUsQ0FBQztJQUNwQyxJQUFJLG1CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLHFDQUE2QixDQUFDLEtBQUssQ0FBQztLQUM1QztJQUNELElBQUksQ0FBQyxtQkFBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMxQixPQUFPLHFDQUE2QixDQUFDLGFBQWEsQ0FBQztLQUNwRDtJQUNELE9BQU8sK0JBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO0FBQ2xFLENBQUMsQ0FBQyJ9