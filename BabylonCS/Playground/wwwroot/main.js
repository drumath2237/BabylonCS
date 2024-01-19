// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

import { dotnet } from "./_framework/dotnet.js";

import { setupBabylonCs } from "./BabylonCs/index.js";

const { setModuleImports } = await dotnet
  .withDiagnosticTracing(false)
  .withApplicationArgumentsFromQuery()
  .create();

setupBabylonCs(setModuleImports);

await dotnet.run();
