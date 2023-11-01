const express = require('express')
const app = express()
const dbfile = require('./conn')
const cors = require('cors')

const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


var corsOptions = {
    origin : "http://localhost:4200"
}

app.use(cors(corsOptions));

const postroute = require('./routes/country')   /// to change for diff db file (route file)
const postrouteHS = require('./routes/HouseSize') 
const postrouteO = require('./routes/organization') 
const postrouteEB = require('./routes/employeeband') 
const postrouteHT = require('./routes/houseType') 
const postrouteSU = require('./routes/SignUp')

app.use('/api/country' , postroute)
app.use('/api/houseSizes' , postrouteHS)          /// to change for diff db
app.use('/api/organizations' , postrouteO) 
app.use('/api/employeeband' , postrouteEB)
app.use('/api/houseType' , postrouteHT)
app.use('/api/signup' , postrouteSU)

app.get('/' , (req , res)=>{
    res.end('Helloworld With Node JS and Express JS')
})
app.listen(5000 , function(){

    console.log('Node JS and Express Server Started successfully with Nodemon ;{ now see')

})