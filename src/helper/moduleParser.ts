import { Module } from "../models/module";

const fs = require('fs');

export class ModuleParser{

    file;
    _fileString;
    moduleDecoration = "@Module";
    importString = "imports";
    _module: Module;

    constructor(file, moduleName){
        this.file = file;
        this._module = new Module(moduleName, file);
    }

    get module(){
        return this._module;
    }

    get fileString(){
        return this._fileString;
    }

     parseFileToString(){
         try{
            this._fileString = fs.readFileSync(this.file).toString();
            
         }catch(error){
            console.error("The file doesn't exist");
         }
    }

    hasModule(){
        return this._fileString.indexOf(this.moduleDecoration) > -1;
    }

    getImportArrayFromModule(){
        this.parseFileToString();

        if(!this.hasModule()){
            console.error("The file doesn't contain module");
            return;
        }

        const jsonModule: string = this._fileString.split(this.importString)[1];
        let importsString:string;

        if(jsonModule){
            importsString = jsonModule.substring( jsonModule.indexOf("[") + 1 , jsonModule.indexOf("]"));
        }else{
            return null;
        }

       return importsString;
    }

    getModulesFromFile(){
        const importString = this.getImportArrayFromModule();
        if(importString === null || importString === "" || importString === undefined){
            return [];
        }

        let modules = importString.split(",");

        let returnModules = [];
        modules.forEach(module => {
            module = this.removeSpaces(module);
            returnModules.push(module);
        });

        this.initMapOfModules(returnModules);

        return returnModules;
    }

    initMapOfModules(modules){
        const promise = new Promise((resolve, reject) => {
            modules.forEach(module => {
                if(module !==  ""){
                    console.log(module + " Itay");
                    this.getModulePath(module);
                }
            });

            resolve(true);
        });
        return promise;
    }

    removeSpaces(module){
        if(module.indexOf(" ") > -1){
            module = module.split(" ").join("");
        }

        if(module.indexOf("\n") > -1){
            module = module.split("\n").join("");
        }

        if(module.indexOf("\r") > -1){
            module = module.split("\r").join("");
        }

        return module;
    }

    getModulePath(module){
        let modulePath = this._fileString.split(module)[1];

        this._module.modulesChildren[module.toString()] = modulePath.split('"')[1].toString();
    }
}