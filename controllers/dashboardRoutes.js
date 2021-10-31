const router = require('express').Router();
const { User, Entry, Comment } = require('../models');
const withAuth = require('../utils/auth');


// Displays all entries form user who is logged in
router.get("/", withAuth, (req, res) => {
    Entry.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: [
            {
                model: User,
                attributes: ["username"],
            },
        ],
    })
    .then(allMyEntries => {
        const myEntries = allMyEntries.map((entry) => entry.get ({ plain:true }));

        res.render("allmyentries", { myEntries });
    })
    .catch (err => {
        console.log(err);
        res.status(500).json(err);
    }) 
});


// Displays a single entry by user who is logged in 
router.get("/entries/:id", withAuth, async (req, res) => {
    try {
        const myEntryData = await Entry.findByPk(req.params.id, {
            include: [
              {
                model: User,
                attributes: ['username'],
              },
            ], 
        });

        const myEntry = myEntryData.get ({ plain: true});

        res.render("editentry", {
            ...myEntry,
            loggin_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }    
});

router.get("/add", (req, res) => {
    res.render("addentry");

});


module.exports = router;