module TcHmi {
	export module Functions {
		export module TcHmiProject1 {
			export function ColorConvert (color: number[]): TcHmi.Color {
				if (color.length >= 3) {
                    return { color: `rgb(${color[0]}, ${color[1]}, ${color[2]})` };
                }
                throw new Error("Could not stringify color.");
			}
		}
		
	}
}
TcHmi.Functions.registerFunctionEx('ColorConvert', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.ColorConvert);
