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
exports.ValidateBase64ErrorType = types_1.Enum(errorType_1.CommonValidationErrorType.empty, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateBase64 = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[A-Za-z0-9+/]+={0,2}$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateBase64ErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateBase64ErrorType.invalidFormat;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVCYXNlNjQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVCYXNlNjQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUF5QztBQUN6QyxrREFBaUU7QUFFcEQsUUFBQSx1QkFBdUIsR0FBRyxZQUFJLENBQUMscUNBQXlCLENBQUMsS0FBSyxFQUFFLHFDQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBT3pHLFFBQUEsY0FBYyxHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQWlEO1FBQS9DLHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDL0QsSUFBTSxLQUFLLEdBQUcsd0JBQXdCLENBQUM7SUFDdkMsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTywrQkFBdUIsQ0FBQyxLQUFLLENBQUM7S0FDdEM7SUFDRCxJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTywrQkFBdUIsQ0FBQyxhQUFhLENBQUM7S0FDOUM7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyJ9