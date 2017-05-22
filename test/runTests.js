const path = require("path");
const jest = require("jest");

const s = `\\${path.sep}`;
const pattern = process.argv[2] === "e2e"
  ? `test${s}e2e${s}.+\\.spec\\.js`
  : `test${s}(?!e2e${s})[^${s}]+${s}.+\\.spec\\.js$`;

const argv = [
  pattern,
  ...process.argv.slice(2)
];

jest.run(argv);
