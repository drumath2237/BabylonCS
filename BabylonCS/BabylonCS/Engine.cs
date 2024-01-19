using System.Runtime.InteropServices.JavaScript;
using BabylonCS.Interop;

namespace BabylonCS;

public interface IEngine
{
    void RunRenderLoop(Action callback);
    void SetupResize();
}

public class Engine(RenderCanvas renderCanvas, bool antialias) : IEngine
{
    internal JSObject EngineObj { get; } = EngineImpl.CreateEngine(renderCanvas.CanvasElement, antialias);

    public void RunRenderLoop(Action callback)
    {
        EngineImpl.EngineRunRenderLoop(EngineObj, callback);
    }

    public void SetupResize()
    {
        EngineImpl.EngineSetupResize(EngineObj);
    }
}