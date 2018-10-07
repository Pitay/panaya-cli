import { IQuestion } from "./IQuestion";
import { fileTypeClass, getTypes } from "../models/fileTypesClass";
export class FileTypeQuestion implements IQuestion{

    fileTypes = getTypes();
    getQuestion() {
        return [
            {
              name: 'fileType',
              type: 'list',
              message:"Select your file type",
              choices: this.fileTypes
            }
          ]
    }

}