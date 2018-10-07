"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileNameQuestion {
    constructor(fileType) {
        this._fileType = fileType;
    }
    getQuestion() {
        return [
            {
                name: 'fileName',
                type: 'input',
                message: "Enter the name of your " + this._fileType,
            }
        ];
    }
}
exports.FileNameQuestion = FileNameQuestion;
//# sourceMappingURL=fileNameQuestion.1.js.map