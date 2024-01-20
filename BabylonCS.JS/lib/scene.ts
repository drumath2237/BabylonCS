import { Engine, Scene } from "@babylonjs/core";

export const createScene = (engine: Engine) => new Scene(engine);

export const sceneCreateDefaultCameraOrLight = (
  scene: Scene,
  createArcRotateCamera: boolean,
  replace: boolean,
  attachCameraControl: boolean
) =>
  scene.createDefaultCameraOrLight(
    createArcRotateCamera,
    replace,
    attachCameraControl
  );

export const sceneCreateDefaultEnvironment = (scene: Scene) =>
  scene.createDefaultEnvironment();

export const sceneRender = (scene: Scene) => scene.render();

export const sceneModule = {
  createScene,
  sceneCreateDefaultCameraOrLight,
  sceneCreateDefaultEnvironment,
  sceneRender,
};
