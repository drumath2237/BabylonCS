using System.Runtime.InteropServices.JavaScript;

namespace BabylonCS.Interop;

public static partial class MeshBuilderImpl
{
    [JSImport("mesh.createBox", BabylonCSInfo.ModuleName)]
    public static partial JSObject CreateBox(string name, float size);

    [JSImport("mesh.createSphere", BabylonCSInfo.ModuleName)]
    public static partial JSObject CreateSphere(string name, int segments, float diameter);
}