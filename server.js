const express = require('express')
const bodyParser = require('body-parser')

const db = require('./config/database')



// Test DB 
db.authenticate()
.then(()=> console.log('connected to the database'))
.catch((err)=> console.log('faild to connect', err.message))



const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/article' , require('./routes/article'))



const PORT = process.env.PORT || 3001


app.get('/', (req,res)=> {
    res.json({Hellloe : "helo all"})
})

app.listen(PORT, () => {
    console.log(`the app is running on ${PORT}`);
})