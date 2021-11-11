export declare type RolePermission = {
    resource: string;
    action: number;
} & Partial<{
    schedAction: number;
    schedCron: string;
    schedRange: string[];
}>;
export interface Role {
    permissions: RolePermission[];
    roleId: string;
    roleName: string;
    isWildcard: boolean;
    adminRole: boolean;
}
export interface RoleUser {
    displayName: string;
    namespace: string;
    userId: string;
}
export declare type RoleWithManager = Role & {
    managers: RoleUser[];
};
export interface NamespaceRole {
    roleId: string;
    namespace: string;
}
export interface NamespaceRoleWithPermission extends NamespaceRole {
    permissions: RolePermission[];
}
