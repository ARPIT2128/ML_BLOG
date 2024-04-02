import React, { useState } from "react";
import "./Single.scss";
function Single({ blogs }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < blogs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const post = blogs[currentPage - 1];

  return (
    <>
      <div className="container">
        <div id={post.id}>
          <article id={post.id} className={`post-${post.id}`}>
            <div className="post-intro ribbon">
              <header>
                <h1>{post.title}</h1>
                <div className="date">
                  Posted on
                  <div className="actual-date">{post.date}</div>
                </div>
              </header>
              <div className="photo">
                <img
                  width="1200"
                  height="500"
                  src={post.imgUrl}
                  className="image-recognition-photo"
                  alt={post.alt}
                />
              </div>
            </div>
            <div className="body">{post.content}</div>
            <nav id="single-post-nav" className="nav-single clearfix">
              <h3 className="assistive-text">Post navigation</h3>
              <span className="nav-previous">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="btn"
                >
                  <span className="fa fa-chevron-left"></span>
                  Previous Post
                </button>
              </span>
              <span className="nav-next">
                <button
                  onClick={handleNext}
                  disabled={currentPage === blogs.length}
                  className="btn"
                >
                  Next Post
                  <span className="fa fa-chevron-right"></span>
                </button>
              </span>
            </nav>
          </article>
        </div>
      </div>
    </>
  );
}

export default Single;
