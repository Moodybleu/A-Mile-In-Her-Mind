// require packages
require('dotenv').config()
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const db = require('./models')
const cookieParser = require('cookie-parser')
const crypto = require('crypto-js')
const axios = require('axios')
const methodOverride = require("method-override")
// const controllers = require('./controllers')

// config express app/middleware
const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(methodOverride('_method'));
app.use(express.urlencoded({  extended: false }))
app.use(cookieParser())

// our custom auth middleware
app.use(async (req, res, next) => {
    // console.log('hello from a middleware)
    res.locals.myData = 'hello, fellow route'
    // if there is a cookie on the incoming request
    if(req.cookies.userId) {
        // decrypt the user id before you look up the user in the db
        const decryptedId = crypto.AES.decrypt(req.cookies.userId.toString(), process.env.ENC_SECRET)
        const decryptedIdString = decryptedId.toString(crypto.enc.Utf8)
        // look up the user in the db
        const user = await db.user.findByPk(decryptedIdString)
        // mount the user on the res.locals
        res.locals.user = user
        // if there is no cookie -- set the user to be null in the res.locals
    } else {
        res.locals.user = null
    }

    // move on to the next route or middleware in the chain
    next()

})
//  Controllers
app.use('/users', require('./controllers/user'))
app.use('/entries', require('./controllers/entries'))

// route definitions
app.get('/', (req, res) => {
    db.entry.findAll({
        include: [db.user]
    }) .then((entries) => {
        res.render('home', { entries })
    }) .catch ((error) => {
        console.log(error)
        res.status(400).render('Home/404')
    })
    // console.log('the currently logged in user is:', res.locals.user)
    
})

// listen on a port
app.listen(PORT, () => {
console.log(`This is a safe space on port ${PORT}`)
})