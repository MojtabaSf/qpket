import styles from "./page.module.css";
import ProductFinder from "@/components/product-finder/product-finder";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProductFinder />
      </main>
    </div>
  );
}
