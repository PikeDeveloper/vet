"use client";

import styles from "./filter.module.css";
import { useProducts } from "../../context/ProductsContext";
import AddNewClient from "@/components/add_new_client/AddNewClientButton";

export default function Filter() {
  const { setbreed, filterClients } = useProducts();

  const categories = [
    "Todos",
    "Pastor alemán",
    "Gran danés",
    "Labrador",
    "Golden retriever",
    "Bulldog",
    "Poodle",
    "Chihuahua",
    "Rottweiler",
    "Boxer",
    "Siames",
    "Persa",
    "Siberiano",
  ];

  const breedSelecter = (e) => {
    setbreed(e.target.value);
    filterClients();
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Raza:</p>
      <select className={styles.select} onClick={breedSelecter}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <AddNewClient />
    </div>
  );
}
