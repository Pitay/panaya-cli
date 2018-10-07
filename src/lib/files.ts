import fs = require('fs');
import path = require('path');

export class Files{

  getCurrentDirectoryBase() {
    return path.basename(process.cwd());
  }

  directoryExists(filePath){
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
}