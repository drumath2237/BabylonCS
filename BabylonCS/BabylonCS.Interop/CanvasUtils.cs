using System.Runtime.InteropServices.JavaScript;
using static BabylonCS.Interop.BabylonCSInfo;

namespace BabylonCS.Interop;

public static partial class CanvasUtilsImpl
{
    [JSImport("canvas.getCanvas", ModuleName)]
    public static partial JSObject? GetCanvas(string id);

    [JSImport("canvas.getCanvasWidth", ModuleName)]
    public static partial int GetCanvasWidth(JSObject canvas);

    [JSImport("canvas.getCanvasHeight", ModuleName)]
    public static partial int GetCanvasHeight(JSObject canvas);
}