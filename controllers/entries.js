let express = require('express')
let db = require('../models')
let router = express.Router()

// POST /entries/new - view form for new post 
router.post('/new', (req, res) => {
  db.entry.create ({
    content: req.body.content,
    userId: req.body.userId
  })
  .then((post) => {
    res.redirect('/')
  })
  .catch((error) => {
    res.send('server error')
  })
})
// console.log('test')
// GET /entries/new - display form for creating new entry
router.get('/new', (req, res) => {
  // res.send('make your post here')
  db.user.findAll()
  .then((entries) => {
    res.render('/entries/new', { entries: entries })
  // res.send(entries)
   }) 
  .catch((error) => {
    res.send('server error')
  })
})

// GET /entries/:entry_id - display a specific post and its user
router.get('/:entry_id', (req, res) => {
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
    res.send('server error')
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

module.exports = router
