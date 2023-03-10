import React from "react";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  // console.log(post);
  const date = new Date(post.createdAt).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="PostCard card mb-2">
      {/* must use image here so poster doesn't have to worry about width/height */}
      <img
        src={post.featuredImage.url}
        alt="featured image"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.excerpt}</p>
      </div>
    </div>
  );
};

export default PostCard;
