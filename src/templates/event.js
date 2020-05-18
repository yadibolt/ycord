async function eventTemplateCall(eventName) {
    switch (eventName) {
        case "channelCreate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate */
module.exports = class channelCreateEvent extends PropEvent {
    constructor() {
        super('channelCreate');
    }
    /* Emitted whenever a channel is created. */
    async run(client, channel) {
        console.log('channelCreate> event emitted');
    }
}`;
        case "channelDelete":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelDelete */
module.exports = class channelDeleteEvent extends PropEvent {
    constructor() {
        super('channelDelete');
    }
    /* Emitted whenever a channel is deleted. */
    async run(client, channel) {
        console.log('channelDelete> event emitted');
    }
}`;
        case "channelPinsUpdate":
            return `const PropEvent = require('../../structure/PropEvent');
        /* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelPinsUpdate */
module.exports = class channelPinsUpdateEvent extends PropEvent {
    constructor() {
        super('channelPinsUpdate');
    }
    /* Emitted whenever the pins of a channel are updated.
    Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself. */
    async run(client, channel, time) {
        console.log('channelPinsUpdate> event emitted');
    }
}`;
        case "channelUpdate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelUpdate */
module.exports = class channelUpdateEvent extends PropEvent {
    constructor() {
        super('channelUpdate');
    }
    /* Emitted whenever a channel is updated - e.g. name change, topic change, channel type change. */
    async run(client, oldChannel, newChannel) {
        console.log('channelUpdate> event emitted');
    }
}`;
        case "debug":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-debug */
module.exports = class debugEvent extends PropEvent {
    constructor() {
        super('debug');
    }
    /* Emitted for general debugging information. */
    async run(client, info) {
        console.log('debug> event emitted');
    }
}`;
        case "emojiCreate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-emojiCreate */
module.exports = class emojiCreateEvent extends PropEvent {
    constructor() {
        super('emojiCreate');
    }
    /* Emitted whenever a custom emoji is created in a guild. */
    async run(client, emoji) {
        console.log('emojiCreate> event emitted');
    }
}`;
        case "emojiDelete":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-emojiDelete */
module.exports = class emojiDeleteEvent extends PropEvent {
    constructor() {
        super('emojiDelete');
    }
    /* Emitted whenever a custom emoji is deleted in a guild. */
    async run(client, emoji) {
        console.log('emojiDelete> event emitted');
    }
}`;
        case "emojiUpdate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-emojiUpdate */
module.exports = class emojiUpdateEvent extends PropEvent {
    constructor() {
        super('emojiUpdate');
    }
    /* Emitted whenever a custom emoji is updated in a guild. */
    async run(client, oldEmoji, newEmoji) {
        console.log('emojiUpdate> event emitted');
    }
}`;
        case "error":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-error */
module.exports = class errorEvent extends PropEvent {
    constructor() {
        super('error');
    }
    /* Emitted when the client encounters an error. */
    async run(client, error) {
        console.log('error> event emitted');
    }
}`;
        case "guildBanAdd":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildBanAdd */
module.exports = class guildBanAddEvent extends PropEvent {
    constructor() {
        super('guildBanAdd');
    }
    /* Emitted whenever a member is banned from a guild. */
    async run(client, guild, user) {
        console.log('guildBanAdd> event emitted');
    }
}`;
        case "guildBanRemove":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildBanRemove */
module.exports = class guildBanRemoveEvent extends PropEvent {
    constructor() {
        super('guildBanRemove');
    }
    /* Emitted whenever a member is unbanned from a guild. */
    async run(client, guild, user) {
        console.log('guildBanRemove> event emitted');
    }
}`;
        case "guildCreate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate */
module.exports = class guildCreateEvent extends PropEvent {
    constructor() {
        super('guildCreate');
    }
    /* Emitted whenever the client joins a guild. */
    async run(client, guild) {
        console.log('guildCreate> event emitted');
    }
}`;
        case "guildDelete":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildRemove */
module.exports = class guildRemoveEvent extends PropEvent {
    constructor() {
        super('guildRemove');
    }
    /* Emitted whenever a guild kicks the client or the guild is deleted/left. */
    async run(client, guild) {
        console.log('guildRemove> event emitted');
    }
}`;
        case "guildIntegrationsUpdate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildIntegrationsUpdate */
module.exports = class guildIntegrationsUpdateEvent extends PropEvent {
    constructor() {
        super('guildIntegrationsUpdate');
    }
    /* Emitted whenever a guild integration is updated */
    async run(client, guild) {
        console.log('guildIntegrationsUpdate> event emitted');
    }
}`;
        case "guildMemberAdd":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd */
module.exports = class guildMemberAddEvent extends PropEvent {
    constructor() {
        super('guildMemberAdd');
    }
    /* Emitted whenever a user joins a guild. */
    async run(client, member) {
        console.log('guildMemberAdd> event emitted');
    }
}`;
        case "guildMemberRemove":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove */
module.exports = class guildMemberRemoveEvent extends PropEvent {
    constructor() {
        super('guildMemberRemove');
    }
    /* Emitted whenever a member leaves a guild, or is kicked. */
    async run(client, member) {
        console.log('guildMemberRemove> event emitted');
    }
}`;
        case "guildMembersChunk":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMembersChunk */
module.exports = class guildMembersChunkEvent extends PropEvent {
    constructor() {
        super('guildMembersChunk');
    }
    /* Emitted whenever a chunk of guild members is received (all members come from the same guild). */
    async run(client, members, guild) {
        console.log('guildMembersChunk> event emitted');
    }
}`;
        case "guildMemberSpeaking":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberSpeaking */
module.exports = class guildMemberSpeakingEvent extends PropEvent {
    constructor() {
        super('guildMemberSpeaking');
    }
    /* Emitted once a guild member changes speaking state. */
    async run(client, member, speaking) {
        console.log('guildMemberSpeaking> event emitted');
    }
}`;
        case "guildMemberUpdate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberUpdate */
module.exports = class guildMemberUpdateEvent extends PropEvent {
    constructor() {
        super('guildMemberUpdate');
    }
    /* Emitted whenever a guild member changes - i.e. new role, removed role, nickname. */
    async run(client, oldMember, newMember) {
        console.log('guildMemberUpdate> event emitted');
    }
}`;
        case "guildUnavailable":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildUnavailable */
module.exports = class guildUnavailableEvent extends PropEvent {
    constructor() {
        super('guildUnavailable');
    }
    /* Emitted whenever a guild becomes unavailable, likely due to a server outage. */
    async run(client, guild) {
        console.log('guildUnavailable> event emitted');
    }
}`;
        case "guildUpdate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildUpdate */
module.exports = class guildUpdateEvent extends PropEvent {
    constructor() {
        super('guildUpdate');
    }
    /* Emitted whenever a guild is updated - e.g. name change. */
    async run(client, oldGuild, newGuild) {
        console.log('guildUpdate> event emitted');
    }
}`;
        case "invalidated":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-invalidated */
module.exports = class invalidatedEvent extends PropEvent {
    constructor() {
        super('invalidated');
    }
    /* Emitted when the client's session becomes invalidated.
    You are expected to handle closing the process gracefully and preventing a boot loop if you are listening to this event. */
    async run(client) {
        console.log('invalidated> event emitted');
    }
}`;
        case "inviteCreate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-inviteCreate */
module.exports = class inviteCreateEvent extends PropEvent {
    constructor() {
        super('inviteCreate');
    }
    /* Emitted when an invite is created. */
    async run(client, invite) {
        console.log('inviteCreate> event emitted');
    }
}`;
        case "inviteDelete":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-inviteDelete */
module.exports = class inviteDeleteEvent extends PropEvent {
    constructor() {
        super('inviteDelete');
    }
    /* Emitted when an invite is deleted. */
    async run(client, invite) {
        console.log('inviteDelete> event emitted');
    }
}`;
        case "message":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message */
module.exports = class messageEvent extends PropEvent {
    constructor() {
        super('message');
    }
    async run(client, msg) {
        if (msg.author.bot) return;
        if (msg.channel.type === 'dm') return;
        if (!msg.content.startsWith(process.env.ClientPrefix)) return;
        let command_ = msg.content.substring(process.env.ClientPrefix.length).split(new RegExp(/\\s+/));
        let command_name = command_.shift().toLowerCase();
        let args = command_;
        if (client.commands.get(command_name)) {
                client.commands.get(command_name).run(client, msg, args);
        }
    }
}`;
        case "messageDelete":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageDelete */
module.exports = class messageDeleteEvent extends PropEvent {
    constructor() {
        super('messageDelete');
    }
    /* Emitted whenever a message is deleted. */
    async run(client, msg) {
        console.log('messageDelete> event emitted');
    }
}`;
        case "messageDeleteBulk":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageDeleteBulk */
module.exports = class messageDeleteBulkEvent extends PropEvent {
    constructor() {
        super('messageDeleteBulk');
    }
    /* Emitted whenever messages are deleted in bulk. */
    async run(client, msgs) {
        console.log('messageDeleteBulk> event emitted');
    }
}`;
        case "messageReactionAdd":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageReactionAdd */
module.exports = class messageReactionAddEvent extends PropEvent {
    constructor() {
        super('messageReactionAdd');
    }
    /* Emitted whenever a reaction is added to a cached message. */
    async run(client, msgReaction, user) {
        console.log('messageReactionAdd> event emitted');
    }
}`;
        case "messageReactionRemove":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageReactionRemove */
module.exports = class messageReactionRemoveEvent extends PropEvent {
    constructor() {
        super('messageReactionRemove');
    }
    /* Emitted whenever a reaction is removed from a cached message. */
    async run(client, msgReaction, user) {
        console.log('messageReactionRemove> event emitted');
    }
}`;
        case "messageReactionRemoveAll":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageReactionRemoveAll */
module.exports = class messageReactionRemoveAllEvent extends PropEvent {
    constructor() {
        super('messageReactionRemoveAll');
    }
    /* Emitted whenever all reactions are removed from a cached message. */
    async run(client, msg) {
        console.log('messageReactionRemoveAll> event emitted');
    }
}`;
        case "messageReactionRemoveEmoji":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageReactionRemoveEmoji */
module.exports = class messageReactionRemoveEmojiEvent extends PropEvent {
    constructor() {
        super('messageReactionRemoveEmoji');
    }
    /* Emitted when a bot removes an emoji reaction from a cached message. */
    async run(client, reaction) {
        console.log('messageReactionRemoveEmoji> event emitted');
    }
}`;
        case "messageUpdate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageUpdate */
module.exports = class messageUpdateEvent extends PropEvent {
    constructor() {
        super('messageUpdate');
    }
    /* Emitted whenever a message is updated - e.g. embed or content change. */
    async run(client, oldMsg, newMsg) {
        console.log('messageUpdate> event emitted');
    }
}`;
        case "presenceUpdate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-presenceUpdate */
module.exports = class presenceUpdateEvent extends PropEvent {
    constructor() {
        super('presenceUpdate');
    }
    /* Emitted whenever a guild member's presence (e.g. status, activity) is changed. */
    async run(client, oldPresence, newPresence) {
        console.log('presenceUpdate> event emitted');
    }
}`;
        case "rateLimit":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-rateLimit */
module.exports = class rateLimitEvent extends PropEvent {
    constructor() {
        super('rateLimit');
    }
    /* Emitted when the client hits a rate limit while making a request. */
    async run(client, rateLimitInfo) {
        console.log('rateLimit> event emitted');
    }
}`;
        case "roleCreate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-roleCreate */
module.exports = class roleCreateEvent extends PropEvent {
    constructor() {
        super('roleCreate');
    }
    /* Emitted whenever a role is created. */
    async run(client, role) {
        console.log('roleCreate> event emitted');
    }
}`;
        case "roleDelete":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-roleDelete */
module.exports = class roleDeleteEvent extends PropEvent {
    constructor() {
        super('roleDelete');
    }
    /* Emitted whenever a role is deleted. */
    async run(client, role) {
        console.log('roleDelete> event emitted');
    }
}`;
        case "shardDisconnect":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-shardDisconnect */
module.exports = class shardDisconnectEvent extends PropEvent {
    constructor() {
        super('shardDisconnect');
    }
    /* Emitted when a shard's WebSocket disconnects and will no longer reconnect. */
    async run(client, event, id) {
        console.log('shardDisconnect> event emitted');
    }
}`;
        case "shardError":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-shardError */
module.exports = class shardErrorEvent extends PropEvent {
    constructor() {
        super('shardError');
    }
    /* Emitted whenever a shard's WebSocket encounters a connection error. */
    async run(client, error, shardID) {
        console.log('shardError> event emitted');
    }
}`;
        case "shardReady":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-shardReady */
module.exports = class shardErrorEvent extends PropEvent {
    constructor() {
        super('shardReady');
    }
    /* Emitted when a shard turns ready. */
    async run(client, id, unavailableGuilds) {
        console.log('shardReady> event emitted');
    }
}`;
        case "shardReconnecting":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-shardReconnecting */
module.exports = class shardReconnectingEvent extends PropEvent {
    constructor() {
        super('shardReconnecting');
    }
    /* Emitted when a shard is attempting to reconnect or re-identify. */
    async run(client, id) {
        console.log('shardReconnecting> event emitted');
    }
}`;
        case "shardResume":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-shardResume */
module.exports = class shardResumeEvent extends PropEvent {
    constructor() {
        super('shardResume');
    }
    /* Emitted when a shard resumes successfully. */
    async run(client, id, replayedEvents) {
        console.log('shardResume> event emitted');
    }
}`;
        case "typingStart":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-typingStart */
module.exports = class typingStartEvent extends PropEvent {
    constructor() {
        super('typingStart');
    }
    /* Emitted whenever a user starts typing in a channel. */
    async run(client, channel, user) {
        console.log('typingStart> event emitted');
    }
}`;
        case "userUpdate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-userUpdate */
module.exports = class userUpdateEvent extends PropEvent {
    constructor() {
        super('userUpdate');
    }
    /* Emitted whenever a user's details (e.g. username) are changed. */
    async run(client, oldUser, newUser) {
        console.log('userUpdate> event emitted');
    }
}`;
        case "voiceStateUpdate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-voiceStateUpdate */
module.exports = class voiceStateUpdateEvent extends PropEvent {
    constructor() {
        super('voiceStateUpdate');
    }
    /* Emitted whenever a member changes voice state - e.g. joins/leaves a channel, mutes/unmutes. */
    async run(client, oldState, newState) {
        console.log('voiceStateUpdate> event emitted');
    }
}`;
        case "warn":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-warn */
module.exports = class warnEvent extends PropEvent {
    constructor() {
        super('warn');
    }
    /* Emitted for general warnings. */
    async run(client, info) {
        console.log('warn> event emitted');
    }
}`;
        case "webhookUpdate":
            return `const PropEvent = require('../../structure/PropEvent');
/* https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-webhookUpdate */
module.exports = class webhookUpdateEvent extends PropEvent {
    constructor() {
        super('webhookUpdate');
    }
    /* Emitted whenever a guild text channel has its webhooks changed. */
    async run(client, channel) {
        console.log('webhookUpdate> event emitted');
    }
}`;
    }
}

module.exports = { eventTemplateCall };