"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const creator_1 = require("../creator");
const fs = require('fs');
class ComponentCreator extends creator_1.Creator {
    constructor(module, fileName) {
        super(module, fileName);
        this._type = "component";
    }
    createNewElements() {
        console.log(this._fileName);
        const lastIndex = this._module.path.lastIndexOf("/");
        let path = this._module.path.substr(0, lastIndex + 1);
        path += this.fileNameFirstLetterIsLower();
        fs.mkdirSync(path);
        this._path = path;
        this.copyTemplates();
    }
    ;
    copyTemplates() {
        return __awaiter(this, void 0, void 0, function* () {
            const tsPath = this._path + "/" + this.fileNameFirstLetterIsLower() + "." + this._type + ".ts";
            console.log(tsPath);
            let tsTemplateString = fs.readFileSync(__dirname + "/template/template.ts", 'utf8');
            tsTemplateString = this.replaceStrings(tsTemplateString);
            console.log(typeof (tsTemplateString));
            yield fs.writeFileSync(tsPath, tsTemplateString);
            // await fs.copyFileSync(__dirname+"/template/template.ts", tsPath);
            const htmlPath = this._path + "/" + this.fileNameFirstLetterIsLower() + "." + this._type + ".html";
            yield fs.writeFileSync(htmlPath, "");
            yield fs.copyFileSync(__dirname + "/template/template.html", htmlPath);
        });
    }
    replaceNames() {
    }
    addFileToModule() {
        //throw new Error("Method not implemented.");
    }
}
exports.ComponentCreator = ComponentCreator;
//# sourceMappingURL=componentCreator.js.map