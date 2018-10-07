"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Module {
    constructor(name, path) {
        this._modulesChildren = {};
        if (name) {
            this._name = name;
        }
        else {
            this._name = "appModule";
        }
        this._path = path;
    }
    get path() {
        return this._path;
    }
    set path(path) {
        this._path = path;
    }
    get name() {
        return this._name;
    }
    get modulesChildren() {
        return this._modulesChildren;
    }
}
exports.Module = Module;
//# sourceMappingURL=module.js.map