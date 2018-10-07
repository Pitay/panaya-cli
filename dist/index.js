#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const express = require("express");
const inquirer_1 = require("./src/lib/inquirer");
const fileTypeQuestion_1 = require("./src/questions/fileTypeQuestion");
const selectedModuleQuestion_1 = require("./src/questions/selectedModuleQuestion");
const fileTypeCreator_1 = require("./src/creators/fileTypeCreator");
const fileNameQuestion_1_1 = require("./src/questions/fileNameQuestion.1");
clear();
console.log(chalk.yellow(figlet.textSync('Panaya-cli', { horizontalLayout: 'full' })));
//the current folder isn’t already a Git repository
/*if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a git repository!'));
    process.exit();
  }*/
const run = () => __awaiter(this, void 0, void 0, function* () {
    let inquirer = new inquirer_1.Inquirer();
    //Choose the file type
    const fileTypeAnswer = yield inquirer.createQuestion(new fileTypeQuestion_1.FileTypeQuestion());
    const fileType = fileTypeAnswer.fileType;
    //Name of your file
    const fileNameAnswer = yield inquirer.createQuestion(new fileNameQuestion_1_1.FileNameQuestion(fileType));
    const fileName = fileNameAnswer.fileName;
    //Select the module
    let selectedModuleQuestion = new selectedModuleQuestion_1.SelectedModuleQuestion(null, null);
    let moduleNameAnswer = yield inquirer.createQuestion(selectedModuleQuestion);
    let module = selectedModuleQuestion.getModule();
    while (module.name !== moduleNameAnswer.moduleName && selectedModuleQuestion.hasQuestion) {
        console.log(module.name + " " + moduleNameAnswer.moduleName);
        selectedModuleQuestion = new selectedModuleQuestion_1.SelectedModuleQuestion(module.modulesChildren[moduleNameAnswer.moduleName], moduleNameAnswer.moduleName);
        if (selectedModuleQuestion.hasQuestion) {
            moduleNameAnswer = yield inquirer.createQuestion(selectedModuleQuestion);
            module = selectedModuleQuestion.getModule();
        }
    }
    //Type Creator
    const fileTypeCreator = new fileTypeCreator_1.FileTypeCreator(fileType);
    const fileCreator = fileTypeCreator.getClass(module, fileName);
    fileCreator.create();
});
run();
//# sourceMappingURL=index.js.map