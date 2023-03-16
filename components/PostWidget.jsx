import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { getRecentPosts, getSimilarPosts } from "@/services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setrelatedPosts] = useState([]);

  // useEffect(() => {
  //   if (slug) {
  //     getSimilarPosts(categories, slug).then((result) =>
  //       setrelatedPosts(result)
  //     );
  //   } else {
  //     getRecentPosts().then((result) => setrelatedPosts(result));
  //   }
  //   // categories shouldn't be here, entire useEffect should be replaced with getRecentPosts
  // }, [categories, slug]);

  // console.log(relatedPosts);
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Recent Posts</h4>
        {relatedPosts.map((post) => (
          <div className="card" key={post.title}>
            <img
              src={post.featuredImage}
              alt={post.title}
              height="60px"
              width="60px"
              className="card-img-top"
            />

            <div className="card-title">
              <Link href={`post/${post.slug}`} key={post.title}>
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
