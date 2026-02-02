// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.59/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var RecipiesEx;
        (function (RecipiesEx) {
            function GetRecipies() {
               TcHmi.Server.readSymbol("TcHmiRecipeManagement.ListRecipes", (data) => {
                    if (
                        data.error !== TcHmi.Errors.NONE ||
                        data.response.error ||
                        data.response.commands[0].error
                    ) {
                        // Handle error(s)...
                        return;
                    }
                    // Handle result...
                    document.groupedRecipies = {};


                    document.data = data.results[0].value;
                    object = data.results[0].value;

                    for (const property in object) {
                        if (object[property].hasOwnProperty("recipeTypeName")) {
                            // console.log(object[property].recipeTypeName)
                            if (document.groupedRecipies.hasOwnProperty(object[property].recipeTypeName)){
                                document.groupedRecipies[object[property].recipeTypeName].push(property)
                            }else{
                                document.groupedRecipies = {...document.groupedRecipies, [object[property].recipeTypeName] : []}
                            document.groupedRecipies[object[property].recipeTypeName].push(property)
                        }
                    }
                }
               //console.log('All recipies saved under document.groupedRecipies')
            });

            }
            RecipiesEx.GetRecipies = GetRecipies;
        })(RecipiesEx = Functions.RecipiesEx || (Functions.RecipiesEx = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('GetRecipies', 'TcHmi.Functions.RecipiesEx', TcHmi.Functions.RecipiesEx.GetRecipies);
