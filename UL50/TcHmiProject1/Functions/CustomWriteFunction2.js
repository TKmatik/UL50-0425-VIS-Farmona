// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.212/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function CustomWriteFunction2(ControlID, Symbol) {
                   TcHmi.Symbol.readEx2(`%ctrl%${ControlID}::Value%/ctrl%`, (d1) => {
                      // console.log(d1.value);
                       TcHmi.Symbol.writeEx(Symbol.__symbol.__expression.__expression, d1.value, (d2) => {
                           //console.log(d2);
                           //console.log(Symbol.__symbol.__expression.__expression);
                           TcHmi.Symbol.writeEx('%s%HMI.GVL_Recipe.lr_recipe_change_1%/s%', d1.value, (result) => {
                                   //console.log('Wartość zapisana do lr_recipe_change:', result)
                           })
                           console.error('Write OK');
                       })
                   })
            }
            TcHmiProject1.CustomWriteFunction2 = CustomWriteFunction2;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CustomWriteFunction2', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.CustomWriteFunction2);
