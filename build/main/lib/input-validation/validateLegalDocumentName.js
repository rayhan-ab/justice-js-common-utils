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
var numbers_1 = require("./constant/numbers");
var validateLength_1 = require("./validateLength");
exports.ValidateLegalDocumentNameErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
/**
 *
 * @param value
 * @param isRequired
 * @param maxLength
 *
 * @default isRequired true
 * @default maxLength MAX_SHORT_TEXT_LENGTH
 */
exports.validateLegalDocumentName = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.maxLength, maxLength = _d === void 0 ? numbers_1.MAX_SHORT_TEXT_LENGTH : _d;
    var REGEX = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/;
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateLegalDocumentNameErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateLegalDocumentNameErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, {
        max: maxLength,
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVMZWdhbERvY3VtZW50TmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUxlZ2FsRG9jdW1lbnROYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILHVDQUE2QztBQUM3QywyQ0FBcUQ7QUFDckQsa0RBQWlFO0FBQ2pFLDhDQUEyRDtBQUMzRCxtREFBMkU7QUFFOUQsUUFBQSxrQ0FBa0MsR0FBRyxrQkFBVSxDQUMxRCx3Q0FBdUIsRUFDdkIscUNBQXlCLENBQUMsYUFBYSxDQUN4QyxDQUFDO0FBUUY7Ozs7Ozs7O0dBUUc7QUFDVSxRQUFBLHlCQUF5QixHQUFHLFVBQ3ZDLEtBQWEsRUFDYixFQUErRjtRQUEvRiw0QkFBK0YsRUFBN0Ysa0JBQWlCLEVBQWpCLHNDQUFpQixFQUFFLGlCQUFpQyxFQUFqQyxnRUFBaUM7SUFFdEQsSUFBTSxLQUFLLEdBQUcsNkJBQTZCLENBQUM7SUFFNUMsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTywwQ0FBa0MsQ0FBQyxLQUFLLENBQUM7S0FDakQ7SUFFRCxJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTywwQ0FBa0MsQ0FBQyxhQUFhLENBQUM7S0FDekQ7SUFFRCxPQUFPLCtCQUFjLENBQUMsS0FBSyxFQUFFO1FBQzNCLEdBQUcsRUFBRSxTQUFTO0tBQ2YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=