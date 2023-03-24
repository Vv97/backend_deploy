const { Router } = require("express");
const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const Validation = require("../middleware/user.middleware");
const jwt = require("jsonwebtoken");
const userRoutes = Router();

// add new data from /user to rigister collection
userRoutes.post("/register", Validation, async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // converting plan passowrd  into hasing password
        bcrypt.hash(password, 7, async (err, hash) => {
            const newUserData = userModel({
                username,
                email,
                password: hash
            });

            await newUserData.save();
            res.status(200).send({ mssg: "register is succesful!" });
        });
    } catch (error) {
        res.status(400).send({ mssg: "bad request" });
    };
});

// login
userRoutes.post("/login", async (req, res) => {
    const { email, password } = req.body;
    let userData = await userModel.findOne({ email });
    if (userData) {
        bcrypt.compare(password, userData.password, (err, result) => {
            result ? res.status(200).send({ mssg: "login Succesful!", token: jwt.sign({ userId: userData.id }, "volvo") }) : res.status(400).send("wrong password")
        })
    } else {
        res.status(400).send({ mssg: "no user exsit" });
    };
});

module.exports = userRoutes;