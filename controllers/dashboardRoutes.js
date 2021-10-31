const router = require('express').Router();
const { User, Entry, Comment } = require('../models');
const withAuth = require('../utils/auth');



router.get("/", withAuth, (req, res) => {
    Entry.findAll({
        where: {
            user_id: req.session.user_id
        }
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





// TODO: See all your entries
// router.get("/", async (req, res) => {
//     try {
//        // Gets all entries and joins with user data
//        const entryData = await Entry.findAll({
//            include: [
//                {
//                    model: User,
//                    attributes: ["username"],
//                },
//            ],
//        });
       
//        // Serializes data to pass to Handlebars
//        const entries = entryData.map((entry) => entry.get ({ plain:true }));

//        res.render("allentries", { entries });
//    } catch (err) {
//        console.log(err);
//        res.status(500).json(err);
//    }
// });


// TODO: See a single entry -- edit or delete







module.exports = router;