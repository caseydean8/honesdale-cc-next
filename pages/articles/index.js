import React from "react";
import Head from "next/head";
import { PostCard } from "@/components";
import { getArticles } from "@/services";

export default function Events({ articles }) {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta
          name="description"
          content="Articles referring to our weekly Sunday service messages"
        />
      </Head>
      <div className="event page-marker">
        {articles.map((article, index) => (
          <PostCard post={article.node} key={index} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const articles = (await getArticles()) || [];
  return {
    props: { articles },
  };
}
