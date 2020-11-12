

// 12

const path = require('path');

const fs = require('fs');




// 13

fs.mkdir(path.join(__dirname, 'myNewFolder'), {}, (err) => {

});





// 14

fs.access(path.join(__dirname, 'myNewFolder'), fs);