import React, { useState } from "react";
import "./Explore.scss";
import { Link } from "react-router-dom";
function Explore({ blogs }) {
  const blogsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container">
        {currentBlogs.map((blog, index) => (
          <div key={index} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={blog.imgUrl}
                  className="card-img img-fluid rounded-start"
                  alt={blog.alt}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5>
                    <Link className={"card-title"} to={"/Single"}>
                      {blog.title}
                    </Link>
                  </h5>
                  <p className="card-text">{blog.description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">{blog.status}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(blogs.length / blogsPerPage)).keys()].map(
          (number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number + 1)}
              className={`page-link ${
                number + 1 === currentPage ? "active" : ""
              }`}
            >
              {number + 1}
            </button>
          )
        )}
      </div>
    </>
  );
}

export default Explore;
