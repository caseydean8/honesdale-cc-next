import React from 'react';
import Head from 'next/head';
import Video from 'components/Video';

const Videos = () => {
  const recentVids = [];
  for (let i = 1; i <= 3; i++) {
    recentVids.push(
      <Video
        key={i}
        // in channel id you must change UC2KX... to UU2KX...
        src={`https://www.youtube-nocookie.com/embed?listType=playlist&list=UU2KX862afQKX4qc6ryGKQVA&rel=0&index=${i}`}
      />
    );
  }
  return (
    <>
      <Head>
        <title>Videos</title>
        <meta
          name='description'
          content='Watch videos of our most recent services as well as other content.'
        />
      </Head>
      <div className='video page-marker'>
        <h2>Recent Messages</h2>
        {recentVids}
      </div>
    </>
  );
};

export default Videos;
