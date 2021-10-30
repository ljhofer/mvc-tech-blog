// Imports models
const Comment = require("./Comment");
const Entry = require("./Entry");
const User = require("./User");

// Defines associates between models

User.hasMany(Comment, {
    foreignKey: "user_id", 
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});


User.hasMany(Entry, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Entry.belongsTo(User, {
    foreignKey: "user_id"
});


Entry.hasMany(Comment, {
    foreignKey: "entry_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(Entry, {
    foreignKey: "entry_id"
});

// Allows models to be used in other files
module.exports = {
    Comment, 
    Entry, 
    User,
};