// archivos de firebase
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import React, { useState } from "react";
import styles from "./create_client.module.css";

const PetImgateToFirebase = ({ name, setValues, values }) => {
  const [defaulPlaceholder, setDefaulPlaceholder] = useState(
    "https://firebasestorage.googleapis.com/v0/b/unit-converter-35df1.appspot.com/o/prueba-playtech%2Fpet_placeholder.png?alt=media&token=53a22eaf-1a72-4df0-9ca0-051430bcd9e8"
  );

  const handleImageOnchange = async (e) => {
    //  setUploadingFiles(true); //indicamos que estamos cargando la imagen

    const value = e.target.files[0];
    const fileName = value.name;
    const storageRef = ref(storage, "prueba-ply-tech/" + v4() + fileName);
    await uploadBytes(storageRef, value);
    const urlImage = await getDownloadURL(storageRef);

    setValues({ ...values, pet: { ...values.pet, [name]: urlImage } }); //agregamos valores al proyecto
    setDefaulPlaceholder(urlImage);
    // setUploadingFiles(false); //indicamos que ya cargamos la imagen
  };

  return (
    <div className={styles.imgSelecter}>
      <input name={name} onChange={handleImageOnchange} type="file" />
      <img src={defaulPlaceholder} alt="" id="img" className={styles.img} />
    </div>
  );
};

export default PetImgateToFirebase;
