// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.1.15/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var External;
        (function (External) {
            function ActivateComplexRecipe(recipeName) {
                TcHmi.Server.RecipeManagement.getRecipe(
                    recipeName,
                    null,
                    (data) => {
                        let listOfRecipies = data.value.values;
                        Object.keys(listOfRecipies).forEach((key) => {
                            TcHmi.Server.RecipeManagement.activate(
                                listOfRecipies[key],
                                null,
                                (data) => {
                                    if (data.error) {
                                        alert(
                                            `Recipe upload failed. An error occurred while saving the recipe ${listOfRecipies[key]} to controller ${key}.`
                                        );
                                        console.log(data);
                                    }
                                }
                            );
                        });
                    }
                );
            }
            External.ActivateComplexRecipe = ActivateComplexRecipe;
        })((External = Functions.External || (Functions.External = {})));
    })((Functions = TcHmi.Functions || (TcHmi.Functions = {})));
})(TcHmi);
TcHmi.Functions.registerFunctionEx(
    "ActivateComplexRecipe",
    "TcHmi.Functions.External",
    TcHmi.Functions.External.ActivateComplexRecipe
);
