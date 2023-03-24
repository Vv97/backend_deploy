const { model } = require("mongoose");
const userModel = require("../model/user.model");


const Validation = async (req, res, next) => {
    const { email } = req.body;
    let val = await userModel.find({ email });
    val.length > 0 ? res.status(400).send({ mssg: "user alredy exist" }) : next()
};


module.exports = Validation;