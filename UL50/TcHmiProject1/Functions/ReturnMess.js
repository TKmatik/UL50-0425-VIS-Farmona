// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.762.42/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function ReturnMess(par1, langPrefix) {
                //console.log(par1,langPrefix);
                let data = TcHmi.Functions.Beckhoff.GetLocalizedText(langPrefix + par1);
                return data;
            }
            TcHmiProject1.ReturnMess = ReturnMess;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('ReturnMess', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.ReturnMess);
