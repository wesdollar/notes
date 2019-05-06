const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

const getLastNoteId = () => {
    // without db.read(), we get a cached record
    // which gives us the wrong note id
    db.read();

    const lastNote = db.get('notes')
        .sortBy('id')
        .reverse()
        .take(1)
        .value();

    return lastNote[0].id;
};

const getNewNoteId = () => {
    let id = getLastNoteId();
    id++;

    return id;
};

const getNoteDefaults = () => ({
    removed: false
});

module.exports = { getNewNoteId, getNoteDefaults };