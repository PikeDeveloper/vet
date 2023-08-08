"use client";
import styles from "./single_client.module.css";
import SquareImage from "@/components/square_image/SquareImage";
import { useProducts } from "@/context/ProductsContext";
import { useEffect } from "react";
import { db } from "@/firebase";
import AddClinicHistory from "./AddClinicHistory";
import DeleteClient from "./deleteClient";

export default function Post({ params }) {
  const { id } = params; //recuperar el id en la url
  const {
    currentClient,
    setcurrentClient,
    setcurrentClientId,
    currentClientId,
  } = useProducts();

  const getProjectById = () => {
    db.collection("vet_client")
      .where("deleted", "==", false)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id == id) {
            setcurrentClient(() => doc.data());
            setcurrentClientId(() => doc.id);
          }
        });
      });
  };

  //convert timestamp to string
  const dateToString = (date) => {
    const year = date.toDate().getFullYear();
    let month = date.toDate().getMonth() + 1;
    let day = date.toDate().getDate();

    if (day < 10) {
      day = "0" + day;
    }

    if (month < 10) {
      month = "0" + month;
    }

    return [day, month, year].join("-");
  };

  const toDo = () => {
    window.alert("Tarea pendiente");
  };

  const areYouSuredeleteThisClinicalHistory = (id, date, time) => {
    window.confirm(
      "¿Estas seguro de eliminar esta historia clínica? " + date + " " + time
    ) && deleteThisClinicalHistory(id);
    //
  };

  const deleteThisClinicalHistory = async (id) => {
    const cliente = db.collection("vet_client").doc(currentClientId.toString());

    let temporalClinicalHostory = currentClient.clinicalHistory.filter(
      (clinicalHostory) => clinicalHostory.id != id
    );

    const res = await cliente.update({
      clinicalHistory: temporalClinicalHostory,
    });
    window.alert("Historia clínica borrada");
  };

  useEffect(() => {
    getProjectById();
  }, [] )

  return (
    <div className={styles.container}>
      <DeleteClient />
      <div className={styles.card}>
        <h3 className={styles.title}> Dueño:</h3>
        <div className={styles.image_and_descrption}>
          <SquareImage url={currentClient.photo} width={200} />
          <div className={styles.description}>
            <p className={styles.subTitle}> Nombre</p>
            <p className={styles.text}> {currentClient.ownerName}</p>
            <p className={styles.subTitle}> Documento</p>
            <p className={styles.text}> {currentClient.document}</p>
            <p className={styles.subTitle}> Teléfono</p>
            <p className={styles.text}> {currentClient.phone}</p>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <h3 className={styles.title}> Mascota:</h3>
        <div className={styles.image_and_descrption}>
          <SquareImage url={currentClient.pet.photo} width={200} />
          <div className={styles.description}>
            <p className={styles.subTitle}> Nombre</p>
            <p className={styles.text}> {currentClient.pet.name}</p>
            <p className={styles.subTitle}> Raza</p>
            <p className={styles.text}> {currentClient.pet.breed}</p>
            <p className={styles.subTitle}> Edad</p>
            <p className={styles.text}> {currentClient.pet.age}</p>
            <p className={styles.subTitle}> Sexo</p>
            <p className={styles.text}> {currentClient.pet.sex}</p>
          </div>
        </div>
      </div>{" "}
      <div className={styles.card}>
        <h3 className={styles.title}> Historias clinicas:</h3>
        <AddClinicHistory />
        <div className={styles.clinic_histories}>
          {currentClient.clinicalHistory.map((history) => (
            <div key={history.id} className={styles.clinic_history}>
              <div className={styles.data_clinic}>
                <p className={styles.subTitle}> Día</p>
                <p className={styles.text}> {dateToString(history.date)}</p>
              </div>
              <div className={styles.data_clinic}>
                <p className={styles.subTitle}> Hora</p>
                <p className={styles.text}> {history.time}</p>
              </div>

              <div className={styles.data_clinic}>
                <p className={styles.subTitle}> Temperatura</p>
                <p className={styles.text}> {history.temperature}</p>
              </div>

              <div className={styles.data_clinic}>
                <p className={styles.subTitle}> Peso</p>
                <p className={styles.text}> {history.weight}</p>
              </div>

              <div className={styles.data_clinic}>
                <p className={styles.subTitle}> Ritmo Cardiaco</p>
                <p className={styles.text}> {history["heart_rate"]}</p>
              </div>
              <div className={styles.data_clinic}>
                <p className={styles.subTitle}> Doctor</p>
                <p className={styles.text}> {history.doctor}</p>
              </div>

              <div className={styles.data_clinic}>
                <p className={styles.subTitle}> Observaciones</p>
                <p className={styles.text}> {history.observations}</p>
              </div>
              <div className={styles.data_clinic}>
                <p
                  onClick={() =>
                    areYouSuredeleteThisClinicalHistory(
                      history.id,
                      dateToString(history.date),
                      history.time
                    )
                  }
                  className={styles.deletClinicalHistory}
                >
                  Eliminar
                </p>
                <p onClick={toDo} className={styles.editClinicalHistory}> Editar</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
