#!/usr/bin/env node

/* depencencies */
const fs = require('fs');
const { question } = require('./questions');
const { createNewProject } = require('./commerce');

(async() => {
    /* arguments from cli */
    const argument = process.argv.slice(2);
    /* ycord */
    if (argument.length === 0) {
        /* create new ycord project */
        question().then(r => {
            createNewProject(r.name, r.version, r.prefix, r.token);
        });
    }
    /* ycord ccmd */
    if (argument[0]) {
        if (argument[0].toLowerCase() === "ccmd") {
            /* not yet done */
        }
        /* ycord cev */
        if (argument[0].toLowerCase() === "cev") {
            /* not yet done */
        }
    }
})()