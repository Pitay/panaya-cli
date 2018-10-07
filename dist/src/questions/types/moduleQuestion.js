"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question_1 = require("./question");
class ModuleQuestion extends question_1.Question {
    constructor() {
        super();
        this._type = "Module";
    }
    getQuestion() {
        var questions = super.getQuestion();
        return questions;
    }
}
exports.ModuleQuestion = ModuleQuestion;
//# sourceMappingURL=moduleQuestion.js.map