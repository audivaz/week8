const express = require("express");

const app = express();

const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"), (err) => {
    if (err) {
      console.log(err);
    }
  });
});

//! Step 15 - Code is good here Audi. Only issue is you have passed the view/login.html file
//! on line 16 as your sendFile as opposed to index.html. The view files were given as part of
//! the instructions for the homework. Just put those view files (html pages) in a views folder
//! in your hw_3 directory.

app.get("/page", (req, res) => {
  res.end("This is a profile page");
});

//! Missing the colon in your path here. Should be '/:page' on line 28. Also should have
//! conditional statements to check for the page number requested. Also you would need the
//! view pages from the instructions to make this work properly. I will give you the answer
//! below:

/* Step 16

app.get('/:page', (req, res) => {
    
    if (req.params.page == 1 ) {
        res.sendFile(path.join(__dirname, `views/page_1.html`))
    
    } else if (req.params.page == 2 ) {
        res.sendFile(path.join(__dirname, `views/page_2.html`))

    } else if (req.params.page == 3 ) {
        res.sendFile(path.join(__dirname, `views/page_3.html`))
    }    
});

*/

app.get("/post", (req, res) => {
  res.end("This is a profile page");
});

//! Step 17 - This step is trying to get whatever username you entered in the input box
//! and post it to the page. You need the view pages to test this and figure it out.
//! Code should be :

/* Step 17

app.post('/', (req,res)=> {
    res.end(`<h1>This is ${req.body.username}'s page</h1>`);
})

*/

app.listen(PORT, () => {
  console.log("server running on port ${PORT}...");
});

//! You need template literals here instead of just quotes to make the ${PORT} work
//! as you intended. console.log(`server running on port ${PORT}`);
