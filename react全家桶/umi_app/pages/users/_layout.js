
import styles from './_layout.css';
// users/$id.js
export default function (props) {
  return (
    <div className={styles.normal}>
      <h1>User layout</h1>
      <div>
        {/* 将来子组件的内容 */}
        {props.children}
      </div>
    </div>
  );
}
