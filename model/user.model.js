const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
        unique: true
    },
},
    {
        versionKey: false
    });

const userModel = mongoose.model("registerData", userSchema);

module.exports = userModel;