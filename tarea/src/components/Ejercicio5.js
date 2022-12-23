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

export const insertUser = async (payload) => {
    try{
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts/",
        payload
      )
      return(res.data)
    }catch(err){
      console.log({err})
    }
 };


const Ejercicio5 = () => {
  return <>
    <button onClick={() => insertUser(userData)}> INSERT USER DATA</button>
  </>;
};
export default Ejercicio5;
