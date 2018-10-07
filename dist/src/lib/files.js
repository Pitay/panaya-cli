"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
class Files {
    getCurrentDirectoryBase() {
        return path.basename(process.cwd());
    }
    directoryExists(filePath) {
        try {
            return fs.statSync(filePath).isDirectory();
        }
        catch (err) {
            return false;
        }
    }
}
exports.Files = Files;
//# sourceMappingURL=files.js.map