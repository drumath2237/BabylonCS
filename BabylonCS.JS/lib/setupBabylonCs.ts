import { personImports } from "./Person";
import { utilImpoers } from "./utils";

const importsFun = {
  person: personImports,
  utils: utilImpoers,
};

type SetMpduleImportsType = (module: string, imports: any) => void;
export const setupBabylonCs = (fun: SetMpduleImportsType) =>
  fun("babylon.cs", importsFun);
