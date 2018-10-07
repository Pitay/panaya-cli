"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Creator {
    constructor(module, fileName) {
        this._module = module;
        this._fileName = fileName;
    }
    create() {
        this.createNewElements();
        this.deleteComments();
        this.replaceNames();
        this.addFileToModule();
    }
    deleteComments() {
    }
    fileNameFirstLetterIsLower() {
        return this._fileName.charAt(0).toLowerCase() + this._fileName.slice(1);
    }
    fileNameFirstLetterIsUpper() {
        return this._fileName.charAt(0).toUpperCase() + this._fileName.slice(1);
    }
    replaceStrings(tsTemplateString) {
        tsTemplateString = tsTemplateString.replace("*/", "");
        tsTemplateString = tsTemplateString.replace("/*", "");
        while (tsTemplateString.indexOf("xxx") > -1) {
            tsTemplateString = tsTemplateString.replace("xxx", this.fileNameFirstLetterIsLower());
        }
        while (tsTemplateString.indexOf("zzz") > -1) {
            tsTemplateString = tsTemplateString.replace("zzz", this.fileNameFirstLetterIsUpper());
        }
        return tsTemplateString;
    }
}
exports.Creator = Creator;
//# sourceMappingURL=creator.js.map