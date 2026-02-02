// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.762.44/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject8;
        (function (TcHmiProject8) {
            function CustomBinding(control, propertyName, par1) {
             

                if (!control)
                    throw new Error(
                        'Invalid value: "' +
                            control +
                            "\" for parameter: 'control'."
                    );
                if (!propertyName)
                    throw new Error(
                        'Invalid value: "' +
                            propertyName +
                            "\" for parameter: 'propertyName'."
                    );

                __arrayExpression = par1.__symbol.__expression.__expression;
                __bindingExpr = "";
                __bindingExpr = __arrayExpression.slice(0, -4);
                __bindingExprEnd = __arrayExpression.slice(-4);
                __bindingExpr = __bindingExpr.concat('|SubscriptionMode=Poll', __bindingExprEnd);
                __bindingExpr = __bindingExpr.replace("|BindingMode=TwoWay", "");

                
                //console.log(__bindingExpr);

                
                TcHmi.Symbol.writeEx('%s%HMI.GVL_Recipe.s_recipe_change_2%/s%', __bindingExpr, function (result) {
                    if (result.error) {
                        console.error('Błąd podczas zapisu do s_recipe_change_2:', result.error);
                    } else {
                       // console.log('Zapisano do s_recipe_change_2:', __bindingExpr);
                    }
                });
                
                TcHmi.Binding.createEx2(__bindingExpr, propertyName, control);
            }
            TcHmiProject8.CustomBinding = CustomBinding;
        })(TcHmiProject8 = Functions.TcHmiProject8 || (Functions.TcHmiProject8 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);


TcHmi.Functions.registerFunctionEx('CustomBinding', 'TcHmi.Functions.TcHmiProject8', TcHmi.Functions.TcHmiProject8.CustomBinding);
