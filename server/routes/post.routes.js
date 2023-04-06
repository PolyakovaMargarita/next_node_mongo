const { Router } = require("express")
const router = Router()
const Post = require("../models/Post")

router.post("/add", async (req, res) => {
    try {
        const { text, title, imgUrl } = req.body

        const post = new Post({
            title, text, imgUrl
        })

        await post.save()
        res.json(post)
    } catch (e) {
        console.log(e)
    }
})

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (e) {
        console.log(e)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const post = await Post.findById(id)
        res.json(post)
    } catch (e) {
        console.log(e)
    }
})

router.post("/remove", async (req, res) => {
    try {
        const { id } = req.body
        await Post.findByIdAndRemove(id)
        res.json("good")
    } catch (e) {
        console.log(e)
    }
})

module.exports = router
