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
exports.ValidateJSONErrorType = types_1.Enum(errorType_1.CommonValidationErrorType.empty, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateJSON = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.isObject, isObject = _d === void 0 ? true : _d;
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateJSONErrorType.empty;
    }
    try {
        var parsedJSON = JSON.parse(value);
        if (isObject && typeof parsedJSON !== "object") {
            return exports.ValidateJSONErrorType.invalidFormat;
        }
        return null;
    }
    catch (e) {
        return exports.ValidateJSONErrorType.invalidFormat;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVKU09OLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlSlNPTi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCx1Q0FBb0M7QUFDcEMsMkNBQXlDO0FBQ3pDLGtEQUFpRTtBQUVwRCxRQUFBLHFCQUFxQixHQUFHLFlBQUksQ0FBQyxxQ0FBeUIsQ0FBQyxLQUFLLEVBQUUscUNBQXlCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFRdkcsUUFBQSxZQUFZLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBK0Q7UUFBL0QsNEJBQStELEVBQTdELGtCQUFpQixFQUFqQixzQ0FBaUIsRUFBRSxnQkFBZSxFQUFmLG9DQUFlO0lBQzlFLElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sNkJBQXFCLENBQUMsS0FBSyxDQUFDO0tBQ3BDO0lBRUQsSUFBSTtRQUNGLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxRQUFRLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO1lBQzlDLE9BQU8sNkJBQXFCLENBQUMsYUFBYSxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsT0FBTyw2QkFBcUIsQ0FBQyxhQUFhLENBQUM7S0FDNUM7QUFDSCxDQUFDLENBQUMifQ==