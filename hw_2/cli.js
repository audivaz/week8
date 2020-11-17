const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Hello what is your name?/n");

//! Great job!

rl.on('line') () => {
    if (input === 'exit') {
        close();
    } else {
        console.log('Nice to meet you (userInput)\n');
    };
};

//! You are on the right track here Audi, just a few syntax errors. First you need to wrap the whole thing in some parenthesis, and have a comma between your line event and your callback function
//! You also need to pass the userInput as a paramater of your callback function so that it knows what the user entered. Also, you need to call the close method of the readline module, so on line 11
//! it should be rl.close(); instead of just close(); And lastly, use a template literal on line 13 to print your userInput using ${} syntax. Correct code is below:

/*

rl.on("line", (userInput) => {
  if (userInput === "exit") {
    rl.close();
  } else {
    console.log(`Nice to meet you ${userInput}`);
  }
});

*/

//! You are missing the last step, which was to add an event listener on the close event. You probably stopped because you had trouble with the line event. I will show you the correct way to code
//! the close event below:

/*

rl.on("close", () => {
  console.log("Goodbye!");
});

*/