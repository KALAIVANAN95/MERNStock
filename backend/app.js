const express = require("express")
const mongoose = require("mongoose")
const router = require('./routes/book-routes')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')


app.use(bodyParser.json()) // for parsing application/json
app.use(cors())
//This is middle wares localhost
// app.use('/', (req, res, next) => {
//     res.send("Welcome to first page");
// })

app.use('/books', router)

//app.use(express.json())

mongoose.connect(

    "mongodb+srv://admin:RLSFqnjXcGx1PTK6@cluster0.w9cgkgr.mongodb.net/?retryWrites=true&w=majority"
    //  "mongodb+srv://admins:9SidIjHnzKFTNcZl@cluster0.hpenz5z.mongodb.net/?retryWrites=true&w=majority"
)
    .then(() => console.log("Conneted to the database"))
    .then(() => {
        app.listen(5000)
    })
    .catch((err) => console.log(err))




//CMvhn6mO9wo0yfQq

//9SidIjHnzKFTNcZl

//mongodb+srv://admin:9SidIjHnzKFTNcZl@cluster0.hpenz5z.mongodb.net/?retryWrites=true&w=majority