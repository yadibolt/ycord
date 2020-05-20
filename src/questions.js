/* dependencies */
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const { logThis } = require('./filesystem');

async function question() {
    let project = inquirer
        .prompt([{
            type: 'text',
            name: 'pn',
            message: "What is the name of your project?",
            default: path.basename(process.cwd()),
            validate: async function(value) {
                let letters = /^[A-Za-z]+$/;
                if (!(value.match(letters))) {
                    logThis(chalk.bold.red(`Unexpected error while trying to create '${value}' directory.`), true);
                    logThis(chalk.bold.red(`DIRECTORY NAME CAN CONTAIN ONLY LETTERS.`));
                    return false;
                } else {
                    if (fs.existsSync(`${process.cwd()}/${value}`)) {
                        logThis(chalk.bold.red(`Unexpected error while trying to create '${value}' directory.`), true);
                        logThis(chalk.bold.red(`DIRECTORY ALREADY EXISTS.`));
                        return false;
                    } else return true;
                }
            }
        }, {
            type: 'list',
            name: 'djsv',
            message: "What version of Discord.js do you want to use?",
            choices: ["v12", "latest"]
        }, {
            type: 'text',
            name: 'cp',
            message: "Please, provide your bot's prefix",
            validate: function(value) {
                if (value.length <= 0) return false;
                else return true;
            }
        }, {
            type: 'password',
            name: 'ct',
            message: "Please, provide your bot's token",
            validate: function(value) {
                if (value.length === 59) return true;
                else {
                    logThis(chalk.bold.red(`Unexpected error while trying to save token data.`), true);
                    logThis(chalk.bold.red(`TOKEN HAS TO BE 59 CHARACTERS LONG`));
                    return false;
                }
            }
        }]).then(answers => {
            return {
                name: answers.pn,
                version: answers.djsv,
                prefix: answers.cp,
                token: answers.ct
            };
        }).catch(e => {
            console.log(e);
        });
    return project;
}

module.exports = { question };