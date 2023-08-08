"use client";
import { createContext, useContext, useEffect, useState } from "react";
import initialStateValues from "../app/new_client/blank_client.js";
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";

export const ProductsContext = createContext();

export const useProducts = () => {
  const constext = useContext(ProductsContext);
  if (!constext)
    throw new Error("the context must be used within a ProductsProvider.");
  return constext;
};

export function ProductsProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchWord, setSearchWord] = useState(" ");
  const [date, setDate] = useState(" ");
  const [values, setValues] = useState(initialStateValues);
  const [breed, setbreed] = useState("Todos");

  const [currentClient, setcurrentClient] = useState(initialStateValues);
  const [currentClientId, setcurrentClientId] = useState("1");
  const [lasClinicalDate, setlasClinicalDate] = useState("1");

  const [newClinicalhostory, setnewClinicalhostory] = useState({});

  //get the clients
  const getClients = async () => {
    db.collection("vet_client")
      .where("deleted", "==", false)
      .onSnapshot((querySnapshot) => {
        const docs = []; //creamos un objeto nuevo para agrupar el proyecto con un id
        querySnapshot.forEach((doc) => {
          //combiinamos el proyecto con su id en un nuevo objeto
          docs.push({ ...doc.data(), id: doc.id });
        });
        setAllProducts(docs);
        setFilteredProducts(docs);
      });
  };
  const uploadClient = async () => {
    const docRef = await addDoc(collection(db, "vet_client"), values);
    window.alert("Cliente Creado");
    window.history.back();
  };

  //update clinicalhostory
  const updateClinicalHistory = async () => {
    const cliente = db.collection("vet_client").doc(currentClientId.toString());

    const res = await cliente.update({
      clinicalHistory: [...currentClient.clinicalHistory, newClinicalhostory],
    });
    window.alert("Historia clinic actualizada");
    window.history.back();
  };

  //delete client
  const deleteClient = async () => {
    const cliente = db.collection("vet_client").doc(currentClientId.toString());
    const res = await cliente.update({
      deleted: true,
    });

    window.alert("Cliente borrado");
    window.history.back();
  };

  //actualiza los clinetes filtrados cada vez que cambia el filtro o la busqueda
  useEffect(() => {
    filterClients();
  }, [breed, lasClinicalDate]);

  //Get the clients when the page is loaded for the first time
  useEffect(() => {
    getClients();
  }, []);

  // filter the clients by breed
  const filterClients = () => {
    let temporalProducts = [];
    if (breed != "Todos") {
      temporalProducts = allProducts.filter(
        (product) => product.pet.breed == breed
      );
    } else {
      temporalProducts = allProducts;
    }

    setFilteredProducts(() => temporalProducts);
  };

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        breed,
        filteredProducts,
        date,
        values,
        currentClient,
        newClinicalhostory,
        currentClientId,
        searchWord,
        uploadClient,
        setbreed,
        filterClients,
        setSearchWord,
        setDate,
        setValues,
        getClients,
        setcurrentClient,
        setnewClinicalhostory,
        updateClinicalHistory,
        setcurrentClientId,
        deleteClient,
        setlasClinicalDate,
        setSearchWord,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
