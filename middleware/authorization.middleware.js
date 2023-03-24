const jwt = require("jsonwebtoken");


// authorization
const authorization = (req, res, next) => {
    let auth = req.headers.authorization;
    const decoded = jwt.verify(auth, "volvo")
    if (decoded) {
        req.body.userId = decoded.userId;
        next();
    } else {
        res.status(400).send({ mssg: "register is required!" })
    };
}

module.exports = authorization;