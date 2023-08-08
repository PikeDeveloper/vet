"use client";
import styles from "./single_client.module.css";
import Link from "next/link";

export default function AddClinicHistory() {
  return (
    <Link className={styles.addClinicalHistory} href={`/new_clinical_history`}>
      Nueva historia clínica
    </Link>
  );
}
