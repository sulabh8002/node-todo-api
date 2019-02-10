<<<<<<< HEAD
const {MongoClient, ObjectID} = require('mongodb')

var obj = new ObjectID()
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected to MongoDB server');


    client.close()
})
=======
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
>>>>>>> 82dbc752ad30bd7f07fefc86de668461a639680f
