import React from 'react';
import Head from 'next/head';
import { PostCard } from '../../components';
import { getPostsBasic } from '../../services';
import SkeletonCard from '@/components/SkeletonCard';

export default function Events({ posts }) {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <div className='event page-marker'>
        <h2>Events</h2>
        {posts ? (
          posts.map((post, index) => <PostCard post={post.node} key={index} />)
        ) : (
          <>
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  let posts = null;
  posts = (await getPostsBasic()) || [];
  return {
    props: { posts },
  };
}
