const router = require('express').Router();
const { User, Entry, Comment } = require('../models');
const withAuth = require('../utils/auth');


// Displays all blog entries on page load
router.get("/", async (req, res) => {
     try {
        // Gets all entries and joins with user data
        const entryData = await Entry.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username"],
                },
            ],
        });
        
        // Serializes data to pass to Handlebars
        const entries = entryData.map((entry) => entry.get ({ plain:true }));

        res.render("allentries", { entries });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// Displays a single entry by id
router.get('/entries/:id', async (req, res) => {
    try {
      const entryData = await Entry.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment,
            attributes: ['comment_text', "user_id", "created_at"],
          },
        ],
      });
  
      const entry = entryData.get({ plain: true });
      
      res.render('entrywithcomments', {
        ...entry,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
});
  

// Displays sign up HTML when user clicks sign up
router.get("/signup", (req, res) => {
    res.render("signup");
})



module.exports = router;


























module.exports = router;