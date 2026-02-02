// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.1.15/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var External;
        (function (External) {
            function CreateRecipe(recName, recipeBaseType) {
                     let refRecipeType = {};
                     TcHmi.Server.RecipeManagement.getRecipeType(
                         recipeBaseType,
                         null,
                         function (data, recipeType = recipeBaseType) {
                             refRecipeType["recipeTypeName"] = recipeType;
                             let tempdata = data.value.members;
                             refRecipeType["values"] = {};
                             Object.keys(tempdata).forEach(function (key) {
                                 refRecipeType.values[key] = tempdata[key].defaultValue;
                             });
                             TcHmi.Server.RecipeManagement.createRecipe(
                                 recName,
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
            External.CreateRecipe = CreateRecipe;
        })(External = Functions.External || (Functions.External = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CreateRecipe', 'TcHmi.Functions.External', TcHmi.Functions.External.CreateRecipe);
