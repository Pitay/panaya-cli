"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileTypesClass_1 = require("../../models/fileTypesClass");
class FileTypeQuestionCreator {
    constructor(fileType) {
        this.fileTypes = fileTypesClass_1.fileTypeClass;
        this._fileType = fileType;
    }
    getClass() {
        return new this.fileTypes[this._fileType.toString()].questionClass();
    }
}
exports.FileTypeQuestionCreator = FileTypeQuestionCreator;
//# sourceMappingURL=fileTypeQuestionCreator.js.map