#!/usr/bin/env node
const chalk = require('chalk');
const clear  = require('clear');
const figlet = require('figlet');
const express = require("express");
import {Inquirer} from './src/lib/inquirer';
import { FileTypeQuestion } from './src/questions/fileTypeQuestion';
import { SelectedModuleQuestion } from './src/questions/selectedModuleQuestion';
import { Module } from './src/models/module';
import { ICreator } from './src/creators/ICreator';
import { FileTypeCreator } from './src/creators/fileTypeCreator';
import { FileNameQuestion } from './src/questions/fileNameQuestion.1';

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Panaya-cli', { horizontalLayout: 'full' })
  )
);

//the current folder isn’t already a Git repository
/*if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a git repository!'));
    process.exit();
  }*/


const run = async () => {
 
  let inquirer = new Inquirer();
  //Choose the file type
  const fileTypeAnswer = await inquirer.createQuestion(new FileTypeQuestion());
  const fileType = fileTypeAnswer.fileType;

  //Name of your file
  const fileNameAnswer = await inquirer.createQuestion(new FileNameQuestion(fileType));
  const fileName = fileNameAnswer.fileName;

  //Select the module
  let selectedModuleQuestion = new SelectedModuleQuestion(null, null);

  let moduleNameAnswer = await inquirer.createQuestion(selectedModuleQuestion);
  let module: Module = selectedModuleQuestion.getModule();

  while(module.name !== moduleNameAnswer.moduleName && selectedModuleQuestion.hasQuestion){
    //console.log(module.name + " "+ moduleNameAnswer.moduleName);

    selectedModuleQuestion = new SelectedModuleQuestion(module.modulesChildren[moduleNameAnswer.moduleName], moduleNameAnswer.moduleName);

    if(selectedModuleQuestion.hasQuestion){
      moduleNameAnswer = await inquirer.createQuestion(selectedModuleQuestion);
      module = selectedModuleQuestion.getModule();
    }
  }

  //Type Creator
  const fileTypeCreator =  new FileTypeCreator(fileType);
  const fileCreator: ICreator= fileTypeCreator.getClass(module, fileName);

  fileCreator.create();

}

run();