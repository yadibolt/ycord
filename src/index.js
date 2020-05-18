#!/usr/bin/env node

/* depencencies */
const { question } = require('./questions');
const { createNewProject, createNewEvent, createNewCommand } = require('./commerce');

(async() => {
    /* arguments from cli */
    const argument = process.argv.slice(2);
    /* ycord */
    if (argument.length === 0) {
        /* create new ycord project */
        question().then(r => {
            createNewProject(r.name, r.version, r.prefix, r.token);
        });
        return;
    }
    if (argument[0].toLowerCase() === "ge" && argument[1]) {
        createNewEvent(argument);
        return;
    }
    if (argument[0].toLowerCase() === "gc" && argument[1] && argument[2]) {
        createNewCommand(argument);
        return;
    }
    return console.error('rip');
})()