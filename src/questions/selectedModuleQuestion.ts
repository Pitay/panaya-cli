import { IQuestion } from "./IQuestion";
import { ModuleParser } from "../helper/moduleParser";

export class SelectedModuleQuestion implements IQuestion{

    _allModules = [];
    _hasQuestion;
    _parseModule: ModuleParser;
    fingerPrintLocation = "C:\\Git\\pmain\\panayax\\projects\\as-web-site\\src\\main\\webapp\\app\\@fingerprint@\\common\\modules\\";

    constructor(filePath, moduleName){
        if(!filePath){
            filePath = this.fingerPrintLocation + "app-module.ts";
        }else{
            filePath = this.fingerPrintLocation + filePath + ".ts";
        }

        if(!moduleName){
            moduleName = "myApp";
        }

        this._parseModule = new ModuleParser(filePath, moduleName);

        this.initModules(moduleName);
    }

    initModules(moduleName){
        this._allModules = this._parseModule.getModulesFromFile();

        if(this._allModules !== null){
            this._allModules.push(moduleName);
            this._hasQuestion = true;
        }else{
            this._hasQuestion = false;
        }
    }

    get hasQuestion(){
        return this._hasQuestion;
    }

    getQuestion() {
        return {
              name: 'moduleName',
              type: 'list',
              message:"Select your module",
              choices: this._allModules
            }

    }

    getModule(){
        return this._parseModule.module;
    }

}