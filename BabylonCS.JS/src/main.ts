import "./style.css";
import {
  createBox,
  createEngine,
  createScene,
  engineRunRenderLoop,
  getCanvas,
  sceneCreateDefaultCameraOrLight,
  sceneCreateDefaultEnvironment,
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
  // sceneCreateDefaultEnvironment(scene);

  createBox("box", 0.1);

  engineRunRenderLoop(engine, () => sceneRender(scene));
};

main();
