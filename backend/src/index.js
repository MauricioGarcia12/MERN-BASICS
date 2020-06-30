require('dotenv').config();

//bringing express
const app = require('./app');
//bringing the db 
require ('./database');
//iniciar programa
async function main(){
    try{
    await app.listen(4000);
    console.log('server on 4000');
    }
    catch(error){
        console.log('That did not go well.')
        throw error
    }
}

main();


