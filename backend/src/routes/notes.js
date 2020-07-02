//Creating router
const {Router} = require('express');
const { route } = require('./users');
const router =Router();

router.route('/')
    .get((req,res)=>res.send('Notes'))
    .post();

//router.route('/:id')
   // .put()
   // .delete();

module.exports = router;