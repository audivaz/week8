

const readline = require('readline');




const rl = readline.createInterface({ input: process.stdin, 
    output: process.stdout});
    console.log('Hello what is your name?/n'); 

rl.on('line') () => {
    if (input === 'exit') {
        close();
    } else {
        console.log('Nice to meet you (userInput)\n');
    };
};