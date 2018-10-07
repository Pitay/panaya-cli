import { Question } from "./question";
import { Module } from "../../models/module";

export class ComponentQuestion extends Question{
    _module: Module;

    constructor(module){
        super();
        this._type = "Component";
        this._module = module;
    }

    getQuestion(){
        var questions = super.getQuestion();
        questions.push(this.getModuleNameQuestion());
        
        return questions;
    }

}