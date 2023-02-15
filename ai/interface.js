const prompt = require("prompt-sync")({ sigint: true });

const testRun = function testRun() {
  console.log("testRun");
  const firstDoor = prompt("1: left or right? ");
  console.log("you selected: ", firstDoor);
  const secondDoor = prompt("2: left or right? ");
  console.log("you selected: ", secondDoor);
  const teoDoor = prompt("3: left or right? ");
  console.log("you selected: ", teoDoor);
  return { firstDoor, secondDoor, teoDoor };
};

const realRun = function realRun(rules) {
  console.log('###   real run   ###')
  let firstCheck = false;
  let secondCheck = false;
  let teoCheck = false;
  while (!firstCheck) {
    const firstDoor = prompt("1: left or right? ");
    if(firstDoor === rules[0]){
      console.log("you selected: ", firstDoor);
      firstCheck = true
    } else {
      console.log('wrong door. try again')
    }
  }
  while (!secondCheck) {
    const secondDoor = prompt("2: left or right? ");
    if(secondDoor === rules[1]){
      console.log("you selected: ", secondDoor);
      secondCheck = true
    } else {
      console.log('wrong door. try again')
    }
  }
  while (!teoCheck) {
    const teoDoor = prompt("3: left or right? ");
    if(teoDoor === rules[2]){
      console.log("you selected: ", teoDoor);
      teoCheck = true
    } else {
      console.log('wrong door. try again')
    }
  }
  console.log('you win!!')
};

const exportObj = { testRun, realRun };

module.exports = exportObj;
