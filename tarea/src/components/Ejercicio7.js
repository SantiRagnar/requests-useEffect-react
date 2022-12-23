// Ejercicio N°7:
// Agregue un Hook useEffect al componente Ejercicio7 para que ejecute la función "time()",
// al momento de carga de la página.
// Recuerde que la estructura del Hook es:
// useEffect(
//     miFuncion,
//     []
// )

import { useEffect } from "react";

const time = () => {
  console.log("Ahora: ", new Date());
  setTimeout(() => {
    console.log("Después: ", new Date());
  }, 4000);
};

const Ejercicio7 = () => {

  useEffect(()=>{
    time();
  },[])

  return <h1>Ejercicio 7 (Ver el resultado en la consola)</h1>;
};
export default Ejercicio7;