import styles from './Preview.module.css';
import { useSelector } from 'react-redux';
import { update, selectPreview } from '../features/previewSlice';

function Preview() {
  const preview = useSelector(selectPreview);
  return (
    <div className={styles.ctr}>
      <p className={styles.p}>What you typed</p>
      <p className={styles.box}>{preview}</p>
    </div>
  );
}

export default Preview;
