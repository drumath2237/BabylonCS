using System;
using System.Runtime.InteropServices.JavaScript;
using BabylonCS;

Console.WriteLine("Hello, Browser!");

Class1.Hello();

public partial class MyClass
{
    [JSExport]
    internal static string Greeting()
    {
        var text = $"Hello, World! Greetings from {GetHRef()}";
        Console.WriteLine(text);
        return text;
    }

    [JSImport("window.location.href", "main.js")]
    internal static partial string GetHRef();
}
