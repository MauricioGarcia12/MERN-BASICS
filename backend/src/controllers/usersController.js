const users = {};
//creating rest methods and send them to the routes

const User = require('../models/User');


//GETTING
users.getUsers = async(req,res)=>{
    //getting users from the db
    const users = await User.find();
    res.json(users)
};

//CREATING
users.createUser = async(req,res)=>{
    //using files to create a new user
    const {username} = req.body;
    const newUser =new User({username});
    await newUser.save();
    res.json('User created');
}

//DELETING
users.deleteUser = async (req,res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json('User deleted');
}

module.exports = users;