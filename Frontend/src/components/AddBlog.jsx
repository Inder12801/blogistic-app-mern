import React from "react";

const AddBlog = ({
  blogs,
  addBlog,
  isFormOpen,
  setIsFormOpen,
  setEditMode,
}) => {
  console.log("AddBlog rendered");
  return (
    <div className="addblog">
      <button
        style={{ backgroundColor: isFormOpen ? "red" : "#211553" }}
        className=""
        onClick={(e) => {
          e.stopPropagation();
          setIsFormOpen(!isFormOpen);
          setEditMode(false);
        }}
      >
        {!isFormOpen ? "Add Blog" : "Close"}
      </button>
    </div>
  );
};

export default AddBlog;
