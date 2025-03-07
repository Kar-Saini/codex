export class Parser {
  problemName: string = "";
  functionName: string = "";
  inputFeilds: { type: string; name: string }[] = [];
  outputFeilds: { type: string; name: string }[] = [];

  parse(input: string) {
    const lines = input.split("\n").map((line) => line.trim());
    let currentSection: string = "";
    lines.map((line) => {
      if (line.startsWith("Problem name"))
        this.problemName = this.extractQuotedValue(line);
      else if (line.startsWith("Function name"))
        this.functionName = this.extractQuotedValue(line);
      else if (line.startsWith("Input Structure")) currentSection = "input";
      else if (line.startsWith("Output Structure")) currentSection = "output";
      else if (line.startsWith("Input Feild") && currentSection === "input") {
        const feild = this.extractField(line);

        if (feild) this.inputFeilds.push(feild);
      } else if (
        line.startsWith("Output Feild") &&
        currentSection === "output"
      ) {
        const feild = this.extractField(line);
        if (feild) this.outputFeilds.push(feild);
      }
    });
  }

  extractField(line: string): { type: string; name: string } | null {
    const match = line.match(/ : (\w+(?:<\w+>)?) (\w+)$/);
    return match ? { type: match[1], name: match[2] } : null;
  }

  extractQuotedValue(line: string): string {
    const match = line.match(/: "(.*)"$/);
    return match ? match[1] : "";
  }

  generateBoilerPlateCodeJs() {
    return `function ${this.functionName} (${this.inputFeilds
      .map((feild) => feild.name)
      .join(" ,")}){\n //Implementation goes here \n return ${this.outputFeilds
      .map((feild) => feild.name)
      .join(" ,")}}`;
  }

  generateFullCodeJs() {
    const inputReadingTestCaseFile = `
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n').join(' ').split(' ');`;

    const inputReads = this.inputFeilds.map(({ name, type }) => {
      if (name.startsWith("list<")) {
        return `const size_${name} = parseInt(input.shift());\n
        const ${name} = input.slice(0, size_${name}).map(Number)`;
      } else
        return `
      const ${name} = parseInt(input.shift());`;
    });

    const functionCall = `const result = ${this.functionName}(${this.inputFeilds
      .map((feild) => feild.name)
      .join(" ,")});`;

    const logResult = `console.log(result);`;

    return `##USER_CODE_HERE##
    ${inputReadingTestCaseFile}
    ${inputReads.join(" ")}
    ${functionCall}
    ${logResult}
    `;
  }
}
