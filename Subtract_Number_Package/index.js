#! /usr/bin/env node

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Please Enter at least 2 numbers");
  process.exit(1); //an error occured
}

const total = args.reduce((a, b) => {
  return parseFloat(a) - parseFloat(b);
});

if (isNaN(total)) {
  console.error("One or more arguments are not numbers");
  process.exit(1); //an error occured
}

console.log("Result:", total);
process.exit(0); // no erros occured

/***
 * To test it locally
 * npm i -g
 * npx multiply (anywhere in terminal)
 * TO TEST IT after publishing on NPM
 * npx @waqas_nazir/substract_number_package (anywhere in terminal)
 */
