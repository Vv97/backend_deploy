const { Router } = require("express");
const authorization = require("../middleware/authorization.middleware");
const productModel = require("../model/product.model");
const productsRoutes = Router();
const jwt = require("jsonwebtoken");


productsRoutes.use(authorization)

productsRoutes.get("/", async (req, res) => {
    const { userId } = jwt.verify(req.headers.authorization, "volvo");
    try {
        let find = await productModel.find({ userId });
        res.status(200).send(find);
    } catch (error) {
        res.status(400).send({ mssg: "invalid url" });
    };
});

productsRoutes.post("/", async (req, res) => {
    try {
        const newData = new productModel(req.body);
        await newData.save();
        res.status(200).send({ mssg: "product added" })
    } catch (error) {
        res.status(400).send("invalid eror")
    };
});


productsRoutes.patch("/:userId", async (req, res) => {
    let { userId } = req.params;
    try {
        if (userID) {
            await productModel.findByIdAndUpdate({ userId }, req.body);
            res.status(200).send({ mssg: "proudct updated succesful!" });
        } else {
            res.status(400).send({ mssg: "invalid userid" });
        }
    } catch (error) {
        res.status(400).send({ mssg: "bad request" });
    }
});

productsRoutes.delete("/:userId", async (req, res) => {
    let { userId } = req.params;
    try {
        if (userId) {
            await productModel.findByIdAndDelete({ _id: userId });
            res.status(200).send({ mssg: "proudct delete succesful!" });
        } else {
            res.status(400).send({ mssg: "invalid userid" });
        }
    } catch (error) {
        res.status(400).send({ mssg: "bad request" });
    }
});

module.exports = productsRoutes;