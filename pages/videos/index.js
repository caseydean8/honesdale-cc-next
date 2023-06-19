import React from "react";
import Head from "next/head";
import styles from "../../styles/Video.module.css";

const Videos = () => {
  const recentVids = [];
  for (let index = 1; index <= 3; index++) {
    recentVids.push(
      <div className={styles.outerContainer} key={index}>
        <div className={styles.iframeContainer}>
          <iframe
            // in channel id you must change UC2KX... to UU2KX...
            src={`https://www.youtube-nocookie.com/embed?listType=playlist&list=UU2KX862afQKX4qc6ryGKQVA&rel=0&index=${index}`}
            title="YouTube video player"
            allowFullScreen
            className="rounded"
          ></iframe>
        </div>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Videos</title>
        <meta
          name="description"
          content="Watch videos of our most recent services as well as other content."
        />
      </Head>
      <div className="video-page-marker">
        <h2>Recent Messages</h2>
        {recentVids}
      </div>
    </>
  );
};

export default Videos;
