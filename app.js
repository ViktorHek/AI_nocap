const interface = require("./ai/interface");
const magic = require('./ai/magic')

let attempts = 0;
const memmory = [];

while (attempts < 3) {
  let res = interface.testRun();
  memmory.push(res);
  attempts++;
}

const rules = magic.getRules(memmory)

interface.realRun(rules)

