const { createDir, generateProject, editPackageJSON, createycordFile } = require('./filesystem');
const { npmInit, installDiscordjs, installDotEnv } = require('./nde');

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
}

module.exports = { createNewProject };