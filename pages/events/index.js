import React from "react";
import { PostCard } from "@/components";
import { getPostsBasic } from "@/services";

export default function Events({ posts }) {
  return (
    <div className="index-js container-sm mx-auto text-center">
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
