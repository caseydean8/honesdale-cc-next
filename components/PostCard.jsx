import React from "react";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  console.log(post);
  const date = new Date(post.createdAt).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="PostCard card mb-2">
      {/* <div className=""> */}
      {/* <h1>{post.title}</h1> */}
      {/* <div className="image"> */}
      {/* must use image here so poster doesn't have to worry about width/height */}
      {/* <img src={post.featuredImage.url} alt="featured image" width="100%" /> */}
      <img
        src={post.featuredImage.url}
        alt="featured image"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.excerpt}</p>
      </div>

      {/* </div> */}
      {/* </div> */}
      {/* <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover: text-pink-600 text-3xl font-semibold"></h1> */}
      {/* <h1 className="transition duration-700"> */}
      {/*   <Link href={`/post/${post.slug}`}>{post.title}</Link> */}
      {/* </h1> */}
      {/* <div className="block lg:flex text-center items-center justify-center mb-8 w-full"></div> */}
      {/* <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8"></div> */}
      {/* <div> */}
      {/* move to public folder if you keep it*/}
      {/* <Image */}
      {/*   alt={post.author.name} */}
      {/*   height={30} */}
      {/*   width={30} */}
      {/*   src={post.author.photo.url} */}
      {/* /> */}
      {/* <p className="inline align-middle text-gray-700 ml-2 text-lg"></p> */}
      {/* <p>{post.author.name}</p> */}
      {/* </div> */}
      {/* <div className="d-flex justify-content-center"> */}
      {/*   <svg */}
      {/*     xmlns="http://www.w3.org/2000/svg" */}
      {/*     className="calendar-svg" */}
      {/*     fill="none" */}
      {/*     viewBox="0 0 24 24" */}
      {/*     stroke="currentColor" */}
      {/*   > */}
      {/*     <path */}
      {/*       strokeLinecap="round" */}
      {/*       strokeLinejoin="round" */}
      {/*       strokeWidth="2" */}
      {/*       d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" */}
      {/*     /> */}
      {/*   </svg> */}
      {/*   <span className="align-middle">{date}</span> */}
      {/* </div> */}
    </div>
  );
};

export default PostCard;
