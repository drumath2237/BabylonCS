using System.Runtime.InteropServices.JavaScript;
using BabylonCS.Interop;

namespace BabylonCS;

public interface IScene
{
    void CreateDefaultCameraOrLight(bool createArcRotateCamera, bool replace, bool attachCameraControl);
    void Render();
}

public class Scene(Engine engine) : IScene
{
    internal JSObject SceneObj { get; } = SceneImpl.CreateScene(engine.EngineObj);

    public void CreateDefaultCameraOrLight(bool createArcRotateCamera, bool replace, bool attachCameraControl)
    {
        SceneImpl.SceneCreateDefaultCameraOrLight(SceneObj, createArcRotateCamera, replace, attachCameraControl);
    }

    public void Render()
    {
        SceneImpl.SceneRender(SceneObj);
    }
}