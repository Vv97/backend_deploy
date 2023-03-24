const mongoose = require("mongoose");
require("dotenv").config();

// connect backend with database
const databaseConnect = async () => {
    try {
        await mongoose.connect(process.env.mongoDB_url);
        console.log("db is connected")
    } catch (error) {
        console.log(error);
    };
};

module.exports = databaseConnect;