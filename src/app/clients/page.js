import Filter from "@/components/filter/Filter";
import ListOfProducts from "./ListOfProducts";
import styles from "./clients.module.css";

export default function PostsPage() {
  return (
    <section className={styles.layout}>
      <Filter />
      <ListOfProducts />
    </section>
  );
}
