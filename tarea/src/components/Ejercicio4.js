// Ejercicio N°4:
// Escriba desde cero un componente que sea capaz de realizar una petición HTTP de tipo GET al endpoint:
// 'https://jsonplaceholder.typicode.com/todos/'
// y que mapee su resultado en una tabla HTML
// con las keys de los objetos como header de la tabla y los datos de cada objeto en cada fila

import axios from "axios";
import { useEffect, useState } from "react";

const getData = async (setData) => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    console.log(res)
    setData(res.data)
  }
  catch (err) {
    console.log(err)
  }
}



const Ejercicio4 = () => {
  const [data, setData] = useState([])
  const [keys, setKeys] = useState([])

  useEffect(() => {
    if (data.length > 0) {
      setKeys(Object.keys(data[0]))
    }
  }, [data])

  console.log(data)
  console.log(keys)

  return (
    <>
      <button onClick={() => { getData(setData) }}>
        DATA
      </button>
      <table>
        <thead>
          <tr>
            {keys.map((key) => (
              <th>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dato) => (
            <tr>
              <td>{dato.userId}</td>
              <td>{dato.id}</td>
              <td>{dato.title}</td>
              <td>{dato.completed ? "true" : "false"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
};

export default Ejercicio4;
