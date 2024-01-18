import "./style.css";
import {
  createBox,
  createEngine,
  createScene,
  engineRunRenderLoop,
  engineSetupResize,
  getCanvas,
  sceneCreateDefaultCameraOrLight,
  sceneRender,
} from "../lib";

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
