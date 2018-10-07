"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question_1 = require("./question");
class ComponentQuestion extends question_1.Question {
    constructor(module) {
        super();
        this._type = "Component";
        this._module = module;
    }
    getQuestion() {
        var questions = super.getQuestion();
        questions.push(this.getModuleNameQuestion());
        return questions;
    }
}
exports.ComponentQuestion = ComponentQuestion;
//# sourceMappingURL=componentQuestion.js.map