import React from "react";
import "./card.css";
import {
  UserIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
const BlogCard = ({ data: { title, author, desc, blogPhoto, date } }) => {
  return (
    <div>
      <div className="card">
        <div className="cardheader">
          <img
            src={blogPhoto}
            alt="cardimage"
            className="cardimage"
            width="600"
          />
        </div>
        <div className="cardbody">
          <div className="cardheader">
            <div className="date">
              {" "}
              <UserIcon className="icon" />
              <p>{date}</p>
            </div>
            <div className="author">
              <ChatBubbleOvalLeftEllipsisIcon className="icon" />
              <h5>{author}</h5>
            </div>
          </div>
          <div className="cardcontat">
            <h3 className="title">{title}</h3>
            <p className="desc">{desc}</p>
            <p>
              {" "}
              <a href="#">Read more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
