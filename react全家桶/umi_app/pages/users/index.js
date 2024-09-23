
import Link from 'umi/link'
import router from 'umi/router'
import styles from './index.css';
// users/$id.js
export default function () {
  return (
    <div className={styles.normal}>
      <h1>User Index</h1>
      <Link to='/users/1'>用户1</Link>
      <Link to='/users/2'>用户2</Link>
      {/* 编程式导航 */}
      <li onClick={()=>router.push('/users/1')}>用户1</li>
    </div>
  );
}
