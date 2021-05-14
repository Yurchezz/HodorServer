
const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const  admin = require('firebase-admin');
const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBLuivThsVkMYmgJ2A8itPOs_KaBv8Zrbg",
    authDomain: "zyx-db-c63b6.firebaseapp.com",
    projectId: "zyx-db-c63b6",
    storageBucket: "zyx-db-c63b6.appspot.com",
    messagingSenderId: "131562124156",
    appId: "1:131562124156:web:ae4e56abd7e190e90e2af9",
    measurementId: "G-30VGYYKEYK"
};

const dbApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(dbApp)
//const isOpent = db.collection("hodor").doc("door-state").get();

let isOpen;
app.use(express.json())
app.use(express.text());
app.use(cors())

app.get('/', (req, res)=>{
    db.collection("hodor").doc("door-state").get().then((doc) => {
    
        res.status(200).send( doc.data());
    });
   
})  
app.get('/hello', (req, res)=>{
   
        res.status(200).send( "Hello Nazar");
    
   
})  
app.post('/', (req, res)=>{
    console.log(req.body)
    db.collection('hodor').doc('door-state').set({move: req.body.move}).then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    res.send('Post requrs to the home page')
})
app.listen(port, ()=>{
    console.log('server is listening')
   //console.log(isOpen)
})

// /**
//  * Responds to any HTTP request.
//  *
//  * @param {!express:Request} req HTTP request context.
//  * @param {!express:Response} res HTTP response context.
//  */
//  const firebase = require('firebase');

//  const firebaseConfig = {
//    apiKey: "AIzaSyC-SCSgSEVOKhJxINCHPLaVoAu8H_rv5iw",
//    authDomain: "zyx-db.firebaseapp.com",
//    projectId: "zyx-db",
//    storageBucket: "zyx-db.appspot.com",
//    messagingSenderId: "171330090983",
//    appId: "1:171330090983:web:f5fca7be124075f97d6f42",
//    measurementId: "G-V64EWQEF4S"
//  };
 
//  firebase.initializeApp(firebaseConfig);
//  exports.helloWorld = (req, res) => {
//    //let message = req.query.message || req.body.message || 'Hello World!';
//     switch (req.method) {
//      case 'GET':
//          res.status(200).send('GET!');
//        break;
//      case 'POST':
//        res.status(200).send('POST!');
//        break;
//      default:
//        res.status(405).send({error: 'Something blew up!'});
//        break;
//    }
//    res.status(200).send(firebase);
//  };
 