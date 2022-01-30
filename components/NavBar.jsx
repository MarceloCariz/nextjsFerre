import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../AppContext';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";







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
      <div className='h-24 bg-blue-600 flex space-y-4 flex-col px-4 py-2'>
          <div className='text-white font-bold text-2xl'>
              <h1>FerreteriaPortales</h1>
              <hr className="border-red-600 border-2 bg-red-600 w-52"/>
          </div>
          <div className=''>
             <FontAwesomeIcon className='text-white' icon={faSearch} />
            <input className='ml-2 rounded-lg' onChange={handleChange} type="text" name="" value={busqueda} id="" />
            <button className='hidden'>Buscar</button>
          </div>
    
      </div>
        
      </>
  );
}
