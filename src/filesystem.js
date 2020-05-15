/* depencencies */
const fs = require('fs');
const path = require('path');

const { getClientJS, getRegisterJS, getDotEnv, getMessageEventDiscordJS, getPropEvent, getPropCommand, getPingCommand, getycord } = require('./templates/templates');

async function createDir(fpath, dirname) {
    if (!fs.existsSync(`${fpath}${dirname}`)) {
        fs.mkdirSync(`${fpath}${dirname}`);
        return console.log(`[ycord] Created '${dirname}' directory.`);
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

module.exports = { createDir, generateProject, editPackageJSON, createycordFile };