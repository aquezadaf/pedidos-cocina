const spawn = require("cross-spawn");
const path = require("path");
const jest = require("jest");

const argv = process.argv.slice(2);

const s = `\\${path.sep}`;
const pattern = process.argv[2] === "e2e"
  ? `test${s}e2e${s}.+\\.spec\\.js`
  : `test${s}(?!e2e${s})[^${s}]+${s}.+\\.spec\\.js$`;

spawn.sync(jest.run(argv), [pattern], { stdio: "inherit" });
