const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Entry extends Model {}

// Defines the properties of an entry
Entry.init (
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        entry_title:{
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        entry_text:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            }
        }
    }, 
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "entry",
    }
);

// Exports Entry for use in other files
module.exports = Entry;