export declare const WILDCARD_SIGN = "*";
export declare enum CrudType {
    CREATE = "CREATE",
    READ = "READ",
    UPDATE = "UPDATE",
    DELETE = "DELETE"
}
export declare enum CrudBitType {
    Create = 1,
    Read = 2,
    Update = 4,
    Delete = 8
}
export interface CrudRolePermission {
    resource: string;
    action: CrudType;
}
export interface PermissionNamespaceSchema {
    namespace?: string;
}
export interface PermissionNamespaceUserIdSchema extends PermissionNamespaceSchema {
    userId?: string;
}
export interface PermissionNamespaceClientIdSchema extends PermissionNamespaceSchema {
    clientId?: string;
}
