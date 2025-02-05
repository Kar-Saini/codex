"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));

// src/Parser.ts
var Parser = class {
  constructor() {
    this.problemName = "";
    this.functionName = "";
    this.inputFeilds = [];
    this.outputFeilds = [];
  }
  parse(input) {
    const lines = input.split("\n").map((line) => line.trim());
    let currentSection = "";
    console.log(lines);
    lines.map((line) => {
      if (line.startsWith("Problem name"))
        this.problemName = this.extractQuotedValue(line);
      else if (line.startsWith("Function name"))
        this.functionName = this.extractQuotedValue(line);
      else if (line.startsWith("Input Structure")) currentSection = "input";
      else if (line.startsWith("Output Structure")) currentSection = "output";
      else if (line.startsWith("Input Feild") && currentSection === "input") {
        const feild = this.extractField(line);
        console.log("extracted input");
        console.log(feild);
        if (feild) this.inputFeilds.push(feild);
      } else if (line.startsWith("Output Feild") && currentSection === "output") {
        const feild = this.extractField(line);
        if (feild) this.outputFeilds.push(feild);
      }
    });
  }
  extractField(line) {
    console.log("called");
    const match = line.match(/ : (\w+(?:<\w+>)?) (\w+)$/);
    return match ? { type: match[1], name: match[2] } : null;
  }
  extractQuotedValue(line) {
    const match = line.match(/: "(.*)"$/);
    return match ? match[1] : "";
  }
  generateBoilerPlateCodeJs() {
    return `function ${this.functionName} (${this.inputFeilds.map((feild) => feild.name).join(" ,")}){
 //Implementation goes here 
 return ${this.outputFeilds.map((feild) => feild.name).join(" ,")}}`;
  }
  generateFullCodeJs() {
    const inputReadingTestCaseFile = `
    const input = require('fs').readFileSync('/problems/${this.problemName.toLowerCase().replace(
      " ",
      "-"
    )}/tests/inputs/##INPUT_FILE_INDEX##.txt', 'utf8').trim().split('\\n').join(' ').split(' ');`;
    const inputReads = this.inputFeilds.map(({ name, type }) => {
      if (name.startsWith("list<")) {
        return `const size_${name} = parseInt(input.shift())

        const ${name} = input.slice(0, size_${name}).map(Number)`;
      } else
        return `
      const ${name} = parseInt(input.shift())`;
    });
    const functionCall = `const result = ${this.functionName}(${this.inputFeilds.map((feild) => feild.name).join(" ,")});`;
    const logResult = `console.log(result)`;
    return `##USER_CODE_HERE##
    ${inputReadingTestCaseFile}
    ${inputReads}
    ${functionCall}
    ${logResult}
    `;
  }
};

// src/index.ts
function generateBoilerPlateCode(filePath) {
  const ipPath = path.join(__dirname, filePath, "Structure.md");
  const boilerPlatePath = path.join(__dirname, filePath, "boilerplate");
  const boilerPlatePathFull = path.join(
    __dirname,
    filePath,
    "boilerplate-full"
  );
  const input = fs.readFileSync(ipPath, "utf-8");
  const parser = new Parser();
  parser.parse(input);
  console.log(input);
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
generateBoilerPlateCode("../../problems/two-sum");
