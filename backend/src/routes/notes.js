//Creating router
const {Router} = require('express');
const { route } = require('./users');
const router =Router();

//exporting controllers
const {getNotes,createNote, updateNote, deleteNote, getNote} =require('../controllers/notesController');



//Creating API

router.route('/')
    .get(getNotes)
    .post(createNote);

router.route('/:id')
    .get(getNote )
    .put( updateNote)
    .delete( deleteNote);

module.exports = router;