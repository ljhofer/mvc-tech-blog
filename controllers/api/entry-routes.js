const router = require('express').Router();
const { Entry } = require('../../models');
const withAuth = require('../../utils/auth');


// Adds new blog entry to database
router.post('/', withAuth, async (req, res) => {
    try {
      const newEntry = await Entry.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newEntry);
    } catch (err) {
      res.status(400).json(err);
    }
  });


// Updates an entry by id
router.put('/:id', withAuth, (req, res) => {
  Entry.update (req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(updatedEntry => res.json(updatedEntry))
  .catch(err => res.status(400).json(err));
});



  // TODO: delete with id



module.exports = router;