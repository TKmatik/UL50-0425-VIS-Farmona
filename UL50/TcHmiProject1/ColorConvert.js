var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let TcHmiProject1;
        (function (TcHmiProject1) {
            function ColorConvert(color) {
                if (color.length >= 3) {
                    return { color: `rgb(${color[0]}, ${color[1]}, ${color[2]})` };
                }
                throw new Error("Could not stringify color.");
            }
            TcHmiProject1.ColorConvert = ColorConvert;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('ColorConvert', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.ColorConvert);
//# sourceMappingURL=ColorConvert.js.map