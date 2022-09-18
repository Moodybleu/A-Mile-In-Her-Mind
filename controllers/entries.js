const express = require('express')
const db = require('../models')
const router = express.Router()
const axios = require('axios')

module.exports = router
// POST /entries/new - view form for new post 
router.post('/new', (req, res) => {
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
// GET /entries/new - display form for creating new entry
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

// GET /entries/:id - display a specific entry 
router.get('/:id', (req, res) => {
  db.entry.findOne({
    where: { id: req.params.entry_id },
    include: [db.user, db.comment]
  })
  .then((entry) => {
    if (!entry) throw Error()
    console.log(entry.user)
    res.render('entries/show', { entry: entry })
  })
  .catch((error) => {
    console.log(error)
    res.send('Server Error')
  })
})

 // POST /entry/:entry_id/comments - route to save comment to db

router.post('/:id/comments', async (req, res) => {
  //  Get the data from req.body
  // create new comment from data
  // console.log new comment
  // rerender page so the user sees their comment
res.send(req.body)
try {
const newComment = await db.comment.create({
  content: req.body.content,
  userId: req.params.id,
  entryId: req.params.id
})
console.log(newComment)

// 3000/entries/1
res.redirect(`/entries${req.params.id}`)
} catch(err) {
  console.log(err)
}
})
router.get('/edit/:id', (req, res) => {

})

// DELETE /entries/:id -- 
router.delete('/:id', (req,res) => {
  const entryData = readEntryFile()
  const word = wordData[req.params.id]
})
