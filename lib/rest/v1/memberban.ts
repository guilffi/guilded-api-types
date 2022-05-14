import { APIUserSummary } from "./user";

/**
 * @link
 * https://www.guilded.gg/docs/api/member-bans
 */

/**
 * https://www.guilded.gg/docs/api/member-bans/ServerMemberBan
 */
export interface APIMemberBan {
    /** The user summary data */
    user: APIUserSummary;
    /** The reason for the ban as submitted by the banner */
    reason?: string;
    /** The ID of the user who created this server member ban */
    createdBy: string;
    /** The ISO 8601 timestamp that the server member ban was created at */
    createdAt: string;
};

/**
 * https://www.guilded.gg/docs/api/member-bans/ServerMemberBanCreate
 */
export interface APIPostServerBanBody {
    reason?: string;
};

/**
 * https://www.guilded.gg/docs/api/member-bans/ServerMemberBanRead
 */
export type APIGetServerBanResponse = APIMemberBan;

/**
 * https://www.guilded.gg/docs/api/member-bans/ServerMemberBanReadMany
 */
export type APIGetServerBansResponse = APIMemberBan[];