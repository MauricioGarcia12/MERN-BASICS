const notes={};
//creating rest methods and send them to the routes

//Getting db model Note
const Note = require('../models/Note');


notes.getNotes = async (req,res)=>{

   const notes = await Note.find( ); //getting array with all notes
    res.json({notes})
};


notes.createNote = async(req,res)=>{
    const {title, content,date,author}=req.body; //extrancting data from the object
    //creating a note with the data that we get
    const newNote = new Note({
        title,
        content,
        date,
        author
    });
    //save note in DB
    await newNote.save();
    res.json( {message: 'Note Saved'} );
};

notes.getNote= async (req,res) => {
    //getting note from the id
   const note = await Note.findById(req.params.id);
    //sending json of that specific note
    res.json(note);
};


notes.updateNote =async (req,res) =>{
//getting id and params to update from the note
const{title, content, author}= req.body;
await Note.findOneAndUpdate(req.params.id,{
    title,
    content,
    author
});

 res.json( {message: 'Notes Updated'});
}

notes.deleteNote = async (req,res) => {
        //getting note from the id and deleting it
    const note = await Note.findByIdAndDelete(req.params.id);
    res.json({message:'Note deleted'});
}

module.exports = notes;