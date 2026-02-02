// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.59/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var RecipiesEx;
        (function (RecipiesEx) {
            function GetRecipieTypes() {
                TcHmi.Server.readSymbol("TcHmiRecipeManagement.ListRecipeTypes", (data) => {
                    if (
                        data.error !== TcHmi.Errors.NONE ||
                        data.response.error ||
                        data.response.commands[0].error
                    ) {
                        // Handle error(s)...
                        return;
                    }
                    // Handle result...
                    object = data.results[0].value;
                    let recipieTypes = [];
                    for (const property in object) {
                        if (object[property].hasOwnProperty("members")) {
                            recipieTypes.push(property);
                        }
                    }
                    document.recipieTypes = recipieTypes;
                   // console.log('Recipie types saved under document.recipieTypes');
                    return recipieTypes;
                });
            }
            RecipiesEx.GetRecipieTypes = GetRecipieTypes;
        })(RecipiesEx = Functions.RecipiesEx || (Functions.RecipiesEx = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('GetRecipieTypes', 'TcHmi.Functions.RecipiesEx', TcHmi.Functions.RecipiesEx.GetRecipieTypes);
