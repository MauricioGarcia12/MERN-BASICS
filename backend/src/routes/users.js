//Creating router
const {Router} = require('express');
const router =Router();

//exporting controller
const {getUsers,createUser,deleteUser}= require('../controllers/usersController');
const { deleteNote } = require('../controllers/notesController');

router.route('/')
    .get(getUsers)
    .post(createUser);
    
router.route('/:id')
    //.get()
   // .put()
    .delete(deleteUser);


module.exports = router;