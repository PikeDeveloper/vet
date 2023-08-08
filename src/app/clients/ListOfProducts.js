"use client";
import { useProducts } from "@/context/ProductsContext";
import Link from "next/link";
import styles from "./clients.module.css";
import SquareImage from "@/components/square_image/SquareImage";

export default function ListOfProducts() {
  const { filteredProducts } = useProducts();

  return (
    <div className={styles.mainContainer}>
      {filteredProducts ? (
        filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              key={product.id}
              className={styles.product}
              href={`/clients/${product.id}`}
            >
              <SquareImage url={product.pet.photo} width={150} />
              <div className={styles.description}>
                <p className={styles.title}>{product.pet.name}</p>
                <p className={styles.subTitle}> {product.pet.breed}</p>
                <p className={styles.subTitle}> {product.pet.age}</p>
                <p className={styles.subTitle}> {product.pet.sex}</p>
                <p className={styles.title}>{product.ownerName}</p>
                <p className={styles.subTitle}>{product.phone}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className={styles.noProducts}>
            <SquareImage
              url={
                "https://firebasestorage.googleapis.com/v0/b/unit-converter-35df1.appspot.com/o/prueba-ply-tech%2Fcsa%20de%20peroo.webp?alt=media&token=22e31383-5e17-446b-9ad5-f89bfd702a46"
              }
              width={350}
            />
            <p className={styles.noProductsText}> No hay Mascotas</p>
          </div>
        )
      ) : (
        <p>Error al conseguir los datos</p>
      )}
    </div>
  );
}
