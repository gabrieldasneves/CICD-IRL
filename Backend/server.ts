const { execSync } = require("child_process");

console.log("Building");

console.log("result: ", execSync(`ls -la && cd ../ && ls -la`).toString());
