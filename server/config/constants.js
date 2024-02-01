const dotenv = require('dotenv');
const {join} = require("path");
dotenv.config({ path: join(__dirname, "../../.env") });

module.exports = {
    PORT : process.env.PORT || 8000,
    JWT_SECRET : process.env.JWT_SECRET,
    DB_URI : process.env.DB_URI,
}