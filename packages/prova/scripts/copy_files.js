const path = require("path");
const fs = require("fs-extra");

const packagePath = process.cwd();
const buildPath = path.join(packagePath, "./build");
const srcPath = path.join(packagePath, "./src");

async function createPackage() {
  const package = await fs.readFile(
    path.resolve(packagePath, "./package.json")
  );
  const {
    scripts,
    devDependencies,
    workspaces,
    ...packageDataOther
  } = JSON.parse(package);
  const newPackage = {
    ...packageDataOther,
    private: false,
    main: "./index.js"
  };
  const targetPath = path.resolve(buildPath, "./package.json");

  await fs.writeFile(targetPath, JSON.stringify(newPackage, null, 2));

  return newPackage;
}

async function addReadme() {
  const targetPath = path.resolve(buildPath, "./README.md");
  const srcPath = path.resolve(packagePath, "./README.md");
  await fs.copyFile(srcPath, targetPath);
}

async function addLicense() {
  const targetPath = path.resolve(buildPath, "./LICENSE");
  const srcPath = path.resolve(packagePath, "../../LICENSE");
  await fs.copyFile(srcPath, targetPath);
}

async function run() {
  try {
    await createPackage();
    await addLicense();
    await addReadme();
    console.log("cacio");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

run();
