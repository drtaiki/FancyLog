/**
 * @file A logger for fancy logging.
 * @author Dr. Taiki
 * @author lordjbs
 * @author Capuccinos
 */
const chalk = require('chalk');

class Logger {
    
    /**
     * Information logging
     * @param {String} message - The message to print out
     * @static
     */
    static info (message) {
        return console.log(chalk.bgBlue('[INFO]'), chalk.blue(message));
    }

    /**
     * Information logging
     * @param {String} message - The message to print out
     * @static
     */
    static warn (message) {
        return console.log(chalk.bgYellow('[WARNING]'), chalk.yellow(message));
    }

    /**
     * Information logging
     * @param {String} message - The message to print out
     * @static
     */
    static error (message) {
        return console.log(chalk.bgRed('[ERROR]'), chalk.red(message));
    }
    
}

module.exports = Logger;