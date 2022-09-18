const express = require('express')
const db = require('../models')
const router = express.Router()
const axios = require('axios')

module.exports = router

// GET /entries/new - displays the random word
router.get('/new', (req, res) => {
  const randomWordUrl = 'https://api.api-ninjas.com/v1/randomword';
  axios.get(randomWordUrl).then(apiResponse => {
      const randomWord = apiResponse.data.word; 
      console.log(randomWord)
      res.render('entry/new', {randomWord});
  })
  .catch((error) => {
    res.send('Server error: ' + error)
  })
})

// POST /entries/new - view form for new post 
router.post('/new', isLoggedIn, (req, res) => {
  console.log(req.body)
  db.entry.create({
    title: req.body.title ? req.body.title : null,
    content: req.body.content,
    userId: req.body.userId
  })
  .then((post) => {
    res.redirect('/')
  })
  .catch((error) => {
    res.send('Home/404')
  })
})
// console.log('test')


// GET /entries/:id - display a specific entry 
router.get('/:id', (req, res) => {
  db.entry.findOne({
    where: { id: req.body.entry_id },
    include: [db.user, db.comment]
  })
  .then((entry) => {
    if (!entry) throw Error()
    console.log(entry.user)
    res.render('entries/show')
  })
  .catch((error) => {
    console.log(error)
    res.send('Server Error')
  })
})

// GET /entries/:id/edit -- return a form for editing entries
router.get('/:id/edit')

// PUT /entries/:id -- update a specific entry
router.put('/:id', isLoggedIn, (req, res) => {
  console.log(req.body)
  db.entry.update({
    title: req.body.title ? req.body.title : null,
    content: req.body.content,
    userId: req.body.userId
  })
  .then((post) => {
    res.redirect('/')
  })
  .catch((error) => {
    res.send('Home/404')
  })
})

// DELETE /entries/:id -- Delete a specific entry
router.delete('/:id', (req, res) => {
  res.send('Got a DELETE request at /entries/:id')
})
