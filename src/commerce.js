const { createDir, generateProject, editPackageJSON, createycordFile, checkycordFile, checkFolder, createEventFinal, createCommandFinal } = require('./filesystem');
const { npmInit, installDiscordjs, installDotEnv } = require('./nde');
const { eventEmitters } = require('./constants');

async function createNewProject(name, version, prefix, token, path) {
    /* create main directory */
    await createDir(`./`, `${name}`);
    /* npm init the dir */
    await npmInit(`./${name}`);
    /* install dependencies - discord.js */
    await installDiscordjs(`./${name}`, version);
    /* install dependencies - dotenv */
    await installDotEnv(`./${name}`);
    /* generateProject */
    await generateProject(`./${name}`, name, prefix, token);
    /* editPackageJSON */
    await editPackageJSON(`./${name}`);
    /* createycordFile */
    await createycordFile(`./${name}`);
    return;
}

async function createNewEvent(args) {
    const check = await checkycordFile(process.cwd());
    if (!check) return console.log('does not exist');
    let findEvent = await eventEmitters.find(ev => ev === args[1]);
    if (findEvent === undefined) return console.log('No event found');
    let sourceFolder = await checkFolder(process.cwd(), 'src');
    if (!sourceFolder) return console.log('no srcfol');
    let utilFolder = await checkFolder(process.cwd(), 'src/util');
    if (!utilFolder) return console.log('no utilfol');
    let eventFolder = await checkFolder(process.cwd(), 'src/util/event');
    if (!eventFolder) return console.log('no eventfol');
    let discordFolder = await checkFolder(process.cwd(), 'src/util/event/discord');
    if (!discordFolder) return console.log('no discordfol');
    let endpointFile = await checkFolder(process.cwd(), `src/util/event/discord/${args[1]}.js`);
    if (endpointFile) return console.log(`exts ${args[1]} event`);
    createEventFinal(args[1], `${process.cwd()}/src/util/event/discord/${args[1]}.js`);
    return;
}

async function createNewCommand(args) {
    const check = await checkycordFile(process.cwd());
    if (!check) return console.log('does not exist');
    let sourceFolder = await checkFolder(process.cwd(), 'src');
    if (!sourceFolder) return console.log('no srcfol');
    let commandFolder = await checkFolder(process.cwd(), 'src/command');
    if (!commandFolder) return console.log('no commandfol');
    let inputFolder = await checkFolder(process.cwd(), `src/command/${args[2]}`);
    if (!inputFolder) {
        console.log(`no ${args[2]}fol\nCreating one...`);
        await createDir(`${process.cwd()}/src/command/`, `${args[2]}`);
        createCommandFinal(args[1], args[2], `${process.cwd()}/src/command/${args[2]}/${args[1]}.js`);
    } else {
        let fileCheck = await checkFolder(process.cwd(), `src/command/${args[2]}/${args[1]}.js`);
        if (fileCheck) return console.log('command exists');
        createCommandFinal(args[1], args[2], `${process.cwd()}/src/command/${args[2]}/${args[1]}.js`);
    }
    return;
}

module.exports = { createNewProject, createNewEvent, createNewCommand };