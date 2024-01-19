using System;
using BabylonCS;

if (!Document.TryGetRenderCanvas("renderCanvas", out var renderCanvas))
{
    Console.WriteLine("cannot found canvas");
    return;
}

Console.WriteLine($"canvas: {renderCanvas}");