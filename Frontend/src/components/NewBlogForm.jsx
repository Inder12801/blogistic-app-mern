import React, { useContext, useEffect, useState } from "react";
import BlogContext from "../context/BlogContext";
const initialVideo = {
  title: "",
  imgLink: "https://picsum.photos/200/200",
  contributor: "",
  dateOfContribution: "",
  content: "",
  category: ""
};
const NewBlogForm = ({ deleteBlog }) => {
  const [newBlog, setNewBlog] = useState(initialVideo);
  const [selectedCategory, setSelectedCategory] = useState(newBlog.category);

  const {
    _id,
    blogs,
    addBlog,
    isFormOpen,
    setIsFormOpen,
    editMode,
    editableBlog,
    setEditMode,
    setEditableBlog,
    editBlog,
  } = useContext(BlogContext);
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBlog.title.length < 50) {
      if (editMode) {
        console.log(newBlog);
        setEditableBlog(newBlog);
        editBlog(newBlog);
        setNewBlog(initialVideo);
        setEditMode(false);
        setIsFormOpen(!isFormOpen);
      } else {
        if (
          newBlog.title !== "" &&
          newBlog.content !== "" &&
          newBlog.dateOfContribution !== "" && selectedCategory !== ''
        ) {
          if (newBlog.title.length > 50) {
            alert("Too long title");
          } else {
            const newBlogCopy = {
              ...newBlog,
              category: selectedCategory
            }
            addBlog(newBlogCopy);
            setNewBlog(initialVideo);
            setIsFormOpen(!isFormOpen);
          }
        }
      }
    } else {
      alert("Title too long!!!")
    }

  };
  const handleChange = (e) => {
    e.stopPropagation();

    const nV = { ...newBlog, [e.target.name]: e.target.value, };
    setNewBlog({ ...nV });
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    let blogsCopy = [...blogs];
    const blogCopy = blogsCopy.find((e, i) => {
      if (e._id === _id) return e;
    });
    deleteBlog(blogCopy);
    console.log(blogCopy)
  };
  useEffect(() => {
    if (editableBlog && editMode) {
      setNewBlog(editableBlog);
    } else {
      setNewBlog(initialVideo);
    }
  }, [editableBlog]);
  return (
    <div className="formDiv" draggable={true}>
      <form onSubmit={handleSubmit}>
        <h2>Add a new blog</h2>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={newBlog.title}
          onChange={handleChange}
        />
        <input
          name="contributor"
          type="text"
          placeholder="Contributor"
          value={newBlog.contributor}
          onChange={handleChange}
        />
        <input
          name="dateOfContribution"
          type="date"
          value={newBlog.dateOfContribution}
          onChange={handleChange}
        />
        <input type="file"
          placeholder="Upload"
          name="imgLink"
          accept="image/*"
          onChange={handleChange}
        />
        {/* code for category selection */}
        <div className="categoryDiv">
          <label htmlFor="category">Select a category:</label>
          <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">-- Select --</option>
            <option value="travel">Travel</option>
            <option value="sports">Sports</option>
            <option value="food">Food</option>
            <option value="science">Science</option>
            <option value="technology">Technology</option>
            <option value="politics">Politics</option>
            <option value="general">General</option>
          </select>
        </div>

        <textarea
          name="content"
          placeholder="Content"
          value={newBlog.content}
          onChange={handleChange}
        ></textarea>
        <div className="btns">
          <button type="submit" className="">{editMode ? "Edit" : "Add"}</button>
          <button onClick={() => setIsFormOpen(!isFormOpen)} className="">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewBlogForm;
