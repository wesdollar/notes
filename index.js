const express = require('express');
const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const bodyParser = require('body-parser');
const { getNewNoteId, getNoteDefaults } = require('./utils/notes');

const adapter = new FileSync('db.json');
const db = low(adapter);

const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/getNotes', (req, res) => {
    db.read();

    const notes = db.get('notes')
        .filter({ removed: false })
        .sortBy('id')
        .reverse()
        .value();
    
    return res.json(notes);
});

app.post('/api/createNote', (req, res) => {
    const { title, body } = req.body;
    const id = getNewNoteId();

    const note = {
        id,
        title,
        body,
        ...getNoteDefaults()
    };

    db.get('notes')
        .push(note)
        .write();

    res.json(note);
});

app.put('/api/updateNote/:noteId', (req, res) => {
    const { title, body } = req.body;
    const { noteId } = req.params;

    const note = {
        title,
        body
    };

    db.get('notes')
        .find({id: parseInt(noteId)})
        .assign(note)
        .write();

    res.json(note);
});

app.get('/api/notes/:noteId', (req, res) => {
    const { noteId } = req.params;

    const note = db.get('notes')
        .find({id: parseInt(noteId)})
        .value();

    res.json(note);
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
