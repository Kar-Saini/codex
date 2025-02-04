"use server";

import fs from "fs";
import path from "path";
const MOUNT_PATH =
  process.env.MOUNT_PATH ||
  path.join(__dirname + "../../../../../../../problems");
export async function getProblem(slug: string) {
  try {
    const fullBoilerplateCode = getFullBoilerPlateCode(slug);
    const inputs = getInputs(slug);
    const outputs = getOutputs(slug);
    return {
      slug,
      fullBoilerplateCode,
      inputs,
      outputs,
    };
  } catch (error) {
    console.log("ERROR");
  }
}

function getFullBoilerPlateCode(slug: string) {
  const file = fs.readFileSync(
    `${MOUNT_PATH}/${slug}/boilerplate-full/function.js`,
    "utf-8"
  );
  return file;
}

function getInputs(slug: string) {
  const inputDir = fs.readdirSync(
    `${MOUNT_PATH}/${slug}/tests/inputs`,
    "utf-8"
  );
  const inputs = inputDir.map((file) => {
    return fs.readFileSync(
      `${MOUNT_PATH}/${slug}/tests/inputs/${file}`,
      "utf-8"
    );
  });
  return inputs;
}

function getOutputs(slug: string) {
  const inputDir = fs.readdirSync(`${MOUNT_PATH}/${slug}/tests/outputs`);
  const inputs = inputDir.map((file) => {
    return fs.readFileSync(
      `${MOUNT_PATH}/${slug}/tests/outputs/${file}`,
      "utf-8"
    );
  });
  return inputs;
}
