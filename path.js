// 9
const path = require("path");

// 10
const myPath = "./import.js/export.js";

//! You need to use path.join here with the proper paramaters. I will show the answer below:

//!  var myPath = path.join(__dirname, "some_folder", "hello.txt");

// 11

var pathObject = path.parse(myPath);
console.log(pathObject);

//! This is correct, however it does not return all the info we want, such as the root and full file path. If you use path.join as shown above, you will see the difference.
