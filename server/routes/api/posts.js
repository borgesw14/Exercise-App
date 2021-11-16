const { Router } = require("express");
const Posts = require("../../models/posts");

const router = Router();

//create
router.post('/', async (req, res) => {
    const newPost = new Posts(req.body);
    try {
        const post = await newPost.save(); //try to save post to database
        if(!post){
            throw new Error('Something went wrong posting workout')
        }
        res.status(200).json(post);//on success return status 200
    } catch (error) {
        res.status(500).json({message: error.message}) //on fail return error message
    }
})

//read
router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find()
        if(!posts){
            throw new Error('No Items to return or error retrieving them')
        }
        const sorted = posts.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router