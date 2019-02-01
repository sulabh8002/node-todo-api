// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb')
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

//    client.collection('Todos').insertOne({
//        text: 'Dinner',
//        completed: true
//    }, (err, result) => {
//        if(err) {
//            return console.log('Unable to insert todo', err);
//        }

//        console.log(JSON.stringify(result.ops[0]._id, undefined, 2));
//    });
    
    client.close();
});