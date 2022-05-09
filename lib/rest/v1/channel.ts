import { APIServerChannelTypes, APIChatEmbed } from "../../payloads";

export interface RestPostAPIChannelJSONBody {
    name?: string;
    topic?: string;
    type?: APIServerChannelTypes;
    serverId: string;
    groupId?: string;
    categoryId?: string;
};

export interface RestGetAPIChannelMessagesQuery {
    before?: string;
    after?: string;
    limit?: number;
    includePrivate?: boolean;
};

export interface RestPutAPIChannelMessageJSONBody {
    content: string;
    embeds?: APIChatEmbed[];
};

export interface RestPostAPIChannelMessageJSONBody {
    isPrivate?: boolean;
    isSilent?: boolean;
    replyMessageIds: string[];
    content: string;
    embeds: APIChatEmbed[];
};