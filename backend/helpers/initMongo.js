//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://MihirBafna:MihirBafna@lanoscluster.nindp.mongodb.net/LANOSDB?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

//Get the default connection
var db = mongoose.connection;
db.on('connection', () => {
    console.log("connected to mongo boi");
});
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
