import { APIUser, APIUserTypes } from "../../payloads";

export type RestGetAPIUser = APIUser;

export interface RestGetAPIUserSummary {
    id: string;
    type?: APIUserTypes;
    name: string;
    avatar?: string;
};