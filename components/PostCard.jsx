import React from "react";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="container">
      <div className="card post">
        <div className="image">
          {/* must use image here so poster doesn't have to worry about width/height */}
          <img src={post.featuredImage.url} alt="featured image" width='100%'/>
        </div>
      </div>
      {/* <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover: text-pink-600 text-3xl font-semibold"></h1> */}
      <h1 className="transition duration-700">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      {/* <div className="block lg:flex text-center items-center justify-center mb-8 w-full"></div> */}
      <div>
        {/* <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8"></div> */}
        <div>
         {/* move to public folder */}
          <Image
            alt={post.author.name}
            height={30}
            width={30}
            src={post.author.photo.url}
          />
          {/* <p className="inline align-middle text-gray-700 ml-2 text-lg"></p> */}
          <p>{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">{post.createdAt}</span>
        </div>
      </div>
      <p>{post.excerpt}</p>
    </div>
  );
};

export default PostCard;
