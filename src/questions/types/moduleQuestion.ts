import { Question } from "./question";

export class ModuleQuestion extends Question{
    constructor(){
        super();
        this._type = "Module";
    }

    getQuestion(){
        var questions = super.getQuestion();
        
        return questions;
    }
}