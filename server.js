const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./config/database')



// Test DB 
db.authenticate()
.then(()=> console.log('connected to the database'))
.catch((err)=> console.log('faild to connect', err.message))



const app = express()


app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.use('/article' , require('./routes/article'))
app.use('/auth' , require('./routes/user'))
app.use('/community' , require('./routes/community'))





const PORT = process.env.PORT || 3001


app.get('/', (req,res)=> {
    res.json({Hellloe : "helo all"})
})



app.get('/voidmain', (req,res)=> {
    const a = []

    const b = []

    for(let i = 0 ; i < 100 ; i++){
        a.push(i)
    }



    for(let i = 0 ; i < a.length ; i++){
        if(a[i] % 2 == 0){
            b.push(a[i])
        }
    }


    res.json(b)

})




app.listen(PORT, () => {
    console.log(`the app is running on ${PORT}`);
})