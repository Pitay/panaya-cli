"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Question {
    set Name(name) {
        this._name = name;
    }
    getQuestion() {
        return [{
                name: 'name',
                type: 'input',
                message: "What is your " + this._type + " name",
                validate: function (text) {
                    if (text.length < 2) {
                        return 'Must be at least 2 characters.';
                    }
                    return true;
                }
            }];
    }
    getModuleNameQuestion() {
        return {
            name: 'name',
            type: 'list',
            message: "choose your module",
            validate: function (text) {
                if (text.length < 2) {
                    return 'Must be at least 2 characters.';
                }
                return true;
            }
        };
    }
}
exports.Question = Question;
//# sourceMappingURL=question.js.map