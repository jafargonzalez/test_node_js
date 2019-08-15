// const mongodb = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err , client) => {
  if (err){
      console.log('Unable to connect to mongodb');
  }
  console.log('Conncetd!');
  const db = client.db('TodoApp');

  db.collection('Todos').find({
    _id: new ObjectID('5d551083f6bdbc48a69dbfbe')
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) =>{
    console.log('Unable to fetch todos',err);
  });

  // db.close();
});
