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
exports.ValidateFileErrorType = types_1.Enum(errorType_1.CommonValidationErrorType.empty, errorType_1.CommonValidationErrorType.invalidFileExtensions, errorType_1.CommonValidationErrorType.exceedMaximumFileSize);
exports.validateFile = function (file, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, acceptedFileExtensions = _b.acceptedFileExtensions, maxFileSize = _b.maxFileSize;
    var fileExtension = file ? "." + file.name.split(".").pop() : "";
    var fileSize = file ? file.size : 0;
    if (isRequired && !file) {
        return exports.ValidateFileErrorType.empty;
    }
    if (acceptedFileExtensions && (validator_1.isEmpty(fileExtension) || acceptedFileExtensions.indexOf(fileExtension) === -1)) {
        return exports.ValidateFileErrorType.invalidFileExtensions;
    }
    if (maxFileSize && fileSize > maxFileSize) {
        return exports.ValidateFileErrorType.exceedMaximumFileSize;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVGaWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCx1Q0FBb0M7QUFDcEMsMkNBQXlDO0FBQ3pDLGtEQUFpRTtBQUVwRCxRQUFBLHFCQUFxQixHQUFHLFlBQUksQ0FDdkMscUNBQXlCLENBQUMsS0FBSyxFQUMvQixxQ0FBeUIsQ0FBQyxxQkFBcUIsRUFDL0MscUNBQXlCLENBQUMscUJBQXFCLENBQ2hELENBQUM7QUFTVyxRQUFBLFlBQVksR0FBRyxVQUMxQixJQUFpQixFQUNqQixFQUFtRjtRQUFuRiw0QkFBbUYsRUFBakYsa0JBQWlCLEVBQWpCLHNDQUFpQixFQUFFLGtEQUFzQixFQUFFLDRCQUFXO0lBRXhELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ25FLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRDLElBQUksVUFBVSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ3ZCLE9BQU8sNkJBQXFCLENBQUMsS0FBSyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxzQkFBc0IsSUFBSSxDQUFDLG1CQUFPLENBQUMsYUFBYSxDQUFDLElBQUksc0JBQXNCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDOUcsT0FBTyw2QkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQztLQUNwRDtJQUVELElBQUksV0FBVyxJQUFJLFFBQVEsR0FBRyxXQUFXLEVBQUU7UUFDekMsT0FBTyw2QkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQztLQUNwRDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDIn0=