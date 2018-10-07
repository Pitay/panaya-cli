import { fileTypeClass } from "../models/fileTypesClass";
import { Module } from "../models/module";

export class FileTypeCreator{
    fileTypes = fileTypeClass;
    _fileType: String;
    constructor(fileType: string){
        this._fileType = fileType;
    }

    getClass(module:Module, fileName: String){
            return new this.fileTypes[this._fileType.toString()].creatorClass(module, fileName);
    }
}