"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require('inquirer');
class Inquirer {
    createQuestion(question) {
        return inquirer.prompt(question.getQuestion());
    }
}
exports.Inquirer = Inquirer;
//# sourceMappingURL=inquirer.js.map