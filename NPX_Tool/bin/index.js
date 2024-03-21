#! /usr/bin/env node
/*
Above line should be added to all files that will be executed through
the command line.It's called a Shebang, and basically, it specifies
what interpreter the file should be passed to for execution in
Unix - like systems.
*/

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Please Enter at least 2 numbers");
  process.exit(1); //an error occured
}

const total = args.reduce((previous, current) => {
  return parseFloat(current) * parseFloat(previous);
});

if (isNaN(total)) {
  console.error("One or more arguments are not numbers");
  process.exit(1); //an error occured
}

console.log(total);
process.exit(0); // no erros occured
