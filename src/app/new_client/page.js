"use client";
import styles from "./create_client.module.css";
import { useProducts } from "../../context/ProductsContext";
import ImgateToFirebase from "./ImgaeToFirebase";
import PetImgateToFirebase from "./PetImgaeToFirebase";

export default function PostsPage() {
  const { values, setValues, uploadClient } = useProducts();

  const hanndleSubmnit = async (e) => {
    e.preventDefault();
    console.log(values);
    uploadClient();
  };

  const handleImputOwnerChange = (e) => {
    const { name, value } = e.target; //obtenemos solo el name y el value
    setValues({ ...values, [name]: value }); //agregamos valores al proyecto
  };

  const handleImputPetChange = (e) => {
    const { name, value } = e.target; //obtenemos solo el name y el value
    setValues({ ...values, pet: { ...values.pet, [name]: value } }); //agregamos valores al proyecto
  };

  return (
    <div className={styles.MainContainer}>
      <form className={styles.formProyect} onSubmit={hanndleSubmnit}>
        <h2 className={styles.title}>Crear cliente</h2>
        <div className={styles.dataCard}>
          <h3 className={styles.subtitle}> Datos del dueño de la mascota </h3>
          <div className={styles.imageAndDescription}>
            <div className={styles.description}>
              {" "}
              <p className={styles.dataTiitle}>Nombre</p>
              <input
                className={styles.inputData}
                type="text"
                name="ownerName"
                placeholder="Nombre"
                onChange={handleImputOwnerChange}
              />
              <p className={styles.dataTiitle}>Documento</p>
              <input
                className={styles.inputData}
                type="text"
                name="document"
                placeholder="1.234.567-8"
                onChange={handleImputOwnerChange}
              />
              <p className={styles.dataTiitle}>Sexo</p>
              <input
                className={styles.inputData}
                type="text"
                name="sex"
                placeholder="hombre"
                onChange={handleImputOwnerChange}
              />
              <p className={styles.dataTiitle}>Teléfono</p>
              <input
                className={styles.inputData}
                type="text"
                name="phone"
                placeholder="320 7896395"
                onChange={handleImputOwnerChange}
              />{" "}
            </div>
            <ImgateToFirebase
              name="photo"
              values={values}
              setValues={setValues}
            />
          </div>
        </div>
        {"    "}

        <div className={styles.dataCard}>
          <h3 className={styles.subtitle}> Datos de la mascota </h3>

          <div className={styles.imageAndDescription}>
            <div className={styles.description}>
              <p className={styles.dataTiitle}>Nombre</p>
              <input
                className={styles.inputData}
                type="text"
                name="name"
                placeholder="Firulais"
                onChange={handleImputPetChange}
              />
              <p className={styles.dataTiitle}>Sexo</p>
              <select
                className={styles.inputData}
                name="sex"
                onChange={handleImputPetChange}
              >
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </select>
              <p className={styles.dataTiitle}>Tipo</p>
              <select
                className={styles.inputData}
                name="type"
                onChange={handleImputPetChange}
              >
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
              </select>

              <p className={styles.dataTiitle}>Raza</p>

              {values.pet.type === "Gato" ? (
                <select
                  className={styles.inputData}
                  name="breed"
                  onChange={handleImputPetChange}
                >
                  <option value="Siames">Siames</option>
                  <option value="Persa">Persa</option>
                  <option value="Siberiano">Siberiano</option>
                </select>
              ) : (
                //si es perro mostrar razas de perros
                <select
                  className={styles.inputData}
                  name="breed"
                  onChange={handleImputPetChange}
                >
                  <option value="Pastor alemán">Pastor alemán</option>
                  <option value="Gran danés">Gran danés</option>
                  <option value="Labrador">Labrador</option>
                  <option value="Golden retriever">Golden retriever</option>
                  <option value="Bulldog">Bulldog</option>
                  <option value="Poodle">Poodle</option>
                  <option value="Chihuahua">Chihuahua</option>
                  <option value="Rottweiler">Rottweiler</option>
                  <option value="Boxer">Boxer</option>
                </select>
              )}
              <p className={styles.dataTiitle}>Edad</p>
              <input
                className={styles.inputData}
                type="text"
                name="age"
                placeholder="3 años"
                onChange={handleImputPetChange}
              />
            </div>
            <PetImgateToFirebase
              name="photo"
              values={values}
              setValues={setValues}
            />
          </div>
        </div>

        <button className="submit-button">Crear cliente</button>
      </form>
    </div>
  );
}
