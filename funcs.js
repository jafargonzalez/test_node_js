
const fs = require('fs');

var addNote = (title,body) => {
  var notes = [] ;
  var note = {
    title ,
    body
    };

    try{
      var noteString = fs.readFileSync('note-data.json');
      notes = JSON.parse(noteString)
    } catch (e){

    }

    var duplicateNotes = notes.filter((note) =>{
      return note.title === title;
    });

    if (duplicateNotes.length === 0){
      notes.push(note);
      fs.writeFileSync('note-data.json',JSON.stringify(notes))
    }


}

module.exports = {
  addNote
}
