import { PluginOption, defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { cp, rm } from "fs/promises";

const copyBuildsAfterBuildPlugin: PluginOption = {
  name: "copyBuildsAfterBuildPlugin",
  closeBundle: async (): Promise<void> => {
    await rm("../wwwroot/BabylonCs", { force: true, recursive: true });
    await cp("./dist", "../BabylonCS/Playground/wwwroot/BabylonCs", { recursive: true });
  },
};

export default defineConfig({
  plugins: [dts(), copyBuildsAfterBuildPlugin],
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: "babyloncs-js",
      fileName: "index",
      formats: ["es", "umd"],
    },
  },
});
