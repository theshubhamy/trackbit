import React from "react";
import "./App.css";
import OfficeImage from "./assets/officeImage.jpg";
import BlogCard from "./componants/BlogCard";
import { blogData } from "./_mock/blogMock";
import {
  EnvelopeOpenIcon,
  PhoneArrowDownLeftIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
function App() {
  return (
    <div className="appcontainer">
      <div className="hero">
        <div className="heroimg">
          <img src={OfficeImage} alt="Hero" height={"213px"} width={"1920px"} />
        </div>

        <div className="hero-desc">
          <h1> Blog</h1>
          <p>Home :: Blog</p>
        </div>
      </div>

      <div className="blogcontainer">
        <div className="blog-header">
          <h1>Our Blog</h1>
          <h2>Latest From our Blog Post</h2>
        </div>
        <div className="blog-card-container">
          {blogData?.map((item) => (
            <BlogCard data={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="conatctcontainer">
        <div className="contactcard">
          <div>
            <PhoneArrowDownLeftIcon className="icon" />
          </div>

          <div>
            <h5>Phone</h5>
            <p> +9608213718</p>
          </div>
        </div>
        <div className="contactcard">
          {" "}
          <div>
            <EnvelopeOpenIcon className="icon" />
          </div>
          <div>
            <h5>Email</h5>
            <p>devshubhamyadav@gmail.com</p>
          </div>
        </div>
        <div className="contactcard">
          <div>
            <RocketLaunchIcon className="icon" />
          </div>
          <div>
            <h5>Address</h5>
            <p>JP Nagar, Bangalore</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
