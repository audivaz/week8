// 12

const path = require("path");

const fs = require("fs");

// 13

fs.mkdir(path.join(__dirname, "myNewFolder"), {}, (err) => {});

//! Your mkdir is correct, but you need to have some way of console logging the error inside your curlies. I'll show the answer below:

/*

fs.mkdir(path.join(__dirname, 'myNewFolder'), {}, (err) => {
    if (err) {
        console.log(err);
    }
})

*/

// 14

fs.access(path.join(__dirname, "myNewFolder"), fs);

//! You are missing a lot here. Good job on the fs.access part, but you need to have some logic inside this method to determine what to do if the folder was
//! not accessible. You also need to handle the error if there is one. I will give you the answer here, please reach out to me sometime to go over how this works.blue

/* 

fs.access(path.join(__dirname, "myNewFolder"), fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdir(path.join(__dirname, "myNewFolder"), {}, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    console.log("folder already created");
  }
});

*/

//! You are missing steps 15 and 16. I assume because you had issues creating the folder in the first place. You can have until the end of the week to add these steps
//! with the answers I gave above. I know you will be busy with the project, but let me know if you need any help.
