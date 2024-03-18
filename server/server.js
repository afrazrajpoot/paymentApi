require("dotenv").config();
const app = require("./app")
const dbConnect = require("./db/connection")

dbConnect()
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port at ${process.env.PORT || 3000}`)
})