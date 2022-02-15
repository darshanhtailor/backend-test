const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
app.use(express.json())

// Register user
app.post('/register', (req, res)=>{
    const user = new User(req.body)
    user.save()
    .then((result)=>{
        res.status(201).send('User has been registered successfully')
    })
    .catch((error)=>{
        res.status(400).send(error.message)
    })
})

// Get data of registered users
app.get('/userData', (req, res)=>{
    User.find({})
    .then((result)=>{
        res.status(200).send(result)
    })
    .catch((error)=>{
        res.status(404).send('Couldn\'t connect to Database.')
    })
})

app.listen(8080, ()=>{
    console.log('server started on port 8080')
})