using System.Runtime.InteropServices.JavaScript;
using BabylonCS.Interop;

namespace BabylonCS;

public interface IRenderCanvas
{
    int Width { get; }
    int Height { get; }
}

public class RenderCanvas : IRenderCanvas
{
    internal JSObject CanvasElement { get; }

    internal RenderCanvas(JSObject renderCanvas)
    {
        CanvasElement = renderCanvas;
    }

    public int Width => CanvasUtilsImpl.GetCanvasWidth(CanvasElement);

    public int Height => CanvasUtilsImpl.GetCanvasHeight(CanvasElement);

    public override string ToString() => $"canvas({Width},{Height})";
}

public static class Document
{
    public static bool TryGetRenderCanvas(string elmId, out RenderCanvas canvas)
    {
        var renderCanvas = CanvasUtilsImpl.GetCanvas(elmId);
        if (renderCanvas == null)
        {
            canvas = null!;
            return false;
        }

        canvas = new RenderCanvas(renderCanvas);
        return true;
    }
}