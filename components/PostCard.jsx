import React from "react";
import Link from "next/link";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="card post">
      <div className="image">
        <img src={post.featuredImage.url} alt="featured image" />
      </div>
    </div>
  );
};

export default PostCard;
