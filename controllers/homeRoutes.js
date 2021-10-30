const router = require('express').Router();
const { User, Entry, Comment } = require('../models');
// const withAuth = require('../utils/auth');

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
        res.status(500).json(err);
    }
});






















module.exports = router;