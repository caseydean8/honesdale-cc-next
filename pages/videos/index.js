import React from "react";
import styles from "@/styles/Video.module.css";

const Videos = () => {
  return (
    <div className="video-page-marker">
      <h2>Recent Messages</h2>
      <div className={styles.outerContainer}>
        <div className={styles.iframeContainer}>
          <iframe
            // in channel id you must change UC2KX... to UU2KX...
            src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UU2KX862afQKX4qc6ryGKQVA&rel=0&index=1"
            title="YouTube video player"
            allowFullScreen
            className="rounded"
          ></iframe>
        </div>
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.iframeContainer}>
          <iframe
            src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UU2KX862afQKX4qc6ryGKQVA&rel=0&index=2"
            title="YouTube video player"
            allowFullScreen
            className="rounded"
          ></iframe>
        </div>
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.iframeContainer}>
          <iframe
            src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UU2KX862afQKX4qc6ryGKQVA&rel=0&index=3"
            title="YouTube video player"
            allowFullScreen
            className="rounded"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Videos;
