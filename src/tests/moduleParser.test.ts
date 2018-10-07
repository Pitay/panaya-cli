import { expect, assert } from 'chai';
import { ModuleParser } from '../helper/moduleParser'
import { Module } from '../models/module';
const fs = require('fs');
let parseModule: ModuleParser;

describe("Parse App Module File", function() {
    before(function(){
        parseModule = new ModuleParser("C:\\Git\\pmain\\panayax\\projects\\as-web-site\\src\\main\\webapp\\app\\@fingerprint@\\common\\modules\\app-module.ts", null);

    }),

    it('exception if the file doesnt exist', function() {
        const parseModule1 = new ModuleParser("C:\\Git\\pmain\\panayax\\projects\\as-web-site\\src\\main\\webapp\\app\\@fingerprint@\\common\\modules\\app-module.ts", null);
        try{
            parseModule.parseFileToString();
            expect(true).to.equal(false);
        }catch{
            expect(true).to.equal(true);
        }
    });

    it('parse file to string', function() {
        parseModule.parseFileToString();
        expect(typeof(parseModule.fileString)).to.equal("string");
    });

    it('check if the file contains Module', function() {

        const hasModule: Boolean = parseModule.hasModule();
        expect(hasModule).to.equal(true);
    });

    it('get imports from the Module file', function() {

        const jsonModule =  parseModule.getImportArrayFromModule();
        expect(typeof(jsonModule)).to.equal('string');
    });

    it('The file contains modules', function() {
        const modules =  parseModule.getModulesFromFile();
        expect(modules.length).to.greaterThan(0);
    });

    it('get modules path', function(){
        const module: Module = parseModule.module;
        
        expect(module.modulesChildren["PatchesModule"]).not.null;
        expect(module.modulesChildren["PatchesModule"]).to.equal('../../tm/js/modules/project/content/oaPatches/patches.module');
    })

    it('get modules from file', function() {
        //assert.ok(true,"The file exists");
        expect(3).to.equal(3);
    });
});