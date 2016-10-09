// NPM libraries
const fs = require('fs');
const q = require('q');
const chalk = require('chalk');
// User libraries
const Pinky = require("./pinky.js");

q.all(
  [1,2,3,4].map((i, index) => {
    return Pinky.readFile(`files/file-${i}.txt`)
  })
).
then(results => {
  results.forEach((result, index) =>  {
    if (index % 2 === 1)
      console.log(`Contents of file #${index + 1}: ${result}`);
    else
      console.log(chalk.yellow.bgBlue(`Contents of file #${index + 1}: ${result}`));  
  });
}).
catch(error => {
  console.log(error)
});
