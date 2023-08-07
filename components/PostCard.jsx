/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Balancer from 'react-wrap-balancer';
import getContentFragment from './GetContentFragment';

const PostCard = ({ post }) => {
  const eventImage = () => {
    if (post.featuredImage) {
      return (
        // must use <img> here so poster doesn't have to worry about width/height
        <img src={post.featuredImage.url} alt='featured image' className='card-img-top' />
      );
    } else {
      console.log('image error in PostCard.jsx');
    }
  };

  return (
    <div className='card mb-2'>
      {eventImage()}
      <div className='card-body'>
        <h5 className='card-title'>
          <Balancer>{post.title}</Balancer>
        </h5>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostCard;
