import { Question } from "./question";

export class ServiceQuestion extends Question{
    constructor(){
        super();
        this._type = "Service";
    }

    getQuestion(){
        var questions = super.getQuestion();
        return questions;
    }
}