import React from "react";
import { blogPosts } from "../data/mockData";
import "../styles/BlogSection.css";

function BlogSection() {
  return (
    <section className="blog-section">
      <div className="container-2">

        <div className="section-header">
          <h2>Latest Blog Post Insights</h2>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">

              {/* Image */}
              <div className="blog-image">
                <img src={post.img} alt={post.title} />
              </div>

              {/* Content */}
              <div className="blog-content">

                <div className="blog-meta">
                  <div className="meta-item">
                    <i className="fa-regular fa-clock"></i>
                    <span>{post.date}</span>
                  </div>

                  <div className="meta-item">
                    <i className="fa-regular fa-folder"></i>
                    <span>{post.category}</span>
                  </div>
                </div>

                <h4 className="blog-title">{post.title}</h4>

                <a href="/#" className="read-details">
                  <span className="plus-circle">
                    <i className="fa-solid fa-plus"></i>
                  </span>
                  Read Details
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BlogSection;