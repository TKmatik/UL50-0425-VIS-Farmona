// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.14.2.110/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        //console.log('weszlo_2')
        var External;
        (function (External) {
            //console.log('weszlo_3')
            function CustomWriteFunction(controlID, symbol) {
               // console.log('weszlo_4')
                //console.log(controlID)
                document.getElementById(controlID).addEventListener("keyup", (e) => {
                    //console.log(e);
                    //console.log(controlID)
                    //console.log('weszlo_5')
                    if (e.key === "accept") {
                        TcHmi.Symbol.readEx2(`%ctrl%${controlID}::Value%/ctrl%`, (d1) => {
                            //console.log(d1.value);
                            TcHmi.Symbol.writeEx(symbol.__symbol.__expression.__expression, d1.value, (d2) => {
                                //console.log(d2);
                                //console.log(symbol.__symbol.__expression.__expression);
                               //TcHmi.Symbol.writeEx('%s%HMI.GVL_Recipe.lr_recipe_change_1%/s%', d1.value, (result) => {
                               //        console.log('Wartość zapisana do lr_recipe_change:', result)
                               //})
                            })
                        })

                    }
                })
            }
            External.CustomWriteFunction = CustomWriteFunction;
        })(External = Functions.External || (Functions.External = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CustomWriteFunction', 'TcHmi.Functions.External', TcHmi.Functions.External.CustomWriteFunction);
