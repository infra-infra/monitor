const esbuild = require("esbuild");
const path = require("path");
esbuild
  .build({
    entryPoints: [
      path.join(__dirname, "../src/main.ts"),
    ],
    bundle: true,
    outdir: path.join(__dirname, "../dist"),
    format: "esm",
    minify: true,
    watch: false,
  })
  .then(() => {
    console.log("building...");
  })
  .catch(console.log);
