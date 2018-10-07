import { Module } from "../../models/module";
import { Creator } from "../creator";
const fs = require('fs');

export class ComponentCreator extends Creator{

    constructor(module: Module, fileName: String){
        super(module, fileName);
        this._type = "component";
    }

    createNewElements(){
        console.log(this._fileName);
        const lastIndex = this._module.path.lastIndexOf("/");
        let path = this._module.path.substr(0, lastIndex + 1);
        path += this.fileNameFirstLetterIsLower();

        fs.mkdirSync(path);
        this._path = path;
        this.copyTemplates();
    };

    async copyTemplates(){
        const tsPath = this._path + "/" + this.fileNameFirstLetterIsLower()+"."+this._type+".ts";
        console.log(tsPath);

        let tsTemplateString = fs.readFileSync(__dirname+"/template/template.ts", 'utf8');
        tsTemplateString = this.replaceStrings(tsTemplateString);


        //console.log(typeof(tsTemplateString));
        await fs.writeFileSync(tsPath,tsTemplateString);

        const htmlPath = this._path + "/" +this.fileNameFirstLetterIsLower()+"."+this._type+".html";
        let htmlTemplateString = fs.readFileSync(__dirname+"/template/template.html", 'utf8');
        htmlTemplateString = this.replaceStrings(htmlTemplateString);

        await fs.writeFileSync(htmlPath,htmlTemplateString);
    }

    replaceNames(){
    }

    async addFileToModule() {

        let moduleFileString = this.addImportToModule();

        moduleFileString = this.addComponentToDecleration(moduleFileString);

        await fs.writeFileSync(this._module.path,moduleFileString);
    }

    addComponentToDecleration(moduleFileString){
        const declarationsIndex = moduleFileString.indexOf("declarations");
        const closeIndex = moduleFileString.indexOf("]", declarationsIndex);

        return this.addStringOnIndex(moduleFileString, closeIndex ,", " + this.fileNameFirstLetterIsUpper() + this.firstLetterUpper(this._type));
    }
}