import React from "react";
import Blog1 from "../../../assets/home/blog1.png";
import Blog2 from "../../../assets/home/blog2.png";
import Blog3 from "../../../assets/home/blog3.png";

const Blog = () => {
  return (
    <div
      className="d-flex align-items-center flex-column"
      style={{
        paddingLeft: "9.5833vw",
        paddingRight: "9.5833vw",
        paddingTop: "3.3333vw",
        marginBottom: "4vw"
      }}
    >
      <span className="excelent-header">
        OUR <span className="excelent-header2">BLOG</span>
      </span>
      <div
        className="d-flex justify-content-center"
        style={{ width: "52.9167vw", height: "6.1111vw" }}
      >
        <span className="excelent-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
          ultrices sed adipiscing malesuada aliquam nisl fusce sit. Scelerisque
          suspendisse feugiat lectus nulla ullamcorper porttitor purus enim.
          Volutpat mattis amet semper volutpat odio. Risus faucibus interdum
          volutpat nibh venenatis.
        </span>
      </div>
      <div className="d-flex flex-row" style={{gap:'1.2vw'}}>
        <div
          className="d-flex flex-column"
          style={{ width: "26.3889vw", borderRadius: "0.9722vw", gap: '0.9vw' }}
        >
          <img
            src={Blog1}
            alt="blog"
            style={{
              width: "26.3889vw",
              height: "21.5278vw",
              borderRadius: "0.9722vw",
            }}
          />
          <span className="blog-title">The Medical Experts Carefully...</span>
          <span className="blog-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim
            fames quam pellentesque interdum purus senectus feugiat elit.c.
          </span>
          <div className="d-flex justify-content-center align-items-center blog-botton">READ MORE</div>
        </div>
        <div
          className="d-flex flex-column"
          style={{ width: "26.3889vw", borderRadius: "0.9722vw", gap: '0.9vw' }}
        >
          <img
            src={Blog2}
            alt="blog"
            style={{
              width: "26.3889vw",
              height: "21.5278vw",
              borderRadius: "0.9722vw",
            }}
          />
          <span className="blog-title">The Medical Experts Carefully...</span>
          <span className="blog-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim
            fames quam pellentesque interdum purus senectus feugiat elit.c.
          </span>
          <div className="d-flex justify-content-center align-items-center blog-botton">READ MORE</div>
        </div>
        <div
          className="d-flex flex-column"
          style={{ width: "26.3889vw", borderRadius: "0.9722vw", gap: '0.9vw' }}
        >
          <img
            src={Blog3}
            alt="blog"
            style={{
              width: "26.3889vw",
              height: "21.5278vw",
              borderRadius: "0.9722vw",
            }}
          />
          <span className="blog-title">The Medical Experts Carefully...</span>
          <span className="blog-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim
            fames quam pellentesque interdum purus senectus feugiat elit.c.
          </span>
          <div className="d-flex justify-content-center align-items-center blog-botton">READ MORE</div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
