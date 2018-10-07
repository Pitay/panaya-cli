export class Module{
    _name: String;
    _path: String;
    _modulesChildren = {};

    constructor(name, path){
        if(name){
           this._name = name;
        }else{
            this._name = "appModule";
        }

        this._path = path;
    }

    get path(){
        return this._path;
    }

    set path(path){
        this._path = path;
    }

    get name(){
        return this._name;
    }

    get modulesChildren(){
        return this._modulesChildren;
    }
}