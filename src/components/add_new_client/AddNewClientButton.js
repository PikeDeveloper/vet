"use client";
import styles from "./clients.module.css";
import Link from "next/link";

export default function AddNewClient() {
  return (
    <Link className={styles.addNewClient} href={`/new_client`}>
      Nuevo cliente
    </Link>
  );
}
