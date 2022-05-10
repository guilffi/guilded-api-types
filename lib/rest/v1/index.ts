export const APIVersion = "1";

export const RouteBases = {
    API: "https://www.guilded.gg/api",
    VerAPI: `https://www.guilded.gg/api/v${APIVersion}`
} as const;

export const Routes = {
    // Channels
    channel: (channelId: string) => {
        return `/channels/${channelId}`;
    },
    channelMessages: (channelId: string) => {
        return `/channels/${channelId}/messages`;
    },
    channelMessage: (channelId: string, messageId: string) => {
        return `/channels/${channelId}/messages/${messageId}`;
    },
    // Members
    serverMemberNickname: (serverId: string, userId: string) => {
        return `/servers/${serverId}/members/${userId}/nickname`;
    },
    serverMember: (serverId: string, userId: string) => {
        return `/servers/${serverId}/members/${userId}`;
    },
    serverMembers: (serverId: string) => {
        return `/servers/${serverId}/members`;
    },
    // Member Bans
    serveBan: (serverId: string, userId: string) => {
        return `/servers/${serverId}/bans/${userId}`;
    },
    serverBans: (serverId: string) => {
        return `/servers/${serverId}/bans`;
    },
    // Forums
    forumThread: (channelId: string) => {
        return `/channels/${channelId}/forum`;
    },
    // Webhooks
    serverWebhook: (serverId: string, id?: string) => {
        return `/servers/${serverId}/webhooks${id ? `/${id}` : ""}`
    },
} as const;

export * from "./channel";
export * from "./user";