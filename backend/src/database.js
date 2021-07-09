const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI, 555555)
const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/databasetest' //en el caso de que no encuentre la 1r opcion pues me creara una db por defecto
;
mongoose.connect(URI, {
    useNewUrlParser: true, 
    useCreateIndex: true
});

//Get the default connection
const connection = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
connection.on('error', () => {
    console.error.bind(console, 'MongoDB connection error:')
});

connection.once('open', () => {
    console.log('dertihaa')
});