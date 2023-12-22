import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "./controller/blogsController.js";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "./controller/userController.js";
import { resisterUser } from "../Backend/services/userAuth.js";
import { auth } from "./middlewares/authMiddleware.js";
// server initialisation
const server = express();
// const PORT = 8080;

// middlewares
// server.use(auth)
server.use(express.json());
server.use(cors());

// db connection
main().catch((err) => console.log(err));

async function main() {
  // await mongoose.connect("mongodb://127.0.0.1:27017/BlogDB");
  await mongoose.connect(process.env.MONGO_URI);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  console.log("db connected");
}

// blogs routes

server.get("/blogs", getBlogs);

server.get("/blogs/:id", getBlog);

server.post("/blogs", createBlog);

server.put("/blogs/:id", updateBlog);

server.delete("/blogs/:id", deleteBlog);

// users routes

server.get("/users", getUsers);

server.get("/users/:id", getUser);

server.post("/users/signup", resisterUser);

server.post("/users", createUser);

server.put("/users/:id", updateUser);

server.delete("/users/:id", deleteUser);

// server start
server.listen(process.env.PORT, () => {
  console.log("Server running at port ", process.env.PORT);
});
