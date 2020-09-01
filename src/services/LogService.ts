//@ts-ignore
import util from 'util';

export default class LogService {

    /**
     * Log service class constructor. Changes console.log/info/warn/error functions to have a timestamp and log to a file.
     */
    constructor() {
        var fs = require('fs');
        const logFileTitle = `../logs/debug_${new Date(Date.now()).toISOString().replace(/(\:|\.)/g, '-')}.log`;
        fs.closeSync(fs.openSync(logFileTitle, 'w'));
        global.Log = require('simple-node-logger').createSimpleFileLogger({
            logFilePath: logFileTitle,
            timestampFormat: ''
        });
        this.ConsoleDOMFunctions();
    }

    /**
     * Mounts custom console functions
     */
    private ConsoleDOMFunctions() {
        console.log = function () {
            this._stdout.write(`\x1b[36m Log:   [${new Date().toISOString()}] \x1b[0m${util.format.apply(this, arguments)}\n`);
            global.Log.info(util.format.apply(this, arguments));
        };
        console.info = function () {
            this._stdout.write(`\x1b[32m Info:  [${new Date().toISOString()}] \x1b[0m${util.format.apply(this, arguments)}\n`);
            global.Log.info(util.format.apply(this, arguments));
        };
        console.warn = function () {
            this._stdout.write(`\x1b[33m Warn:  [${new Date().toISOString()}] \x1b[0m${util.format.apply(this, arguments)}\n`);
            global.Log.warn(util.format.apply(this, arguments));
        };
        console.error = function () {
            this._stdout.write(`\x1b[31m Error: [${new Date().toISOString()}] \x1b[0m${util.format.apply(this, arguments)}\n`);
            global.Log.error(util.format.apply(this, arguments));
        };
    }
}