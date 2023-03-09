import Head from "next/head";
import { PostCard, Categories, PostWidget } from "@/components";
import { getPosts } from "@/services";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>HCC-Dev-Tab</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="index-js container-sm mx-auto text-center">
          {/* <div className="row"> */}
            {posts.map((post, index) => (
              <PostCard post={post.node} key={index} />
            ))}
            {/* see video at 30:35 for setup divs*/}
          {/* </div> */}
        <div className="lg:col-span-4 col-span-1">
          <div className="lg-sticky relative top-8">
            {/* <PostWidget /> */}
            {/* <Categories /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
