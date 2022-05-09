export interface APIChatMessage {
    id?: string;
    type?: APIChatMessageType;
    serverId?: string;
    channelId?: string;
    content: string;
    embeds: APIChatEmbed[];
    replyMessageIds: string[];
    isPrivate?: boolean;
    createdAt?: string;
    createdBy?: string;
    createdByWebhookId?: string;
    updatedAt?: string;
};

export type APIChatMessageType = "default" | "system";

export interface APIChatEmbed {
    title?: string;
    description?: string;
    url?: string;
    color?: number;
    footer?: APIChatEmbedFooter;
    timestamp?: string;
    thumbnail?: APIChatEmbedThumbnail;
    image?: APIChatEmbedImage;
    author?: APIChatEmbedAuthor;
    fields?: APIChatEmbedField[];
};

export interface APIChatEmbedFooter {
    icon_url: string;
    text: string;
};

export interface APIChatEmbedThumbnail {
    url: string;
};

export interface APIChatEmbedImage {
    url: string;
};

export interface APIChatEmbedAuthor {
    name: string;
    url: string;
    icon_url: string;
};

export interface APIChatEmbedField {
    name: string;
    value: string;
    inline?: boolean;
};