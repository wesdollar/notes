const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/getNotes', (req, res) => {
    const notes = [
        {
            id: 1,
            title: "First Note",
            body: "This is the body."
        },
        {
            id: 2,
            title: "Second Note",
            body: "This is the body."
        },
        {
            id: 3,
            title: "Third Note",
            body: "This is the body."
        }
    ];
    
    return res.json(notes);
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
