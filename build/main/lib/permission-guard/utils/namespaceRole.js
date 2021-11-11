"use strict";
/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
// Get list of admin role id
function getAdminRoles(roles) {
    return roles.reduce(function (filtered, role) {
        if (role.adminRole === true) {
            filtered.push(role.roleId);
        }
        return filtered;
    }, []);
}
exports.getAdminRoles = getAdminRoles;
// Get list of admin namespace role
function getAdminNamespaceRoles(namespaceRoles, roles) {
    return namespaceRoles.filter(function (namespaceRole) {
        return roles.find(function (role) { return role.adminRole === true && role.roleId === namespaceRole.roleId; });
    });
}
exports.getAdminNamespaceRoles = getAdminNamespaceRoles;
// Get list of role id based on selected namespace
function getRoleIdsByNamespace(namespaceRoles, namespace) {
    return namespaceRoles.reduce(function (filtered, role) {
        if (namespace) {
            if (role.namespace === namespace || role.namespace === types_1.WILDCARD_SIGN) {
                filtered.push(role.roleId);
            }
        }
        else {
            filtered.push(role.roleId);
        }
        return filtered;
    }, []);
}
exports.getRoleIdsByNamespace = getRoleIdsByNamespace;
// Get list of roles owned by current user
function getCurrentUserRoles(roles, userRoleIds) {
    return roles.filter(function (role) { return userRoleIds.includes(role.roleId) && Array.isArray(role.permissions) && role.permissions.length > 0; });
}
exports.getCurrentUserRoles = getCurrentUserRoles;
// Get list of permission owned by current user
function getCurrentUserPermissions(roles) {
    return roles.reduce(function (acc, role) {
        return acc.concat(role.permissions);
    }, []);
}
exports.getCurrentUserPermissions = getCurrentUserPermissions;
// Get list of permission with namespace owned by current user
function getCurrentUserNamespacedPermissions(namespaceRoleWithPermission) {
    return namespaceRoleWithPermission.reduce(function (acc, curr) {
        return acc.concat(curr.permissions);
    }, []);
}
exports.getCurrentUserNamespacedPermissions = getCurrentUserNamespacedPermissions;
// Check whether current user has admin role
function isUserHasAdminRole(userNamespaceRoles, adminRoles) {
    return adminRoles.some(function (role) { return userNamespaceRoles.includes(role); });
}
exports.isUserHasAdminRole = isUserHasAdminRole;
// Replace {namespace} string with real namespace value
exports.replacePermissionNamespace = function (permission, namespace) {
    return {
        resource: permission.resource.replace("{namespace}", namespace),
        action: permission.action,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlUm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvcGVybWlzc2lvbi1ndWFyZC91dGlscy9uYW1lc3BhY2VSb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUdILGtDQUF5QztBQUV6Qyw0QkFBNEI7QUFDNUIsU0FBZ0IsYUFBYSxDQUFDLEtBQXdCO0lBQ3BELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQWtCLEVBQUUsSUFBcUI7UUFDNUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUM7QUFQRCxzQ0FPQztBQUVELG1DQUFtQztBQUNuQyxTQUFnQixzQkFBc0IsQ0FBQyxjQUErQixFQUFFLEtBQXdCO0lBQzlGLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFDLGFBQWE7UUFDekMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxhQUFhLENBQUMsTUFBTSxFQUEvRCxDQUErRCxDQUFDLENBQUM7SUFDL0YsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBSkQsd0RBSUM7QUFFRCxrREFBa0Q7QUFDbEQsU0FBZ0IscUJBQXFCLENBQUMsY0FBK0IsRUFBRSxTQUFrQjtJQUN2RixPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUFrQixFQUFFLElBQW1CO1FBQ25FLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLHFCQUFhLEVBQUU7Z0JBQ3BFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVCO1NBQ0Y7YUFBTTtZQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQztBQVhELHNEQVdDO0FBRUQsMENBQTBDO0FBQzFDLFNBQWdCLG1CQUFtQixDQUFDLEtBQXdCLEVBQUUsV0FBcUI7SUFDakYsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUNqQixVQUFDLElBQUksSUFBSyxPQUFBLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBbkcsQ0FBbUcsQ0FDOUcsQ0FBQztBQUNKLENBQUM7QUFKRCxrREFJQztBQUVELCtDQUErQztBQUMvQyxTQUFnQix5QkFBeUIsQ0FBQyxLQUF3QjtJQUNoRSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFxQixFQUFFLElBQXFCO1FBQy9ELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQztBQUpELDhEQUlDO0FBRUQsOERBQThEO0FBQzlELFNBQWdCLG1DQUFtQyxDQUNqRCwyQkFBMEQ7SUFFMUQsT0FBTywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFxQixFQUFFLElBQUk7UUFDcEUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDO0FBTkQsa0ZBTUM7QUFFRCw0Q0FBNEM7QUFDNUMsU0FBZ0Isa0JBQWtCLENBQUMsa0JBQTRCLEVBQUUsVUFBb0I7SUFDbkYsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7QUFDdEUsQ0FBQztBQUZELGdEQUVDO0FBRUQsdURBQXVEO0FBQzFDLFFBQUEsMEJBQTBCLEdBQUcsVUFBQyxVQUEwQixFQUFFLFNBQWlCO0lBQ3RGLE9BQU87UUFDTCxRQUFRLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQztRQUMvRCxNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07S0FDMUIsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9