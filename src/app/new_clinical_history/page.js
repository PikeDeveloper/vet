"use client";
import styles from "./create_clinical_history.module.css";
import { useProducts } from "../../context/ProductsContext";
import { v4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function PostsPage() {
  const {
    currentClient,
    newClinicalhostory,
    setnewClinicalhostory,
    updateClinicalHistory,
  } = useProducts();

  const [startdate, setStartDate] = useState(new Date());

  const hanndleSubmnit = async (e) => {
    e.preventDefault();
    console.log(newClinicalhostory);
    newClinicalhostory.id = v4();
    updateClinicalHistory();
  };

  const dateChanged = (date) => {
    setnewClinicalhostory({ ...newClinicalhostory, date: date });
    setStartDate(date);
    console.log(date);
  };

  const handleImpuChange = (e) => {
    const { name, value } = e.target; //obtenemos solo el name y el value
    setnewClinicalhostory({ ...newClinicalhostory, [name]: value }); //agregamos valores al proyecto
  };

  return (
    <div className={styles.MainContainer}>
      <form className={styles.formProyect} onSubmit={hanndleSubmnit}>
        <h2 className={styles.title}>Nueva historia clínica</h2>
        <div className={styles.dataCard}>
          <h3 className={styles.subtitle}> {currentClient.name}</h3>
          <div className={styles.twoColums}>
            <div className={styles.description}>
              <p className={styles.dataTiitle}>Fecha</p>
              <DatePicker
                className={styles.inputData}
                selected={startdate}
                onChange={(date) => dateChanged(date)}
              />

              <p className={styles.dataTiitle}>Hora</p>
              <input
                className={styles.inputData}
                type="text"
                name="time"
                placeholder="14:00"
                onChange={handleImpuChange}
              />
              <p className={styles.dataTiitle}>Temperatura</p>
              <input
                className={styles.inputData}
                type="text"
                name="temperature"
                placeholder="32"
                onChange={handleImpuChange}
              />
            </div>

            <div className={styles.description}> </div>

            <div className={styles.description}>
              {" "}
              <p className={styles.dataTiitle}>Ritmo cardiaco</p>
              <input
                className={styles.inputData}
                type="text"
                name="heart_rate"
                placeholder="80"
                onChange={handleImpuChange}
              />
              <p className={styles.dataTiitle}>Peso</p>
              <input
                className={styles.inputData}
                type="text"
                name="weight"
                placeholder="20 kg"
                onChange={handleImpuChange}
              />
              <p className={styles.dataTiitle}>Doctor</p>
              <input
                className={styles.inputData}
                type="text"
                name="doctor"
                placeholder="Maria"
                onChange={handleImpuChange}
              />
            </div>
          </div>
          <p className={styles.dataTiitle}>Observaciones</p>
          <input
            className={styles.inputData}
            type="text"
            name="observations"
            placeholder="No morder a la gente"
            onChange={handleImpuChange}
          />
        </div>
        {"    "}

        <button className="submit-button">Crear Historia clínica</button>
      </form>
    </div>
  );
}
