// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.1.15/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var External;
        (function (External) {
            function CreateComplexRecipe(newRecipeName, generalTypeOfRecipe) {
                
              
                function createRecipe(recipeName, recType) {
                    let refRecipeType = {};
                    TcHmi.Server.RecipeManagement.getRecipeType(
                        recType,
                        null,
                        function (data, recipeType = recType) {
                            refRecipeType["recipeTypeName"] = recipeType;
                            let tempdata = data.value.members;
                            refRecipeType["values"] = {};
                            Object.keys(tempdata).forEach(function (key) {
                                refRecipeType.values[key] =
                                    tempdata[key].defaultValue;
                            });
                            TcHmi.Server.RecipeManagement.createRecipe(
                                recipeName,
                                null,
                                refRecipeType,
                                function (data) {
                                    if (data.error) {
                                        console.error(data);
                                    }
                                }
                            );
                        }
                    );
                        }

                generalTypeDef = {
                    ubl: newRecipeName + "__ubl"
                    //up: newRecipeName + "__up",
                   // uf: newRecipeName + "__uf"
                };
                TcHmi.Server.RecipeManagement.getRecipeType(
                    generalTypeOfRecipe,
                    null,
                    (data) => {
                        Object.keys(data.value.members).forEach(function (key) {
                            createRecipe(newRecipeName + "__" + key, key);
                        });
                        createRecipe(newRecipeName, generalTypeOfRecipe);
                        setTimeout(() => {
                            TcHmi.Server.RecipeManagement.updateRecipe(
                                newRecipeName,
                                null,
                                generalTypeDef,
                                (data, activatedObject = generalTypeDef) => {
                                    {
                                        Object.keys(activatedObject).forEach(
                                            function (key) {
                                                TcHmi.Server.RecipeManagement.teach(
                                                    activatedObject[key],
                                                    null,
                                                    (data) => {
                                                        if (data.error) {
                                                            console.log(data);
                                                            console.log(activatedObject[key]);
                                                        }
                                                      
                                                    })
                                            }
                                                );
                                        ;
                                    }
                                }
                            );
                        }, 200);
                    }
                );
            }
            External.CreateComplexRecipe = CreateComplexRecipe;
        })((External = Functions.External || (Functions.External = {})));
    })((Functions = TcHmi.Functions || (TcHmi.Functions = {})));
})(TcHmi);
TcHmi.Functions.registerFunctionEx(
    "CreateComplexRecipe",
    "TcHmi.Functions.External",
    TcHmi.Functions.External.CreateComplexRecipe
);
