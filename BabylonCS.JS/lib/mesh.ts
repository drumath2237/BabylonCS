import { MeshBuilder } from "@babylonjs/core";

export const createBox = (name: string, size: number) =>
  MeshBuilder.CreateBox(name, { size });

export const createSphare = (
  name: string,
  segments: number,
  diameter: number
) => MeshBuilder.CreateSphere(name, { segments, diameter });

export const meshModule = { createBox, crateSphere: createSphare };
