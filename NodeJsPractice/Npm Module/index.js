const chalk = require("chalk");
const validator = require("validator");

//Usage of Chalk for color coding
console.log(chalk.blue("I am Chalk"));
console.log(chalk.red.italic("italic text"));
console.log(chalk.red.underline("Underline on text"));
console.log(chalk.green.inverse("SUCCESS")); // inverse add background color to text with text color :for SUCCESS
console.log(chalk.red.inverse("ERROR")); // inverse add background color to text with text color :for ERROR
console.log(chalk.yellow.inverse("WARNING !!")); // inverse add background color to text with text color :for WARNING

//Usage of validator for validation
const EmailId = "satya@gmail.com";
const emailValidator = validator.isEmail(EmailId);
console.log(
  "Is email ?",
  emailValidator
    ? chalk.green.inverse(emailValidator)
    : chalk.red.inverse(emailValidator),
);
