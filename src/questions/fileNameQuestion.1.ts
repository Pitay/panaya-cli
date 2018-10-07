import { IQuestion } from "./IQuestion";
import { fileTypeClass, getTypes } from "../models/fileTypesClass";
export class FileNameQuestion implements IQuestion{

    _fileType;

    constructor(fileType){
        this._fileType = fileType;
    }

    getQuestion() {
        return [
            {
              name: 'fileName',
              type: 'input',
              message:"Enter the name of your "+this._fileType,
            }
          ]
    }

}