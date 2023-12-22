import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

// Schema

const blogSchema = new Schema({
  title: { type: String, required: true },
  imgLink: { type: String, default: "https://picsum.photos/200/200" },
  contributor: { type: String, default: "Anonymous" },
  dateOfContribution: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String },
});

// Model

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
