import { canvasModule } from "./canvasUtil";
import { engineModule } from "./engine";
import { meshModule } from "./mesh";
import { sceneModule } from "./scene";

const importsFun = {
  canvas: canvasModule,
  engine: engineModule,
  scene: sceneModule,
  mesh: meshModule,
};

type SetModuleImportsType = (module: string, imports: any) => void;
export const setupBabylonCs = (fun: SetModuleImportsType) =>
  fun("babylon.cs", importsFun);
