// Ejercicio N°3:
// Este ejercicio tiene 1 componente y dos funciones auxiliares.
// getUsers() --> devuelve un array de objetos con esta estructura:
// [
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 2,
//       "title": "quis ut nam facilis et officia qui",
//       "completed": false
//     },
//     ...
// ]
// La función userList() espera un objeto de la misma forma que tiene cada elemento del array de respuesta de getUser()
// y devuelve una lista HTML con los datos de dicho objeto. 
// El componente Ejemplo3 debe mapear el array retornado por la función getUser() 
// y generar una lista con los datos de todos los usuarios.

import { useState } from "react";
import axios from "axios";

const getUsers = async (callback) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      callback(response.data);
    } catch (error) {console.log(error)}
  };

const userList = (user) => {
return (
    <ul>
        <li>userId: {user.userId}</li>
        <li>id: {user.id}</li>
        <li>title: {user.title}</li>
        <li>completed: {user.completed}</li>
    </ul>
);
};


const Ejercicio3 = () => {
  const [users, setUsers] = useState([]);
  return (
    <div style={{ textAlign: "left" }}>
      <button onClick={() => getUsers(setUsers)}>Traer users</button>
      <h2>Usuarios:</h2>.
      {users.map(user=>userList(user))}
    </div>
  );
};
export default Ejercicio3;