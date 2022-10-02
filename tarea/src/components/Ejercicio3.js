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
    } catch (error) {}
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
      <h2>Usuarios:</h2>.
        {/* La respuesta va aquí! */}
    </div>
  );
};
export default Ejercicio3;

// Respuesta:
// El retorno del componente debe tener un botón que ejecute la llamada a la API, 
// que luego guarde la información en una variable de useState:
//    <button onClick={() => getUsers(setUsers)}> GET USER DATA</button>

// Luego, se debe aplicar map() al array, llamando a la función userList() para que 
// genere las listas HTML de usuarios por cada usuario presente en el array:
//    {users.map((user) => userList(user))}

// El resultado final será:
// const Ejercicio3 = () => {
//     const [users, setUsers] = useState([]);
//     return (
//       <div style={{ textAlign: "left" }}>
//         <h2>Usuarios:</h2>.
//     <button onClick={() => getUsers(setUsers)}> GET USER DATA</button>
//     {users.map((user) => userList(user))}
  
//       </div>
//     );
//   };