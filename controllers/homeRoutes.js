const router = require('express').Router();
const { User, Entry, Comment } = require('../models');
// const withAuth = require('../utils/auth');


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

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/profile');
    //   return;
    // }
  
    res.render('login');
  });
  

module.exports = router;


























module.exports = router;