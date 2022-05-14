import { APIUser, APIUserSummary } from "./user";

/**
 * https://www.guilded.gg/docs/api/members/ServerMember
 */
export interface APIMember {
    /** The user data */
    user: APIUser;
    /** The ID(s) of the role (must have unique items true) */
    roleIds: number[];
    /** The nickname of the user */
    nickname?: string;
    /** The ISO 8601 timestamp that the member was created at */
    joinedAt: string;
    /** Whether the user is an owner */
    isOwner?: boolean;
};

/**
 * https://www.guilded.gg/docs/api/members/ServerMemberSummary
 */
export interface APIMemberSummary {
    /** The user summary data */
    user: APIUserSummary;
    /** The role ID(s) of the member */
    roleIds: number[];
};

/**
 * https://www.guilded.gg/docs/api/members/MemberNicknameUpdate
 */
export interface APIPutMemberNicknameBody {
    nickname: string;
};

/**
 * https://www.guilded.gg/docs/api/members/ServerMemberRead
 */
export type APIGetMemberResponse = APIMember;

/**
 * https://www.guilded.gg/docs/api/members/ServerMemberReadMany
 */
export type APIGetMembersResponse = APIMemberSummary[];