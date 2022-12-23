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

  useEffect(()=>{
    time(setDate);
  },[])

  return <h1>Date: {`${date}`}</h1>;
};
export default Ejercicio9;
