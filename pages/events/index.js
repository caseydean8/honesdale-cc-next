import React from 'react';
import Head from 'next/head';
import { PostCard } from '../../components';
import { getPostsBasic } from '../../services';

export default function Events({ posts }) {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta
          name='description'
          content='Listing of events outside of Sunday services for the Honesdale Community Church'
        />
      </Head>
      <div className='event page-marker'>
        <h2>Events</h2>
        {posts.map((post, index) => (
          <PostCard post={post.node} key={index} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPostsBasic()) || [];
  return {
    props: { posts },
    revalidate: 20,
  };
}
