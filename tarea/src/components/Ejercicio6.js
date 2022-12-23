// Ejercicio N°6:
// Utilice la función insertUser() creada en el Ejercicio5, 
// y apliquela en el Ejercicio6 para generar un componente que devuelva una 
// lista HTML con los datas de la respuesta de la petición POST 

import { useState } from "react";
import { insertUser } from "./Ejercicio5";

const userData = {
  title: "POST test con axios",
  body: "Este es el body",
  userId: 1,
};

const Ejercicio6 = () => {
  const [data, setData] = useState()

  const handleClick = () => {
    insertUser(userData)
      .then((res) => {
        console.log(res)
        setData(res)
      })
      .catch((err) => { console.log(err) })
  }

  return (
    <>
      <button onClick={handleClick}> INSERT USER DATA</button>

      {data &&
        <ul>
          <li>
            {data.body}
          </li>
          <li>
            {data.id}
          </li>
          <li>
            {data.title}
          </li>
          <li>
            {data.userId}
          </li>
        </ul>}

    </>
  )
}

export default Ejercicio6;