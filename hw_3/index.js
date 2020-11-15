const express = require('express');

const app = express();

const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));





app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
        if (err) {
            console.log(err);
        }
    });
});



app.get('/page', (req, res) => {
    res.end('This is a profile page');
});


app.get('/post', (req, res) => {
    res.end('This is a profile page');
});




app.listen(PORT, () => {
    console.log('server running on port ${PORT}...');
});
