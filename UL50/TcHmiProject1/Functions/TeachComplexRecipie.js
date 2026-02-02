// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.1.15/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var External;
        (function (External) {
            function TeachComplexRecipie(recipeName) {
                TcHmi.Server.RecipeManagement.getRecipe(
                    recipeName,
                    null,
                    (data) => {
                        incRecipies = data.value.values;

                        Object.keys(incRecipies).forEach(function (key) {
                            TcHmi.Server.RecipeManagement.teach(
                                incRecipies[key],
                                null,
                                (data) => {
                                    if (data.error) {
                                        console.error(data);
                                    }
                                }
                            );
                        });
                    }
                );
            }
            External.TeachComplexRecipie = TeachComplexRecipie;
        })((External = Functions.External || (Functions.External = {})));
    })((Functions = TcHmi.Functions || (TcHmi.Functions = {})));
})(TcHmi);
TcHmi.Functions.registerFunctionEx(
    "TeachComplexRecipie",
    "TcHmi.Functions.External",
    TcHmi.Functions.External.TeachComplexRecipie
);
