import styles from '../styles/Video.module.css';

interface Props {
  keyIndex?: number;
  src: string;
}

const Video = (props: Props) => {
  return (
    <div className={styles.outerContainer} key={props.keyIndex ?? null}>
      <div className={styles.iframeContainer}>
        <iframe
          src={props.src}
          title='YouTube video player'
          allowFullScreen
          className='rounded'
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
