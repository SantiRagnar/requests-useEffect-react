// Ejercicio N°8:
// Aplicar useEffect para que al momento de carga de la página, se ejecute la llamada a la API con getUser(),
// y hacer que la información de respuesta se guarde en la variable "data" para que sea representada en pantalla.

import { useState, useEffect } from "react";
import axios from "axios";

const getUser = async (callback) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(response);
    callback(response.data)
  } catch (error) {
    console.error(error);
  }
};

const Ejercicio8 = () => {
  const [data, setData] = useState("No Data");

  useEffect(()=>{
    getUser(setData)
  },[])

  return (
    <>
      <ul style={{ textAlign: "start" }}>
        <li>userId: {data === "No Data" ? "No Data" : data.userId}</li>
        <li>id: {data === "No Data" ? "No Data" : data.id}</li>
        <li>title: {data === "No Data" ? "No Data" : data.title}</li>
        <li>completed: {data === "No Data" ? "No Data" : data.completed}</li>
      </ul>
    </>
  );
};
export default Ejercicio8;
