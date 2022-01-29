import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../AppContext';
export default function NavBar({productosProps}) {


const value = useContext(AppContext);
let {setTablaProductos, tablaProductos,productos, setProductos} = value.state;
// const [productos, setProductos] = useState([]);
const [busqueda, setBusqueda] = useState("");
// const peticionGet = async()=>{
//     await axios.get('https://backend-ferreteria.herokuapp.com/api/products/')
//     .then(response=>{
//         setProductos(response.data.productos);
//         setTablaProductos(response.data.productos);
//     }).catch(error =>{
//         console.log(error);
//     })
// }


useEffect(()=>{
    setProductos(productosProps);
    setTablaProductos(productosProps);
},[productosProps])

// console.log(productos.title);
// console.log(productos);


const handleChange = ({target})=>{
    setBusqueda(target.value)
    filtrar(target.value);
}


const filtrar = (terminoBusqueda)=>{
    

    let resultadoBusqueda = tablaProductos.filter((elemento)=>{
        if(elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
           return elemento

        }
    });
    setProductos(resultadoBusqueda);
}



  return (
      <>
        <input onChange={handleChange} type="text" name="" value={busqueda} id="" />
        <button>Buscar</button>
      </>
  );
}
