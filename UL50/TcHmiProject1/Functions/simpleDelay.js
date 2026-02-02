// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.14.2.110/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var External;
        (function (External) {
            async function simpleDelay(ctx, delay_ms) {

                var resolver, rejector;

                var prom = new Promise((resolve,reject)=>{
                    resolver = resolve;
                    rejector = reject;
                });

                setTimeout(()=>resolver(),delay_ms);
                //console.log('Waiting...');

                await prom; // czekamy na status inny niż pending 
                ctx.success('OK');
                //console.log('Done');

           }
            External.simpleDelay = simpleDelay;
        })(External = Functions.External || (Functions.External = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('simpleDelay', 'TcHmi.Functions.External', TcHmi.Functions.External.simpleDelay);
