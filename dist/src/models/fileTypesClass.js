"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const componentQuestion_1 = require("../questions/types/componentQuestion");
const serviceCreator_1 = require("../questions/types/serviceCreator");
const moduleQuestion_1 = require("../questions/types/moduleQuestion");
const componentCreator_1 = require("../creators/component/componentCreator");
exports.fileTypeClass = { Component: { name: "Component",
        questionClass: componentQuestion_1.ComponentQuestion,
        creatorClass: componentCreator_1.ComponentCreator
    },
    Service: { name: "Service",
        questionClass: serviceCreator_1.ServiceQuestion
    },
    Module: { name: "Module",
        questionClass: moduleQuestion_1.ModuleQuestion
    }
};
function getTypes() {
    let types = new Array();
    for (var type in exports.fileTypeClass) {
        if (exports.fileTypeClass.hasOwnProperty(type)) {
            types.push(type);
        }
    }
    ;
    return types;
}
exports.getTypes = getTypes;
//# sourceMappingURL=fileTypesClass.js.map