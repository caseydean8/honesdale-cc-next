import React from "react";
import { PostCard } from "@/components";
import { getPostsBasic } from "@/services";

export default function Events({ posts }) {
  return (
    <div className="event-page-marker">
      {posts.map((post, index) => (
        <PostCard post={post.node} key={index} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPostsBasic()) || [];
  return {
    props: { posts },
  };
}
