import React from "react";
import styles from '@/styles/Video.module.css'

const Videos = () => {
  return (
    <div className={styles.iframeContainer}>
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube-nocookie.com/embed/videoseries?list=PL2jfjxYwstKOshW7hsNgRf0D7EICiGQEl&modestbranding=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded"
      ></iframe>
    </div>
  );
};

export default Videos;
