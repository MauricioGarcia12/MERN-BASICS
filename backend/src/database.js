//using mongoose

const mongoose = require('mongoose');
//bringing db from .env
const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI 
: 'mongodb://localhost/databasetest';

mongoose.connect(URI, 
    {useUnifiedTopology: true,
     useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true, });
//creating connection
const connection = mongoose.connection;

connection.once('open' , () =>{
    console.log('DB is Connected');
});