
import Blog from "../model/blogModel.js"

console.log(Blog)

const createBlog = async (req, res) => {
    try {
        const blog = await Blog(req.body)
        blog.save();
        res.send(req.body);
        console.log("Create blog");
    } catch (err) {
        console.log(err)
    }
}
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.json(blogs)
    } catch (err) {
        console.log("All blogs");
    }
}
const getBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findOne({ _id: id });
        res.json(blog);
    } catch (err) {
        console.log(err);
    }
}

const updateBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findOneAndUpdate({ _id: id }, { ...req.body });
        res.json(blog);
    } catch (err) {
        console.log("Update blog");
    }
}
const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findOneAndDelete({ _id: id })
        res.json(blog);
    } catch (err) {
        console.log("Delete blog");
    }
}

export { getBlogs, getBlog, createBlog, updateBlog, deleteBlog };
