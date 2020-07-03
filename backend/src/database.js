//using mongoose

const mongoose = require('mongoose');
//bringing db from .env
const URI = process.env.MONGODB_URI 
//if exists this db use it
? process.env.MONGODB_URI 
//if not use this one
: 'mongodb://localhost/databasetest';

//config of mongoose
mongoose.connect(URI, 
    {useUnifiedTopology: true,
     useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify:false,
    useUnifiedTopology: true, });
//creating connection
const connection = mongoose.connection;

//if connects print
connection.once('open' , () =>{
    console.log('DB is Connected');
});