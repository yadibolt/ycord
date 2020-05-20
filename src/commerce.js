const chalk = require('chalk');
const { createDir, generateProject, editPackageJSON, createycordFile, checkycordFile, checkFolder, createEventFinal, createCommandFinal, logThis } = require('./filesystem');
const { npmInit, installDiscordjs, installDotEnv } = require('./nde');
const { eventEmitters } = require('./constants');

async function createNewProject(name, version, prefix, token) {
    /* create main directory */
    logThis(chalk.bold.gray(`Creating main project directory ...`));
    await createDir(`./`, `${name}`);
    logThis(chalk.bold.gray(`${name} - main directory created.`));
    /* npm init the dir */
    logThis(chalk.bold.gray(`Initializing ${name} project directory ...`));
    await npmInit(`./${name}`);
    logThis(chalk.bold.hex("90ee90")(`Successfully initialized ${name} project directory.`));
    /* install dependencies - discord.js */
    logThis(chalk.bold.gray(`Installing dependencies:`));
    logThis(chalk.bold.gray(`discord.js v@${version} ...`));
    await installDiscordjs(`./${name}`, version);
    logThis(chalk.bold.hex("90ee90")(`Done.`));
    /* install dependencies - dotenv */
    logThis(chalk.bold.gray(`dotenv ...`));
    await installDotEnv(`./${name}`);
    logThis(chalk.bold.hex("90ee90")(`Done. All dependencies installed.`));
    /* generateProject */
    logThis(chalk.bold.gray(`Generating missing folders and files ...`));
    await generateProject(`./${name}`, name, prefix, token);
    logThis(chalk.bold.hex("90ee90")(`Done.`));
    /* editPackageJSON */
    logThis(chalk.bold.gray(`Finishing ...`));
    await editPackageJSON(`./${name}`);
    /* createycordFile */
    await createycordFile(`./${name}`);
    logThis(chalk.bold.hex("90ee90")(`Project successfully generated!`));
    return;
}

async function createNewEvent(args) {
    const check = await checkycordFile(process.cwd());
    if (!check) {
        logThis(chalk.bold.red(`Unexpected error while trying to run ycord ${args[0]} ${args[1]}`));
        logThis(chalk.bold.red(`ycord.json DOES NOT EXISTS`));
        return;
    }
    let findEvent = await eventEmitters.find(ev => ev === args[1]);
    if (findEvent === undefined) {
        logThis(chalk.bold.red(`Unexpected error while trying to run ycord ${args[0]} ${args[1]}`));
        logThis(chalk.bold.red(`COULD NOT FIND EVENT`));
        return;
    }
    let sourceFolder = await checkFolder(process.cwd(), 'src');
    if (!sourceFolder) {
        logThis(chalk.bold.red(`Unexpected error while trying to run ycord ${args[0]} ${args[1]}`));
        logThis(chalk.bold.red(`COULD NOT FIND src DIRECTORY`));
        return;
    }
    let utilFolder = await checkFolder(process.cwd(), 'src/util');
    if (!utilFolder) {
        logThis(chalk.bold.red(`Unexpected error while trying to run ycord ${args[0]} ${args[1]}`));
        logThis(chalk.bold.red(`COULD NOT FIND src/util DIRECTORY`));
        return;
    }
    let eventFolder = await checkFolder(process.cwd(), 'src/util/event');
    if (!eventFolder) {
        logThis(chalk.bold.red(`Unexpected error while trying to run ycord ${args[0]} ${args[1]}`));
        logThis(chalk.bold.red(`COULD NOT FIND src/util/event DIRECTORY`));
        return;
    }
    let discordFolder = await checkFolder(process.cwd(), 'src/util/event/discord');
    if (!discordFolder) {
        logThis(chalk.bold.red(`Unexpected error while trying to run ycord ${args[0]} ${args[1]}`));
        logThis(chalk.bold.red(`COULD NOT FIND src/util/event/discord DIRECTORY`));
        return;
    }
    let endpointFile = await checkFolder(process.cwd(), `src/util/event/discord/${args[1]}.js`);
    if (endpointFile) {
        logThis(chalk.bold.red(`Unexpected error while trying to run ycord ${args[0]} ${args[1]}`));
        logThis(chalk.bold.red(`${args[1]}.js EVENT ALREADY EXISTS`));
        return;
    }
    logThis(chalk.bold.gray(`Directories found. Creating event ...`));
    await createEventFinal(args[1], `${process.cwd()}/src/util/event/discord/${args[1]}.js`);
    logThis(chalk.bold.hex("90ee90")(`Successfully created ${args[1]} event.`));
    return;
}

async function createNewCommand(args) {
    const check = await checkycordFile(process.cwd());
    if (!check) {
        logThis(chalk.bold.red(`Unexpected error while trying to run ycord ${args[0]} ${args[1]} ${args[2]}`));
        logThis(chalk.bold.red(`ycord.json DOES NOT EXISTS`));
        return;
    }
    let sourceFolder = await checkFolder(process.cwd(), 'src');
    if (!sourceFolder) {
        logThis(chalk.bold.red(`Unexpected error while trying to run ycord ${args[0]} ${args[1]} ${args[2]}`));
        logThis(chalk.bold.red(`COULD NOT FIND src DIRECTORY`));
        return;
    }
    let commandFolder = await checkFolder(process.cwd(), 'src/command');
    if (!commandFolder) {
        logThis(chalk.bold.red(`Unexpected error while trying to run ycord ${args[0]} ${args[1]} ${args[2]}`));
        logThis(chalk.bold.red(`COULD NOT FIND src/command DIRECTORY`));
        return;
    }
    let inputFolder = await checkFolder(process.cwd(), `src/command/${args[2]}`);
    if (!inputFolder) {
        logThis(chalk.bold.gray(`No ${args[2]} directory found. Creating one ...`));
        await createDir(`${process.cwd()}/src/command/`, `${args[2]}`);
        logThis(chalk.bold.hex("90ee90")(`Successfully created ${args[2]} command directory.`));
        logThis(chalk.bold.gray(`Creating command ...`));
        await createCommandFinal(args[1], args[2], `${process.cwd()}/src/command/${args[2]}/${args[1]}.js`);
        logThis(chalk.bold.hex("90ee90")(`Successfully created ${args[2]} command.`));
    } else {
        let fileCheck = await checkFolder(process.cwd(), `src/command/${args[2]}/${args[1]}.js`);
        if (fileCheck) {
            logThis(chalk.bold.red(`Unexpected error while trying to run ycord ${args[0]} ${args[1]} ${args[2]}`));
            logThis(chalk.bold.red(`COMMAND ALREADY EXISTS`));
            return;
        }
        logThis(chalk.bold.gray(`Directories found. Creating command ...`));
        await createCommandFinal(args[1], args[2], `${process.cwd()}/src/command/${args[2]}/${args[1]}.js`);
        logThis(chalk.bold.hex("90ee90")(`Successfully created ${args[2]} command.`));
    }
    return;
}

async function runLSE() {
    let events = eventEmitters;
    for (let x = 0; x < events.length; x++) {
        logThis(chalk.bold.gray(`${events[x]}`));
    }
}

async function logErr(args) {
    logThis(chalk.bold.red(`Unexpected error while trying to run ${args[0]}`));
    logThis(chalk.bold.red(`>> ycord ${args[0]} << IS NOT A PART OF YCORD`));
}

module.exports = { createNewProject, createNewEvent, createNewCommand, runLSE, logErr };