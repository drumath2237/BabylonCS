using System.Runtime.InteropServices.JavaScript;

namespace BabylonCS.Interop;

public static partial class SceneImpl
{
    [JSImport("scene.createScene", BabylonCSInfo.ModuleName)]
    public static partial JSObject CreateScene(JSObject engine);

    [JSImport("scene.sceneCreateDefaultCameraOrLight", BabylonCSInfo.ModuleName)]
    public static partial void SceneCreateDefaultCameraOrLight(
        JSObject scene,
        bool createArcRotateCamera,
        bool replace,
        bool attachCameraControl
    );

    [JSImport("scene.sceneRender", BabylonCSInfo.ModuleName)]
    public static partial void SceneRender(JSObject scene);
}