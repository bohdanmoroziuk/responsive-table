import styles from './index.module.css';

const Loader = () => (
  <div className={styles['loader']}>
    <div className={styles['loader__indicator']} />
  </div>
);

export default Loader;