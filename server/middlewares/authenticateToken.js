const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const authenticateToken = async (req, res, next) => {
    if (req.headers["x-access-token"]) {
        const accessToken = req.headers["x-access-token"];
        const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);

        if (exp < Date.now().valueOf() / 1000) {
            return res.status(401).json({error : "JWT token has expired, please login to obtain a new one !"});
        }
        res.locals.loggedInUser = await User.findById(userId);
        next();
    } else {
        next();
    }
}

module.exports = authenticateToken;