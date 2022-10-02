// Ejercicio N°1:
// Aproveche la función "getUser()" y modifique el componente Ejercicio1 para que devuelva
// una lista html con el los elementos del JSON de respuesta de la API que tiene la siguiente estructura:
// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }
// Para poder disparar la API utilice el evento onClick de un simple botón html.
// El resultado debe verse similar a este:
// ● userId: 1
// ● id: 1
// ● title: delectus aut autem
// ● completed:
// NOTA: Para este ejercicio es necesario el uso de useState para renderizar
// los cambios producidos por la llamada a la API.
// Ante cualquier duda, consulte con el ejemplo "axios00" de los "ejemplos de clase"

import { useState } from "react";
import axios from "axios";

const Ejercicio1 = () => {
  const [data, setData] = useState("No Data");

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return <>
  
  </>;
};
export default Ejercicio1;
