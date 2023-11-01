const express = require('express')
const app = express()
const dbfile = require('./conn')
const cors = require('cors');

const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))
const postroute = require('./routes/country')
const postrouteht = require('./routes/housetype')
const postrouteeb = require('./routes/employeeband')
const postrouteog = require('./routes/organization')
const postrouteuser = require('./routes/signup')

// app.use(cors({
//     origin: "http://localhost:4200" // Replace with your allowed origin
//   }));
 var corsOptions = {
     origin : "http://localhost:4200"
 }

app.use(cors(corsOptions));

app.use('/api/country' , postroute)
app.use('/api/housetype', postrouteht)
app.use('/api/employeeband', postrouteeb)
app.use('/api/organization',postrouteog)
app.use('/api/signup',postrouteuser)

app.get('/' , (req , res)=>{
    res.end('Helloworld With Node JS and Express JS')
})
app.listen(5000 , function(){

    console.log('Node JS and Express Server Started successfully with Nodemon ;{ now see')

})