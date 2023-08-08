"use client";
import styles from "./single_client.module.css";
import { useProducts } from "@/context/ProductsContext";

export default function DeleteClient() {
  const { deleteClient } = useProducts();

  const clickDeleteClient = () => {
    window.confirm("¿Estás seguro que deseas borrar este cliente?") &&
      deleteClient();
  };

  return (
    <div onClick={clickDeleteClient} className={styles.deleteClient}>
      Borrar cliente
    </div>
  );
}
