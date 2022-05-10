export interface APIUser {
    id: string;
    type?: string;
    name: string;
    avatar?: string;
    banner?: string;
    createdAt?: string;
    createdBy?: string;
};

export type APIUserTypes = "bot" | "user";

export enum EnumAPIUserTypes {
    Bot = "bot",
    User = "user"
};