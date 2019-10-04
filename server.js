const express = require('express')
const bodyParser = require('body-parser')

const db = require('./config/database')



// const _p = new Pool({
//     user : 'postgres',
//     password : '123123123',
//     host : 'localhost',
//     port : 5432,
//     database : 'quonquer'
// })




// Test DB 
db.authenticate()
.then(()=> console.log('connected to the database'))
.catch((err)=> console.log('faild to connect', err.message))



const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/gigs' , require('./routes/gigs'))



const PORT = process.env.PORT || 3001


app.get('/', (req,res)=> {
    res.json({Hellloe : "helo all"})
})

app.listen(PORT, () => {
    console.log(`the app is running on ${PORT}`);
})