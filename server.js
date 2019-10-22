const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./config/database')
const path = require('path')



// Test DB 
db.authenticate()
.then(()=> console.log('connected to the database'))
.catch((err)=> console.log('faild to connect', err.message))



const app = express()


app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.use('/api/article' , require('./routes/article'))
app.use('/api/auth' , require('./routes/user'))
app.use('/api/community' , require('./routes/community'))





const PORT = process.env.PORT || 3001


// app.get('/', (req,res)=> {
//     res.json({Hellloe : "helo all"})
// })



//app.use(express.static('./public'))
//app.use(express.static('./public/build'))
app.use(express.static(path.join(__dirname, 'public/build')));


app.get('*', (req,res)=> {
    ///app.use(express.static('public/build'))
    //res.sendFile(path.join(__dirname+'/public/build/index.html'));
    res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'))
    //res.sendFile(path.resolve(__dirname, 'public/build', 'index.html'))
})



// app.get('/admin', (req,res)=> {
//     res.sendFile(path.resolve(__dirname, 'public', 'build1', 'index.html'))
// })s




app.listen(PORT, () => {
    console.log(`the app is running on ${PORT}`);
})