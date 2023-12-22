import React, { useContext, useEffect, useState } from "react";
import BlogTile from "./BlogTile";
import AddBlog from "./AddBlog";
import blogsData from "../data/data";
import NewBlogForm from "./NewBlogForm";
import BlogContext from "../context/BlogContext";
import BlogDetail from "./BlogDetail";


const Hero = () => {

  const { blogs, getBlogsFromAPI, isFormOpen, setIsFormOpen, setEditMode, deleteBlog } = useContext(BlogContext)
  useEffect(() => {
    // localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
    getBlogsFromAPI();
  }, []);
  return (

    <div className="hero" style={{ "overflowY": isFormOpen ? "hidden" : "auto" }}>
      {blogs.map((blog) => {
        return <BlogTile key={blog._id} {...blog} />;
      })}
      <AddBlog
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
        setEditMode={setEditMode}
      />
      {isFormOpen && <NewBlogForm deleteBlog={deleteBlog} />}
    </div>

  );
};

export default Hero;
