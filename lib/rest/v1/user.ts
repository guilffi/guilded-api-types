/**
 * @link
 * https://www.guilded.gg/docs/api/members/User
 */

 export interface APIUser {
    /** The ID of the user */
    id: string;
    /**
     * The type of user.
     * If this property is absent, it can assumed to be of type user
     */
    type?: APIUserTypes;
    /** The name of the user */
    name: string;
    /** The avatar image associated with the user */
    avatar?: string;
    /** The banner image associated with the user */
    banner?: string;
    /** The ISO 8601 timestamp that the user was created at */
    createdAt: string;
};

export type APIUserTypes = "bot" | "user";

/**
 * https://www.guilded.gg/docs/api/members/UserSummary
 */
export interface APIUserSummary extends Omit<APIUser, "banner" | "createdAt"> {
    /** The ID of the user */
    id: string;
};