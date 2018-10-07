const inquirer = require('inquirer');
import { IQuestion } from '../questions/IQuestion';

export class Inquirer {
    createQuestion(question: IQuestion){
       return inquirer.prompt(question.getQuestion());
  }
}