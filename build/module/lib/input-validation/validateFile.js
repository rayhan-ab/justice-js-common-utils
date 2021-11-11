/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { isEmpty } from "validator";
import { Enum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
export var ValidateFileErrorType = Enum(CommonValidationErrorType.empty, CommonValidationErrorType.invalidFileExtensions, CommonValidationErrorType.exceedMaximumFileSize);
export var validateFile = function (file, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, acceptedFileExtensions = _b.acceptedFileExtensions, maxFileSize = _b.maxFileSize;
    var fileExtension = file ? "." + file.name.split(".").pop() : "";
    var fileSize = file ? file.size : 0;
    if (isRequired && !file) {
        return ValidateFileErrorType.empty;
    }
    if (acceptedFileExtensions && (isEmpty(fileExtension) || acceptedFileExtensions.indexOf(fileExtension) === -1)) {
        return ValidateFileErrorType.invalidFileExtensions;
    }
    if (maxFileSize && fileSize > maxFileSize) {
        return ValidateFileErrorType.exceedMaximumFileSize;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVGaWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakUsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBQUcsSUFBSSxDQUN2Qyx5QkFBeUIsQ0FBQyxLQUFLLEVBQy9CLHlCQUF5QixDQUFDLHFCQUFxQixFQUMvQyx5QkFBeUIsQ0FBQyxxQkFBcUIsQ0FDaEQsQ0FBQztBQVNGLE1BQU0sQ0FBQyxJQUFNLFlBQVksR0FBRyxVQUMxQixJQUFpQixFQUNqQixFQUFtRjtRQUFuRiw0QkFBbUYsRUFBakYsa0JBQWlCLEVBQWpCLHNDQUFpQixFQUFFLGtEQUFzQixFQUFFLDRCQUFXO0lBRXhELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ25FLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRDLElBQUksVUFBVSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ3ZCLE9BQU8scUJBQXFCLENBQUMsS0FBSyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxzQkFBc0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM5RyxPQUFPLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDO0tBQ3BEO0lBRUQsSUFBSSxXQUFXLElBQUksUUFBUSxHQUFHLFdBQVcsRUFBRTtRQUN6QyxPQUFPLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDO0tBQ3BEO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMifQ==