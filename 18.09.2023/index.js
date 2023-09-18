const { Console } = require('console');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Type .help for little help");
let max = 10;
let min = 0;


let numberToGuess = parseInt(Math.random() * (max - min) + min);
let c = 0;
console.log(`Your task is to guess number from ${min} to ${max}`);
var waitForUserInput = function() {
    readline.question("Your number: ", function(number) {
      if (numberToGuess == number){
        readline.close();
        console.log(`Wow y failed ${c} time(s) but y got it.`);
      } else if(number == ".help"){
        console.log(`Number to guess ${numberToGuess}`);
        waitForUserInput();
      } 
      else {
          waitForUserInput();
      }

      ++c;
    });
  }

waitForUserInput();