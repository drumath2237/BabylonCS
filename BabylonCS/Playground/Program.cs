using System;
using BabylonCS;

if (!Document.TryGetRenderCanvas("renderCanvas", out var renderCanvas))
{
    Console.Error.WriteLine("canvas not found");
    return;
}

var engine = new Engine(renderCanvas, true);
var scene = new Scene(engine);

scene.CreateDefaultCameraOrLight(true, true, true);

MeshBuilder.CreateBox("box", 0.2f);

engine.SetupResize();
engine.RunRenderLoop(() => scene.Render());