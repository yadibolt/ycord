function getDotEnv(name, prefix, token) {
    return `ClientToken=${token}
ClientPrefix=${prefix}
ClientName=${name}`;
}

function getClientJS() {
    return `/* Dependencies */
require('dotenv').config();
const { Client } = require('discord.js');
/* New Discord.js client*/
const client = new Client();
/* Command and event register */
const { registerCommand, registerEvent } = require('./util/register');
/* Emitted when the client becomes ready to start working. */
client.once('ready', async() => {
    console.log(client.user.tag + " is online.");
});
(async() => {
    /* Client login */
    await client.login(process.env.ClientToken);
    /* Maps */
    client.commands = new Map();
    client.events = new Map();
    /* Register */
    await registerEvent(client, './event/discord');
    await registerCommand(client, '../command');
})()`;
}

function getRegisterJS() {
    return `/* Dependencies */
const path = require('path');
const fs = require('fs').promises;
/* Props */
const PropCommand = require('./structure/PropCommand');
const PropEvent = require('./structure/PropEvent');
/* Register all commands */
async function registerCommand(client, dir = '') {
    const filePath = path.join(__dirname, dir);
    console.log(filePath);
    const files = await fs.readdir(filePath);
    for (const file of files) {
        const stat = await fs.lstat(path.join(filePath, file));
        if (stat.isDirectory()) registerCommand(client, path.join(dir, file));
        if (file.endsWith('.js')) {
            const Command = require(path.join(filePath, file));
            if (Command.prototype instanceof PropCommand) {
                const cmd = new Command();
                client.commands.set(cmd.name, cmd);
            }
        }
    }
}
/* Register all events */
async function registerEvent(client, dir = '') {
    const filePath = path.join(__dirname, dir);
    console.log(filePath);
    const files = await fs.readdir(filePath);
    for (const file of files) {
        const stat = await fs.lstat(path.join(filePath, file));
        if (stat.isDirectory()) registerEvent(client, path.join(dir, file));
        if (file.endsWith('.js')) {
            const Event = require(path.join(filePath, file));
            if (Event.prototype instanceof PropEvent) {
                const event = new Event();
                client.on(event.name, event.run.bind(null, client));
            }
        }
    }
}
module.exports = { registerCommand, registerEvent };`;
}

function getMessageEventDiscordJS() {
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
}

function getPropEvent() {
    return `module.exports = class PropEvent {
    constructor(_name) {
        this.name = _name;
    }
}`;
}

function getPropCommand() {
    return `module.exports = class PropCommand {
    constructor(_name, _category, _aliases) {
        this.name = _name;
        this.category = _category;
        this.aliases = this.aliases;
    }
}`;
}

function getPingCommand() {
    return `const PropCommand = require('../../util/structure/PropCommand');
    
module.exports = class PingCommand extends PropCommand {
    constructor() {
        super('ping', 'test', []);
    }
    async run(client, msg, args) {
        msg.channel.send("Pong!");
    }
}`;
}

function getycord() {
    return `{
    "name": "ycord",
    "author": "yadibolt"
}`;
}

module.exports = { getClientJS, getRegisterJS, getDotEnv, getMessageEventDiscordJS, getPropEvent, getPropCommand, getPingCommand, getycord };