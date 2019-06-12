import express from 'express';
import firebase from 'firebase';
import * as config from '../app-env';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    authDomain: config.FIREBASE_AUTH_DOMAIN,
    databaseURL: config.FIREBASE_DATABASE_URL,
    projectId: config.FIREBASE_PROJECT_ID,
    storageBucket: config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID
}
// console.log(config);
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
app.get('/',(req,res)=>{
  console.log(config.FIREBASE_DATABASE_URL);
  //create your first message on firebase
  db.ref('/testMessages').set({
    TestMessage: 'this is a test messsage!'
  });
  // console.log(isCreated);
  res.status(200).send({'message':'Get Request Encountered!'});
});

const server = app.listen('3000',function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('server listening at http://%s:%s',host,port);
});
