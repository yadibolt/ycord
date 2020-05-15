const pckg = require('../package.json');
const info = {
    "author": `${pckg.author}`,
    "name": `${pckg.name}`,
    "version": `${pckg.version}`
}

module.exports = { info };