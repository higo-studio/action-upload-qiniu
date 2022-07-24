const esbuild = require("esbuild");

esbuild.buildSync({
  entryPoints: ["src/main.ts"],
  outfile: "dist/index.js",
  bundle: true,
  platform: "node",
});
