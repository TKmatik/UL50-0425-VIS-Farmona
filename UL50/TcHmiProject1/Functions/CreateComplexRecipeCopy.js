// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.1.15/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var External;
        (function (External) {
            function CreateComplexRecipeCopy(recipeName) {
                TcHmi.Server.RecipeManagement.listRecipes((data) => {
                    listOfRecipies = Object.keys(data.value);
                    loopNumber = -1;
                    do {
                        loopNumber++;
                        somethingFound = false;
                        listOfRecipies.forEach((key) => {
                            if (loopNumber > 0) {
                                if (key.indexOf(recipeName+"_Copy"+ loopNumber)  > -1) {
                                    somethingFound = true;
                                }
                            } else {
                                if (key.indexOf(recipeName+"_Copy") > -1) {
                                    somethingFound = true;
                                }
                            }
                        });
                    } while (somethingFound);

                    let newRecipeName;
                    if (loopNumber > 0) {
                        newRecipeName = recipeName + "_Copy" + loopNumber;
                    } else {
                        newRecipeName = recipeName + "_Copy";
                    }

                    TcHmi.Server.RecipeManagement.getRecipe(
                        recipeName,
                        null,
                        (data) => {
                           
                            let smallerRecipies = data.value.values;
                            let newRecipe = {};
                            let mainRecipeType = data.value;
                            Object.keys(smallerRecipies).forEach((key) => {
                                newRecipe[key] = newRecipeName + "__" + key;
                                TcHmi.Server.RecipeManagement.getRecipe(
                                    smallerRecipies[key],
                                    null,
                                    (data, recKey = key) => {
                                        let recievedRecipe = data.value;
                                        TcHmi.Server.RecipeManagement.createRecipe(
                                            newRecipe[key],
                                            null,
                                            recievedRecipe,
                                            (data) => {
                                                if (data.error) {
                                                    console.error(data);
                                                }
                                            }
                                        );
                                    }
                                );
                            });
                            mainRecipeType.values = newRecipe;
                            console.log(mainRecipeType);
                            TcHmi.Server.RecipeManagement.createRecipe(
                                newRecipeName,
                                null,
                                mainRecipeType,
                                (data) => {
                                    if (data.error){
                                        console.error( data);

                                    }
                                }
                            );
                        }
                    );
                });
            }
            External.CreateComplexRecipeCopy = CreateComplexRecipeCopy;
        })((External = Functions.External || (Functions.External = {})));
    })((Functions = TcHmi.Functions || (TcHmi.Functions = {})));
})(TcHmi);
TcHmi.Functions.registerFunctionEx(
    "CreateComplexRecipeCopy",
    "TcHmi.Functions.External",
    TcHmi.Functions.External.CreateComplexRecipeCopy
);
