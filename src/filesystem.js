/* depencencies */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const { getClientJS, getRegisterJS, getDotEnv, getMessageEventDiscordJS, getPropEvent, getPropCommand, getPingCommand, getycord } = require('./templates/templates');
const { getNewCommand } = require('./templates/command');
const { eventTemplateCall } = require('./templates/event');

async function createDir(fpath, dirname) {
    if (!fs.existsSync(`${fpath}${dirname}`)) {
        fs.mkdirSync(`${fpath}${dirname}`);
        return;
    }
}

async function generateProject(fpath, name, prefix, token) {
    try {
        await fs.writeFileSync(path.join(`${fpath}`, `.env`), getDotEnv(name, prefix, token));
        await createDir(`${fpath}/`, `src`);
        await fs.writeFileSync(path.join(`${fpath}`, 'src', 'client.js'), getClientJS());
        await createDir(path.join(`${fpath}`, `src/`), `util`);
        await fs.writeFileSync(path.join(`${fpath}`, `src`, `util`, 'register.js'), getRegisterJS());
        await createDir(path.join(`${fpath}`, `src`, `util/`), `event`);
        await createDir(path.join(`${fpath}`, `src`, `util/`), `structure`);
        await createDir(path.join(`${fpath}`, `src`, `util`, `event/`), `discord`);
        await fs.writeFileSync(path.join(`${fpath}`, `src`, `util`, `event`, `discord`, 'message.js'), getMessageEventDiscordJS());
        await fs.writeFileSync(path.join(`${fpath}`, `src`, `util`, `structure`, 'PropEvent.js'), getPropEvent());
        await fs.writeFileSync(path.join(`${fpath}`, `src`, `util`, `structure`, 'PropCommand.js'), getPropCommand());
        await createDir(path.join(`${fpath}`, `src/`), 'command');
        await createDir(path.join(`${fpath}`, `src`, `command/`), 'test');
        await fs.writeFileSync(path.join(`${fpath}`, `src`, `command`, `test`, 'ping.js'), getPingCommand());
    } catch (e) {
        console.log(e);
    }
}

async function editPackageJSON(fpath) {
    await fs.readFile(path.join(`${fpath}/`, 'package.json'), async(err, data) => {
        const parse = await JSON.parse(data);
        parse.main = "src/client.js";
        return fs.writeFileSync(path.join(`${fpath}`, 'package.json'), JSON.stringify(parse, null, 2));
    });
    return;
}

async function createycordFile(fpath) {
    await fs.writeFileSync(path.join(`${fpath}/`, 'ycord.json'), getycord());
}

async function checkycordFile(fpath) {
    const ext = await fs.existsSync(path.join(fpath, 'ycord.json'));
    if (ext) return true;
    else return false;
}
async function checkFolder(fpath, end) {
    const ext = await fs.existsSync(path.join(fpath, end));
    if (ext) return true;
    else return false;
}

async function createEventFinal(eventName, fpath) {
    eventTemplateCall(eventName).then(async(obj) => {
        await fs.writeFileSync(fpath, obj);
    })
}

async function createCommandFinal(n, c, fpath) {
    let commandtemplate = getNewCommand(n, c);
    await fs.writeFileSync(fpath, commandtemplate);
}

async function logThis(args, newline = false) {
    if (newline) {
        return (console.log("\n" + chalk.bgHex("#fcf27f").bold.black(`[ Ycord ]`) + chalk.hex("#fcf27f")(' ~ ') + args));
    } else
        return (console.log(chalk.bgHex("#fcf27f").bold.black(`[ Ycord ]`) + chalk.hex("#fcf27f")(' ~ ') + args));
}

module.exports = { createDir, generateProject, editPackageJSON, createycordFile, checkycordFile, checkFolder, createEventFinal, createCommandFinal, logThis };