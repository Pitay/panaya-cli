"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question_1 = require("./question");
class ServiceQuestion extends question_1.Question {
    constructor() {
        super();
        this._type = "Service";
    }
    getQuestion() {
        var questions = super.getQuestion();
        return questions;
    }
}
exports.ServiceQuestion = ServiceQuestion;
//# sourceMappingURL=serviceCreator.js.map