/* dependencies */
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

async function question() {
    let project = inquirer
        .prompt([{
            type: 'text',
            name: 'pn',
            message: "What is the name of your project?",
            default: path.basename(process.cwd()),
            validate: async function(value) {
                if (fs.existsSync(`${process.cwd()}/${value}`)) {
                    console.log(`\n[ycord] Unexpected error while trying to create '${value}' directory.\n[ycord] DIRECTORY ALREADY EXISTS.\n[ycord] Please provide new one`);
                    return false;
                } else return true;
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
                else { console.log('\nerr: 59chars'); return false; }
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