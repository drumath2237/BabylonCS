import { Engine, Scene } from "@babylonjs/core";

export const createScene = (engine: Engine) => new Scene(engine);

export const sceneCreateDefaultCameraOrLight = (
  scene: Scene,
  createArcRotateCamera: boolean,
  replace: boolean,
  attatchCameraControl: boolean
) =>
  scene.createDefaultCameraOrLight(
    createArcRotateCamera,
    replace,
    attatchCameraControl
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
