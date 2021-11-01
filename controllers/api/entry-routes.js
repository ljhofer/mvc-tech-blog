const router = require('express').Router();
const { Entry } = require('../../models');
const withAuth = require('../../utils/auth');


// TODO: post a new routes 
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


// TODO: put with id


// TODO: delete with id



module.exports = router;