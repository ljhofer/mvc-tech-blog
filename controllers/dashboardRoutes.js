const router = require('express').Router();
const { User, Entry, Comment } = require('../models');
const withAuth = require('../utils/auth');



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


// TODO: See a single entry -- edit or delete

router.get("/entries/:id", async (req, res) => {
    try {
        const myEntryData = await Entry.findByPk(req.params.id, {
            include: [
              {
                model: User,
                attributes: ['username'],
              },
            ], 
        }
    )}    
})





module.exports = router;