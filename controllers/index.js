const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;



// Page Routes // 

// Dashboard Page -- see all your posts

// Single entry/post

// Add entry



// Data Routes //

// Check log in credentials against known users -- needs login.js

// Sign up - Post new user -- needs signin.js? 

// GET all entries

// Get single entry (by id?)

// GET all my entries

// GET one entry by ID

// Add entry -- needs add-entry.js

// Add comment -- needs add-comment.js 


// Which of these need a JS file? Every click or just forms??

