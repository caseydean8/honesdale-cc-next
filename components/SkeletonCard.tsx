import styles from '../styles/SkeletonCard.module.css';

const SkeletonCard = () => {
  return (
    <div className='card mb-2'>
      <div className={styles.imgPlaceholder}></div>
      <div className='card-body'>
        <div className='card-title'></div>
        <p className={styles.textPlaceholder}></p>
        <p className={styles.textPlaceholder}></p>
        <p className={styles.textPlaceholder}></p>
      </div>
    </div>
  );
};

export default SkeletonCard;
