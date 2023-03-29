import React from "react";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  // const date = new Date(post.createdAt).toLocaleString("en-US", {
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric",
  // });

  // console.log(post);
  const eventImage = () => {
    if (post.featuredImage) {
      return (
        <img
          src={post.featuredImage.url}
          alt="featured image"
          className="card-img-top"
        />
      );
    } else {
      console.log("image error in PostCard.jsx");
    }
  };

  return (
    <div className="card mb-2">
      {/* must use image here so poster doesn't have to worry about width/height */}
      {eventImage()}
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content.text}</p>
      </div>
    </div>
  );
};

export default PostCard;
