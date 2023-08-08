import styles from "./clients.module.css";

export default function PostLayout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}
