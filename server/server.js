const {PORT} = require("./config/constants");
require("./config/database");
const app = require("./app");

app.listen(PORT, () =>{
    console.log("Server is listening on Port: ", PORT);
});