// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

import { dotnet } from "./_framework/dotnet.js";

import {
  createBox,
  createEngine,
  createScene,
  engineRunRenderLoop,
  engineSetupResize,
  getCanvas,
  sceneCreateDefaultCameraOrLight,
  sceneRender,
} from "./BabylonCs/index.js";

const { setModuleImports, getAssemblyExports, getConfig } = await dotnet
  .withDiagnosticTracing(false)
  .withApplicationArgumentsFromQuery()
  .create();

const main = () => {
  const renderCanvas = getCanvas("renderCanvas");
  if (!renderCanvas) {
    return;
  }

  const engine = createEngine(renderCanvas, true);
  const scene = createScene(engine);

  sceneCreateDefaultCameraOrLight(scene, true, true, true);

  createBox("box", 0.1);

  engineSetupResize(engine);
  engineRunRenderLoop(engine, () => sceneRender(scene));
};

main();

await dotnet.run();
