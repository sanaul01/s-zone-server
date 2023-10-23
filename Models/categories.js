const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: [true, "Please provide a name"],
        lowercase: true,
        unique: true
    },

    description: String,

    imageURL: {
        type: String,
        validate: [validator.isURL, "please provide a valid url"],
    },
}, {
    timestamps: true
});

const Category = mongoose.model("Category", categorySchema);

exports = Category;