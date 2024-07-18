const fs = require('fs');
const path = require('path');

class Interpreter {
    constructor(client) {
        this.client = client;
        this.commandModules = {};

        const funcDir = path.join(__dirname, 'func');
        const moduleFiles = fs.readdirSync(funcDir).filter(file => file.endsWith('.js'));

        moduleFiles.forEach(file => {
            const moduleName = path.parse(file).name;
            this.commandModules[moduleName] = require(path.join(funcDir, file));
        });
    }

    parse(response, msg) {
        return response.replace(/\#(\w+)\[(.*?)\]/g, (match, command, args) => {
            if (this.commandModules.hasOwnProperty(command)) {
                const argsArray = args.split(';');
                return this.commandModules[command].handle(msg, argsArray, this.client);
            } else {
                return match;
            }
        });
    }
}

module.exports = {
    Interpreter
};
