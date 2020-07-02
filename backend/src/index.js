require('dotenv').config();

//bringing express
const app = require('./app');
//bringing the db 
require ('./database');
//iniciar programa
async function main(){
    try{
    await app.listen(app.get('port'));
    console.log('server on port',app.get('port'));
    }
    catch(error){
        console.log('That did not go well.')
        throw error
    }
}

main();


