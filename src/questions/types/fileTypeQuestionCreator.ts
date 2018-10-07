import { ComponentQuestion } from "./componentQuestion";
import { fileTypeClass } from "../../models/fileTypesClass";

export class FileTypeQuestionCreator{
    fileTypes = fileTypeClass;
    _fileType: String;
    constructor(fileType: string){
        this._fileType = fileType;
    }

    getClass(){
            return new this.fileTypes[this._fileType.toString()].questionClass();
    }
}