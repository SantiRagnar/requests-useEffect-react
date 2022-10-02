// Ejercicio N°9:
// Modifique el componente Ejercicio9 para que actualice el valor de "date" cada un segundo
// Utilizando la función "time()" y el hook useEffect().
// Recuerde que el segundo parámetro de useEffect es un array de variables a monitorear.

import { useEffect, useState } from "react";

const time = (callback) => {
  setTimeout(() => {
    callback(new Date());
  }, 1000);
};

const Ejercicio9 = () => {
  const [date, setDate] = useState(new Date());
  return <h1>Date: {`${date}`}</h1>;
};
export default Ejercicio9;

// Respuesta:
// Para que useEffect pueda ejecutar la función "time()", debemos hacerlo por medio de una función flecha,
// de esta manera al momento de cargar la página se ejecutará la función time a la cual le enviamos la función
// para cambiar el valor de date, así podremos actualizar su valor. Por otra parte, monitoreamos los cambios en
// "date" colocando la variable dentro del array de monitoreo de useEffect. Con ésto logramos que cada vez que la
// variable cambie su valor, se vuelve a lanzar la función time()
// generando un loop que perdura toda la vida del componente.

// const Ejercicio9 = () => {
//     const [date, setDate] = useState(new Date());
//     useEffect(() => {
//       time(setDate);
//     }, [date]);
//     return <h1>Date: {`${date}`}</h1>;
//   };
//   export default Ejercicio9;
