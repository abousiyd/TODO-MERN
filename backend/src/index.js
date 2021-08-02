require('dotenv').config()

const app = require('./app');
require('./database')

const PORT = 4000;

async function main() {
    await app.listen(PORT, (err) => {
        if(err) {
            console.log('error en el puto servidor')
        }else{
            console.log('el servidor escucha por', app.get('port'))
        }
    })
}

main()