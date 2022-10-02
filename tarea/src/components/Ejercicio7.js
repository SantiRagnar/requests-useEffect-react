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
  return <h1>Ejercicio 7 (Ver el resultado en la consola)</h1>;
};
export default Ejercicio7;

// Respuesta:
// const Ejercicio7 = () => {
//     useEffect(time, []);
//     return <h1>Ejercicio 7 (Ver el resultado en la consola)</h1>;
//   };
//   export default Ejercicio7;

// Observe que el primer parámetro que recibe useEffect es una función a ejecutar,
// es por ello que utilizamos como argumento "time" en vez de "time()",
// ya que "time()" ejecuta la función en sí misma y "time" es equivalente a declarar la función es este lugar.
