function getNewCommand(name, category) {
    return `const PropCommand = require('../../util/structure/PropCommand');
    
module.exports = class ${name}Command extends PropCommand {
    constructor() {
        super('${name}', '${category}', []);
    }
    async run(client, msg, args) {
        msg.channel.send("${name} command initiated!");
    }
}`;
}

module.exports = { getNewCommand };