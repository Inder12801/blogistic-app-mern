import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BlogContext from "./context/BlogContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import BlogDetail from "./components/BlogDetail";
import { useState } from "react";
import SignUp from "./components/SignUp";

function App() {
  console.log("App rendered");
  const API_URL = "http://localhost:8080/blogs";
  const BLOGS_KEY = "blogs_key";
  console.log("Hero rendered");
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editableBlog, setEditableBlog] = useState(null);
  const [user, setUser] = useState({});
  const addBlog = async (blog) => {
    blog = { ...blog };
    const result = await axios.post(API_URL, blog);
    console.log(result.data);
    setBlogs((blogs) => [...blogs, blog]);
  };
  const editBlog = async (blog) => {
    const index = blogs.findIndex((b) => b._id === blog._id);
    const newBlogs = [...blogs];
    const result = await axios.put(API_URL + `${newBlogs[index]._id}`, blog);
    newBlogs[index] = blog;
    setBlogs(newBlogs);
  };
  const deleteBlog = async (blog) => {
    const index = blogs.findIndex((b) => b._id === blog._id);
    const newBlogs = [...blogs];
    const result = await axios.delete(API_URL + `${blog._id}`);
    newBlogs.splice(index, 1);
    setBlogs(newBlogs);
  };

  const registerUser = async () => {
    const result = await axios.post(API_URL, user);
    console.log(result.data);
    setUser((user) => [...user, user]);
  };
  const getBlogsFromAPI = async () => {
    const result = await axios.get(API_URL);
    console.log("Data fetched from API ", result.data);
    setBlogs(result.data);
  };

  const value = {
    blogs,
    setBlogs,
    isFormOpen,
    setIsFormOpen,
    editMode,
    setEditMode,
    editableBlog,
    setEditableBlog,
    addBlog,
    editBlog,
    deleteBlog,
    getBlogsFromAPI,
    user,
    setUser,
    registerUser,
    API_URL,
  };
  return (
    <BrowserRouter>
      <BlogContext.Provider value={{ ...value }}>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/blog/:blogID" element={<BlogDetail />} />
            <Route path="/user/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </div>
      </BlogContext.Provider>
    </BrowserRouter>
  );
}

export default App;
