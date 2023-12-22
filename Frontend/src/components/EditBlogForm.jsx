import React, { useState } from "react";

const EditBlogForm = () => {
  const [eb, setEb] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <h2>Add a new video</h2>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={eb.title}
          onChange={handleChange}
        />
        <input
          name="contributor"
          type="text"
          placeholder="Contributor"
          value={eb.contributor}
          onChange={handleChange}
        />
        <input
          name="dateOfContribution"
          type="date"
          value={eb.dateOfContribution}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={eb.content}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default EditBlogForm;
