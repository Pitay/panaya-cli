import { ICreator } from "./ICreator";
import { Module } from "../models/module";
const fs = require('fs');


export abstract class Creator implements ICreator{

    _module: Module;
    _type: String;
    _fileName: String;
    _path: String;
    _moduleString = "@Module";

    constructor(module, fileName){
        this._module = module;
        this._fileName = fileName;
    }

    create(){
        this.createNewElements();
        this.deleteComments();
        this.replaceNames();
        this.addFileToModule();
    }

    deleteComments(){

    }

    fileNameFirstLetterIsLower(){
        return this._fileName.charAt(0).toLowerCase() + this._fileName.slice(1)
    }

    fileNameFirstLetterIsUpper(){
        return this.firstLetterUpper(this._fileName)
    }

    firstLetterUpper(text){
        return text.charAt(0).toUpperCase() + text.slice(1)
    }

    replaceStrings(tsTemplateString){

        tsTemplateString = tsTemplateString.replace("*/","");
        tsTemplateString = tsTemplateString.replace("/*","");

        while(tsTemplateString.indexOf("xxx") > -1){
            tsTemplateString = tsTemplateString.replace("xxx",this.fileNameFirstLetterIsLower());
        }

        while(tsTemplateString.indexOf("zzz") > -1){
            tsTemplateString = tsTemplateString.replace("zzz",this.fileNameFirstLetterIsUpper());
        }

        return tsTemplateString;
    }

    addImportToModule(){
        let moduleString = fs.readFileSync(this._module.path, 'utf8');
        let moduleIndexOf = moduleString.indexOf(this._moduleString) - 1 ;

        return this.addStringOnIndex(moduleString, moduleIndexOf,
            'import { '+this.fileNameFirstLetterIsUpper() + this.firstLetterUpper(this._type)+' } from "./' +
            this.fileNameFirstLetterIsLower() +'/'+this.fileNameFirstLetterIsLower()+'.'+ this._type +'";\n');
    }

    addStringOnIndex(originalString, index, appendString){
        return originalString.substring(0, index) + appendString + originalString.substring(index,originalString.length);
    }

    abstract createNewElements();
    abstract replaceNames();
    abstract addFileToModule();


}