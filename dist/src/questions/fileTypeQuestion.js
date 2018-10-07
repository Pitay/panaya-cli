"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileTypesClass_1 = require("../models/fileTypesClass");
class FileTypeQuestion {
    constructor() {
        this.fileTypes = fileTypesClass_1.getTypes();
    }
    getQuestion() {
        return [
            {
                name: 'fileType',
                type: 'list',
                message: "Select your file type",
                choices: this.fileTypes
            }
        ];
    }
}
exports.FileTypeQuestion = FileTypeQuestion;
//# sourceMappingURL=fileTypeQuestion.js.map