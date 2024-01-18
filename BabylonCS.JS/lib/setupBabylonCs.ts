import { personImports } from "./Person";
import { utilImpoers } from "./utils";

import { canvasModule } from "./canvasUtil";
import { engineModule } from "./engine";
import { meshModule } from "./mesh";
import { sceneModule } from "./scene";

const importsFun = {
  person: personImports,
  utils: utilImpoers,

  canvas: canvasModule,
  engine: engineModule,
  scene: sceneModule,
  mesh: meshModule,
};

type SetMpduleImportsType = (module: string, imports: any) => void;
export const setupBabylonCs = (fun: SetMpduleImportsType) =>
  fun("babylon.cs", importsFun);
