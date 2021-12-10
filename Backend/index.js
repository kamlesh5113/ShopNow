const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');

const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://kaml:Kamlesh@cluster0.9xuiw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(connectionString);

 app.use(methodOverride('_method'));
 app.use(bodyParser.urlencoded({extended:true}))
 app.use(express.json())
 app.use(cors())

var db;
var register;
MongoClient.connect(connectionString, { useUnifiedTopology:true }).then(client => {
    console.log('Connected to Database from kaml');
    db=client.db('Kaml@');
    register=db.collection('Coll');
});
app.post('/insert',(req,res) => {
    register.insertOne({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }).then(function(succ){
        res.send('true');
    }).catch(function(err){
        res.send('error');
    })
})
app.post('/insert1',(req,res) => {
    register.insertOne({
        name:req.body.name,
        email:req.body.email,
        query:req.body.query
    }).then(function(succ){
        res.send('true');
    }).catch(function(err){
        res.send('error');
    })
})
app.post('/login',(req,res)=>
{
    const email=req.body.email;
    const password=req.body.password;
    register.findOne({password:password,email:email},function(err,suc){
        if(err) throw err;
        if(suc)
        {
            res.send('true');
        }
        else
        {
            console.log("Invalid");
            res.send('false');
        }
    })
})

app.listen(3000,()=>
{
    console.log("Server Started");
})