import { Engine } from "@babylonjs/core";

export const createEngine = (
  canvas: HTMLCanvasElement,
  antialias: boolean
): Engine => new Engine(canvas, antialias);

export const engineRunRenderLoop = (engine: Engine, callback: () => void) =>
  engine.runRenderLoop(callback);

export const engineResize = (engine: Engine) => engine.resize();

export const engineSetupResize = (engine: Engine) => {
  window.addEventListener("resize", () => engineResize(engine));
};

export const engineModule = {
  createEngine,
  engineRunRenderLoop,
  engineResize,
  engineSetupResize,
};
