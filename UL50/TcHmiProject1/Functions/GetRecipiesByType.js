// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.59/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var RecipiesEx;
        (function (RecipiesEx) {
            function GetRecipiesByType(sRecipieType) {
                let dataArray = [];
                let tbRowData = {
                    'id': 0,
                    'text': ''
                }
                let idNumber = 0;
                if (document?.groupedRecipies !== undefined){
                    let recipies = document.groupedRecipies[sRecipieType];
                    recipies.forEach(element => {
                        tbRowData.text = element;
                        tbRowData.id = idNumber;
                        dataArray.push(Object.assign({},tbRowData));
                        idNumber = idNumber + 1;
                    });
                    //console.log(JSON.stringify(dataArray))
                    return JSON.stringify(dataArray);
                }else{
                    return [];
                }
                
            }
            RecipiesEx.GetRecipiesByType = GetRecipiesByType;
        })(RecipiesEx = Functions.RecipiesEx || (Functions.RecipiesEx = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('GetRecipiesByType', 'TcHmi.Functions.RecipiesEx', TcHmi.Functions.RecipiesEx.GetRecipiesByType);
