using System.Runtime.InteropServices.JavaScript;

namespace BabylonCS.Interop;

public static partial class EngineImpl
{
    [JSImport("engine.createEngine", BabylonCSInfo.ModuleName)]
    public static partial JSObject CreateEngine(JSObject canvas, bool antialias);

    [JSImport("engine.engineRunRenderLoop", BabylonCSInfo.ModuleName)]
    public static partial void EngineRunRenderLoop(JSObject engine, [JSMarshalAs<JSType.Function>] Action callback);

    [JSImport("engine.engineSetupResize", BabylonCSInfo.ModuleName)]
    public static partial void EngineSetupResize(JSObject engine);
}