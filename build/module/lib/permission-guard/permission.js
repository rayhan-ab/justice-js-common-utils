/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CrudBitType, CrudType, WILDCARD_SIGN } from "./types";
var PermissionGuard = /** @class */ (function () {
    function PermissionGuard(props) {
        var _this = this;
        if (props === void 0) { props = {}; }
        this.permissionCheck = {};
        this.subscriber = new Set();
        this.hasPermission = function (permission) {
            var key = JSON.stringify(permission);
            var currentUser = _this.user;
            if (currentUser) {
                var userPermissionExist = Array.isArray(currentUser.permissions) && currentUser.permissions.length > 0;
                if (!userPermissionExist) {
                    _this.permissionCheck = {};
                    return _this.permissionCheck[key];
                }
                _this.permissionCheck[key] = _this.checkHasPermission(currentUser.permissions, permission);
            }
            return _this.permissionCheck[key];
        };
        this.getCrudTypeByCrudBit = function (action) {
            var actionBits = Object.keys(CrudBitType)
                .map(Number)
                .filter(Boolean);
            // tslint:disable-next-line:no-bitwise
            return actionBits.map(function (bit) { return (action & bit) === bit && CrudBitType[bit]; }).filter(Boolean);
        };
        this.hasPermissionByCrudBit = function (permission, action) {
            var isUserHasPermission = _this.getCrudTypeByCrudBit(permission.action)
                // tslint:disable-next-line:no-shadowed-variable
                .map(function (action) { return action.toUpperCase(); })
                .find(function (permissionAction) { return permissionAction === action.toUpperCase(); });
            if (!isUserHasPermission) {
                return false;
            }
            return _this.hasPermission({ action: action, resource: permission.resource });
        };
        this.reset = function () {
            _this.permissionCheck = {};
        };
        this.setUser = function (user) {
            _this.user = user;
            _this.notifySubscribers();
        };
        this.setCurrentNamespace = function (currentNamespace) {
            _this.currentNamespace = currentNamespace;
            _this.notifySubscribers();
        };
        this.setClientId = function (clientId) {
            _this.clientId = clientId;
            _this.notifySubscribers();
        };
        this.checkHasPermission = function (userPermissions, _a) {
            var resource = _a.resource, action = _a.action;
            return (Array.isArray(userPermissions) &&
                userPermissions.some(function (permission) {
                    return (!!permission && _this.isResourceIncluded(permission, resource) && _this.isActionIncluded(permission, action));
                }));
        };
        this.isResourceIncluded = function (permission, resource) {
            if (!permission.resource || !resource) {
                return false;
            }
            if (permission.resource === resource) {
                return true;
            }
            var hasAPairOfBracketsRegexp = /{[A-z]*}/;
            if (!hasAPairOfBracketsRegexp.test(permission.resource) &&
                !hasAPairOfBracketsRegexp.test(resource) &&
                permission.resource === resource) {
                return true;
            }
            var requiredResourceArr = resource.split(":");
            var testResourceArr = permission.resource.split(":");
            var maxSectionLength = requiredResourceArr.length > testResourceArr.length ? testResourceArr.length : requiredResourceArr.length;
            var isDifferentSection = requiredResourceArr
                .slice(0, maxSectionLength)
                .some(function (_, index) { return !_this.isVariableCovered(testResourceArr[index], requiredResourceArr[index]); });
            if (isDifferentSection) {
                return false;
            }
            if (testResourceArr.length === requiredResourceArr.length) {
                return true;
            }
            var resourceSlice = testResourceArr.slice(requiredResourceArr.length, testResourceArr.length);
            return resourceSlice.length > 0 && resourceSlice.every(function (section) { return section === WILDCARD_SIGN; });
        };
        this.isActionIncluded = function (permission, action) {
            var modeType = Object.keys(CrudType);
            return Number(permission.action)
                .toString(2)
                .split("")
                .reverse()
                .some(function (item, index) { return item === "1" && modeType[index] === action; });
        };
        this.isVariableCovered = function (access, required) {
            if (access === WILDCARD_SIGN) {
                return true;
            }
            var insideBracketRegexp = /^{[A-z]*}$/;
            var accessIsInsideBracket = insideBracketRegexp.test(access);
            var requiredIsInsideBracket = insideBracketRegexp.test(required);
            if ((!accessIsInsideBracket && !requiredIsInsideBracket) || !_this.user) {
                return access === required;
            }
            var actualAccessVal = !accessIsInsideBracket
                ? access
                : _this.replaceResourceVal(access, {
                    namespace: _this.user.namespace,
                    userId: _this.user.userId,
                    clientId: _this.clientId,
                });
            var actualRequiredVal = !requiredIsInsideBracket
                ? required
                : _this.replaceResourceVal(required, {
                    namespace: _this.currentNamespace,
                    userId: _this.user.userId,
                    clientId: _this.clientId,
                });
            return actualAccessVal === actualRequiredVal;
        };
        this.replaceResourceVal = function (value, replacement) {
            return Object.keys(replacement).reduce(function (val, key) { return val.replace("{" + key + "}", replacement[key]); }, value);
        };
        this.user = props.user || null;
        this.currentNamespace = props.currentNamespace || "";
        this.clientId = props.clientId || "";
    }
    PermissionGuard.prototype.listen = function (listener) {
        this.subscriber.add(listener);
    };
    PermissionGuard.prototype.unlisten = function (listener) {
        this.subscriber.delete(listener);
    };
    PermissionGuard.prototype.notifySubscribers = function () {
        Array.from(this.subscriber).forEach(function (a) { return a(); });
    };
    return PermissionGuard;
}());
export { PermissionGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcGVybWlzc2lvbi1ndWFyZC9wZXJtaXNzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFJSCxPQUFPLEVBQUUsV0FBVyxFQUFzQixRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRW5GO0lBT0UseUJBQVksS0FBcUY7UUFBakcsaUJBSUM7UUFKVyxzQkFBQSxFQUFBLFVBQXFGO1FBTjFGLG9CQUFlLEdBQStCLEVBQUUsQ0FBQztRQUloRCxlQUFVLEdBQXVCLElBQUksR0FBRyxFQUFFLENBQUM7UUFRNUMsa0JBQWEsR0FBRyxVQUFDLFVBQThCO1lBQ3BELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkMsSUFBTSxXQUFXLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztZQUU5QixJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFNLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDekcsSUFBSSxDQUFDLG1CQUFtQixFQUFFO29CQUN4QixLQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztvQkFDMUIsT0FBTyxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQztnQkFFRCxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQzFGO1lBRUQsT0FBTyxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQztRQUVLLHlCQUFvQixHQUFHLFVBQUMsTUFB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