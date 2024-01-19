using System.Runtime.InteropServices.JavaScript;

namespace BabylonCS;

public interface IMesh
{
}

public class Mesh : IMesh
{
    internal Mesh(JSObject meshObj)
    {
    }
}