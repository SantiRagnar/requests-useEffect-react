// Ejercicio N°5:
// La documentación de axios.post nos dice que para realizar una petición de este tipo debemos hacerlo
// de la siguiente manera:
// axios.post(url, data, options)
// Genere una función llamada "insertUser()" que realice una petición de tipo POST,
// que inserte en la siguiente url: 'https://jsonplaceholder.typicode.com/posts/'
// La siguiente información:

// const userData = {
//   title: "POST test con axios",
//   body: "Este es el body",
//   userId: 1,
// };

// Luego, esta función debe imprimir por consola  la respuesta de la llamada a la API con console.table().
// NOTA: recuerde que en axios, la informaciónen la respuesta se guarda en ".data", por ello si la respuesta
// a la llamada la guardamos en una constante llamada "response" 
// debemos acceder a los datos por medio de "response.data"

import axios from "axios";

const userData = {
  title: "POST test con axios",
  body: "Este es el body",
  userId: 1,
};

const insertUser = async (/*???*/) => { };


const Ejercicio5 = () => {
  return <>
    <button onClick={() => insertUser(userData)}> INSERT USER DATA</button>
  </>;
};
export default Ejercicio5;


// Respuesta:
// La función tiene un parámetro llamado "payload" que es como se suele llamar a la información 
// que se envía en un request de tipo POST:

// const insertUser = async (payload) => {
//     try {
//       const response = await axios.post(
//         "https://jsonplaceholder.typicode.com/posts/",
//         payload
//       );
//       console.table(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };