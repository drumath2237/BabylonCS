using BabylonCS.Interop;

namespace BabylonCS;

public class MeshBuilder
{
    public static Mesh CreateBox(string name, float size)
    {
        var meshObj = MeshBuilderImpl.CreateBox(name, size);
        return new Mesh(meshObj);
    }

    public static Mesh CreateSphere(string name, int segments, float diameter)
    {
        var meshObj = MeshBuilderImpl.CreateSphere(name, segments, diameter);
        return new Mesh(meshObj);
    }
}