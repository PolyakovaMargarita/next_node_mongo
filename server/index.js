const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use("/api/post", require("./routes/post.routes"))


async function start() {
    try {
        await mongoose.connect("mongodb+srv://root:root@cluster0.qbbffka.mongodb.net/relax_post?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        app.listen(PORT, () => {
            console.log("Server start on port " + PORT)
        })


    } catch (e) {
        console.log(e)
    }
}

start()