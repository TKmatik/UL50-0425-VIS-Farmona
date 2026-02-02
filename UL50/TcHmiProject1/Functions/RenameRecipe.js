// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.1.15/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var External;
        (function (External) {
            function RenameRecipe(oldRecipeName, newRecipeName) {
                TcHmi.Server.RecipeManagement.getRecipe(
                    oldRecipeName,
                    null,
                    (data) => {
                        let newValues = {};
                        Object.keys(data.value.values).forEach(function (key) {
                            TcHmi.Server.RecipeManagement.renameRecipe(
                                data.value.values[key],
                                null,
                                newRecipeName + "__" + key,
                                null,
                                (data) => {
                                    if (data.error) {
                                        console.log(data);
                                    }
                                }
                            );
                            newValues[key] = newRecipeName + "__" + key;
                        });
                        // Update instance names
                        console.log(newValues);
                        TcHmi.Server.RecipeManagement.updateRecipe(
                            oldRecipeName,
                            null,
                            newValues,
                            (data) => {
                                if (data.error) {
                                    console.log(data);
                                }

                                TcHmi.Server.RecipeManagement.renameRecipe(
                                    oldRecipeName,
                                    null,
                                    newRecipeName,
                                    null,
                                    (data) => {
                                        if (data.error) {
                                            console.log(data);
                                        }
                                    }
                                );
                            }
                        );
                    }
                );
            }
            External.RenameRecipe = RenameRecipe;
        })((External = Functions.External || (Functions.External = {})));
    })((Functions = TcHmi.Functions || (TcHmi.Functions = {})));
})(TcHmi);
TcHmi.Functions.registerFunctionEx(
    "RenameRecipe",
    "TcHmi.Functions.External",
    TcHmi.Functions.External.RenameRecipe
);
