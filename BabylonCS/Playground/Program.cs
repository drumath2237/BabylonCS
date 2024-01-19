using System;
using BabylonCS;

if (!Document.TryGetRenderCanvas("renderCanvas", out var renderCanvas))
{
    Console.WriteLine("cannot found canvas");
    return;
}

var engine = new Engine(renderCanvas, true);
var scene = new Scene(engine);

scene.CreateDefaultCameraOrLight(true, true, true);

engine.SetupResize();
engine.RunRenderLoop(() => scene.Render());