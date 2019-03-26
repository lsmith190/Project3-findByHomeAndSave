const express = require('express')
const app = express()
const userController = require('./controllers/userController.js')
const homesController = require('./controllers/homesController.js')
const allHomesController = require('./controllers/allHomesController')
const bodyParser = require('body-parser')

app.use(express.json())
    // app.use(express.static(__dirname + '/client/build/'));

app.use('/api/user', userController)
    // app.use('/api/allhomes', allHomesController)
app.use('/api/user/:id/homes', homesController)

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/build/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})