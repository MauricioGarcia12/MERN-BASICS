//Creating router
const {Router} = require('express');
const router =Router();

router.route('/')
    .get((req,res)=>res.send('Users'))
    .post();
    
router.route('/:id')
    .put()
    .delete();


module.exports = router;