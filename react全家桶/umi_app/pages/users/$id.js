
import styles from './$id.css';
// users/$id.js
export default function ({match}) {
  return (
    <div className={styles.normal}>
      <h1>用户页面 {match.params.id}</h1>
    </div>
  );
}
