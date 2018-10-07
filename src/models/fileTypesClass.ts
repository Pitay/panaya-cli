import { ComponentQuestion } from "../questions/types/componentQuestion";
import { ServiceQuestion } from "../questions/types/serviceCreator";
import { ModuleQuestion } from "../questions/types/moduleQuestion";
import { ComponentCreator } from "../creators/component/componentCreator";


export const fileTypeClass =
        {Component: { name: "Component",
                      questionClass:ComponentQuestion,
                      creatorClass: ComponentCreator
                },
        Service: { name: "Service",
                   questionClass:ServiceQuestion
                 },
        Module: { name: "Module",
                  questionClass:ModuleQuestion
                }
        };

export function getTypes():Array<String>{
    let types = new Array<any>();
    for (var type in fileTypeClass) {
        if (fileTypeClass.hasOwnProperty(type)) {
            types.push(type)
        }
      };

      return types;
}