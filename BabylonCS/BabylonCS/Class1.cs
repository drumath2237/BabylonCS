using System.Runtime.InteropServices.JavaScript;

namespace BabylonCS;

public static partial class Class1
{
    [JSImport("class1.hello", "class")]
    public static partial void Hello();
}