const { execSync } = require('child_process');

async function npmInit(path) {
    return execSync('npm init -y', {
        cwd: path,
    });
}

async function installDiscordjs(path, version) {
    switch (version.toLowerCase()) {
        case "v12":
            return execSync('npm install discord.js@12 --save', {
                cwd: path,
                stdio: "ignore"
            });
        case "latest":
            return execSync('npm install discord.js@latest --save', {
                cwd: path,
                stdio: "ignore"
            });
        default:
            console.log('[ycord] Could not install discord.js dependency');
    }
}

async function installDotEnv(path) {
    return execSync('npm install dotenv --save', {
        cwd: path,
        stdio: "ignore"
    });
}

module.exports = { npmInit, installDiscordjs, installDotEnv };