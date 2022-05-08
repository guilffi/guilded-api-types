export type GatewayEvents = "ChatMessageCreated"
    | "ChatMessageUpdated"
    | "ChatMessageDeleted"
    | "TeamMemberJoined"
    | "TeamMemberRemoved"
    | "TeamMemberBanned"
    | "TeamMemberUnbanned"
    | "TeamMemberUpdated"
    | "teamRolesUpdated"
    | "TeamChannelCreated"
    | "TeamChannelUpdated"
    | "TeamChannelDeleted"
    | "TeamWebhookCreated"
    | "TeamWebhookUpdate"
    | "DocCreated"
    | "DocDeleted"
    | "ListItemCreated"
    | "ListItemUpdated"
    | "ListItemDeleted"
    | "ListItemCompleted"
    | "ListItemUncompleted"

export interface GatewayWelcome {
    op: GatewayCodes.Welcome;
    d: GatewayWelcomeData;
};

export interface GatewayWelcomeData {
    lastMessageId: string;
    user: {
        id: string;
        botId: string;
        name: string;
        createdAt: string;
        createdBy: string;
    };
    heartbeatIntervalMs: number;
};

export interface GatewayResume {
    op: GatewayCodes.Welcome;
    d: GatewayResumeData;
};

export interface GatewayResumeData {
    s: string;
};

export enum GatewayCodes {
    Welcome = 1,
    Event = 0,
    Resume = 2,
    Failure = 8,
    Success = 9
};