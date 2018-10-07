import { IQuestion } from "../IQuestion";

export class Question implements IQuestion{

    _name:String;
    _type: String;

    set Name(name:string){
        this._name = name
    }

    getQuestion() {
        return [{
            name: 'name',
            type: 'input',
            message:"What is your "+this._type+" name?",
             validate: function (text) {
                if (text.length < 2) {
                    return 'Must be at least 2 characters.';
                }
         
                return true;
            }
          }];
    }

    

    getModuleNameQuestion(){
        return {
            name: 'name',
            type: 'list',
            message:"Please select module:",

             validate: function (text) {
                if (text.length < 2) {
                    return 'Must be at least 2 characters.';
                }
         
                return true;
            }
          };
    }
}