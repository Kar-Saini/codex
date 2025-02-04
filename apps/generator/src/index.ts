import * as fs from "fs";
import * as path from "path";
import { Parser } from "./Parser";
const MOUNT_PATH = path.join(__dirname, "../../problems");
function generateBoilerPlateCode(slug: string) {
  console.log(MOUNT_PATH);
  const ipPath = path.join(MOUNT_PATH, slug, "Structure.md");
  const boilerPlatePath = path.join(MOUNT_PATH, slug, "boilerplate");
  const boilerPlatePathFull = path.join(MOUNT_PATH, slug, "boilerplate-full");

  const input = fs.readFileSync(ipPath, "utf-8");
  const parser = new Parser();
  parser.parse(input);

  const jsCode = parser.generateBoilerPlateCodeJs();
  const jsCodeFull = parser.generateFullCodeJs();

  if (!fs.existsSync(boilerPlatePath)) {
    fs.mkdirSync(boilerPlatePath, { recursive: true });
  }
  if (!fs.existsSync(boilerPlatePathFull)) {
    fs.mkdirSync(boilerPlatePathFull, { recursive: true });
  }

  fs.writeFileSync(path.join(boilerPlatePath + "/function.js"), jsCode);
  fs.writeFileSync(path.join(boilerPlatePathFull + "/function.js"), jsCodeFull);
  console.log("Boiler plate code generated");
}

generateBoilerPlateCode(process.env.SLUG);
