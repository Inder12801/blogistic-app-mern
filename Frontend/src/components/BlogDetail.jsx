import React, { useContext, useEffect, useState, useTransition } from "react";
import BlogContext from "../context/BlogContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { API_URL } = useContext(BlogContext);
  const [blogDetails, setBlogDetails] = useState({});
  const { blogID } = useParams();

  const fetchBlog = async () => {
    const res = await axios.get(API_URL + `${blogID}`);
    setBlogDetails(res.data);
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="blogDetail">
      <img src={blogDetails.imgLink} alt={blogDetails.title} />
      <div className="blogTitle">
        <h2>{blogDetails.title}</h2>
        <span>Contributor : {blogDetails.contributor}</span>
        <span>Date of Contribution: {blogDetails.dateOfContribution}</span>
      </div>
      <p>{blogDetails.content}</p>
      {/* <div className="btns">
                <button onClick={handleEdit}>Edit</button>
                
                <button id={id} onClick={handleDelete}>
                    Delete
                </button>
            </div> */}
    </div>
  );
};

export default BlogDetail;
