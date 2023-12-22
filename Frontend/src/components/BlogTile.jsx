import React, { useContext, useState } from "react";
import BlogContext from "../context/BlogContext";
import { Link } from "react-router-dom";

const BlogTile = ({
  _id,
  title,
  content,
  imgLink,
  contributor,
  dateOfContribution,
  category
}) => {
  const {
    blogs,
    setBlogs,
    isFormOpen,
    setIsFormOpen,
    setEditMode,
    setEditableBlog,
    deleteBlog,
  } = useContext(BlogContext);
  const [readMore, setReadMore] = useState(false);
  console.log("BlogTile rendered");
  const handleEdit = (e) => {
    e.stopPropagation();
    setEditMode(true);
    setIsFormOpen(!isFormOpen);
    setEditableBlog([...blogs].find((b) => b._id === _id));
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    let blogsCopy = [...blogs];
    const blogCopy = blogsCopy.find((e, i) => {
      if (e._id === _id) return e;
    });
    deleteBlog(blogCopy);
  };

  return (
    <div
      className="blogTile"
      style={{ pointerEvents: isFormOpen ? "none" : "" }}
    >
      <img src={imgLink} alt={title} />
      <div className="blogTitle">
        <h2>{title}</h2>
        <span>Contributor : {contributor}</span>
        <span>Date of Contribution: {dateOfContribution}</span>
      </div>

      <p>
        {content.slice(0, 100)}
        <Link to={`/blog/${_id}`}>
          <button style={{ color: "blue", fontSize: "0.8em" }}>
            Read More
          </button>
        </Link>
      </p>

      <div className="btns">
        <button onClick={handleEdit}>Edit</button>
        <button id={_id} onClick={handleDelete}>
          Delete
        </button>
        <span className="categoryName">{category}</span>
      </div>
    </div>

  );
};

export default BlogTile;
