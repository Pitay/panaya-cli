"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileTypesClass_1 = require("../models/fileTypesClass");
class FileTypeCreator {
    constructor(fileType) {
        this.fileTypes = fileTypesClass_1.fileTypeClass;
        this._fileType = fileType;
    }
    getClass(module, fileName) {
        return new this.fileTypes[this._fileType.toString()].creatorClass(module, fileName);
    }
}
exports.FileTypeCreator = FileTypeCreator;
//# sourceMappingURL=fileTypeCreator.js.map