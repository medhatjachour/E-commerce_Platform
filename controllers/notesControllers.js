const Note = require('../models/note')

const getall =  async(req, res) => {
try{
    const notes = await Note.find()
    if (!notes){
        return res.status(404).json({ message:"No notes found"})
    }
    res.json({notes})
}catch(err){
    res.status(500).json({message:"server"})
}
}

const getNote  =  async(req, res) => {
    try{
    // get the id 
    const noteId =  req.params.id 
    const note = await Note.findById(noteId)
    if (!note){
        return res.status(404).json({message:"note not found"})
    }
    res.json({the_note: note})
}catch(err){
    res.status(500).json({message:"server"})
}
}

const addNote =async (req, res) => {
    try{
    const note = await Note.create(res.body);
    if (!note){
        return res.status(404).json({message:"note not found"})
    }
    // respond with the new note
    res.json({note:note});
}catch(err){
    res.status(500).json({message:"server"})
}
}

const updateNote = async (req, res) => {
    try{
    // get  the id 
    const noteId = req.params.id;
   
    const note = await Note.findByIdAndUpdate(noteId, req.body)
    // find updated 
    const updated= await Note.findById(noteId)
    if (! updated){
        return res.status(404).json({message:"note not found"})
    }
    res.json({
        note:note,
        updated : updated
    });
}catch(err){
    res.status(500).json({message:"server"})
}
}
 const deleteNote = async(req, res) => {
    try {
    const noteId =  req.params.id 
    const note = await Note.deleteOne({id:noteId})
    res.json({success:"deleted successfully"})
}catch(err){
    res.status(500).json({message:"server"})
}
}

module.exports = {
    getall,
    getNote:getNote,
    addNote :addNote,
    updateNote,
    deleteNote
}