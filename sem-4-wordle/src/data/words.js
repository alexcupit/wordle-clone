const { readFile } = require("fs/promises");

const words = readFile("./words.txt", "utf-8").then((res) => {
  console.log(res);
});
