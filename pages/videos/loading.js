import React from "react";
import Head from "next/head";
import styles from "../../styles/Video.module.css";

const Videos = () => {
  const recentVids = [];
  for (let index = 1; index <= 3; index++) {
    recentVids.push(
      <div className="placeholder-glow">
        <div className={`placeholder ${styles.outerContainer}`} key={index}>
          <div className={styles.iframeContainer}></div>
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
