// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.1.15/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var External;
        (function (External) {
            function RemoveRecipie(recipeName) {
                TcHmi.Server.RecipeManagement.getRecipe(
                    recipeName,
                    null,
                    (data) => {
                        Object.keys(data.value.values).forEach(function (key) {
                            TcHmi.Server.RecipeManagement.deleteRecipe(
                                data.value.values[key],
                                null,
                                (data) => {
                                    if (data.error) {
                                        console.log(data);
                                    }
                                }
                            );
                        });
                        TcHmi.Server.RecipeManagement.deleteRecipe(
                            recipeName,
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
            External.RemoveRecipie = RemoveRecipie;
        })(
            (External =
                Functions.External || (Functions.External = {}))
        );
    })((Functions = TcHmi.Functions || (TcHmi.Functions = {})));
})(TcHmi);
TcHmi.Functions.registerFunctionEx(
    "RemoveRecipie",
    "TcHmi.Functions.External",
    TcHmi.Functions.External.RemoveRecipie
);
