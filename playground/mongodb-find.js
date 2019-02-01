const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log("Unable to connect to mongodb")
    }

    console.log("Connected to mongodb server")

    // client.collection('Todos').deleteMany({text: 'Eat lunch'}).then(result => {
    //      console.log(result)
    // } );
    
    //deleteOne  
    // client.collection('Todos').deleteOne({complete: false}).then( result => {
    //     console.log(result);
    // })

    // client.collection('Todos').findOneAndDelete({completed: false}).then( result => {
    //    console.log(result) 
    // })

    // client.collection('Users').deleteMany({name: 'Andrew'}).then( result => {
    //     console.log(result)
    // })

    client.collection('User').findOneAndDelete({
        _id: new ObjectID("5c15937ec995255f3c3a8ad9")
    }).then(result => {
        console.log(result)
    })
    client.close()
})