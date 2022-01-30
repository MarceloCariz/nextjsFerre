import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../AppContext';
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';







export default function NavBar({ productosProps }) {


    const value = useContext(AppContext);
    let { setTablaProductos, tablaProductos, productos, setProductos } = value.state;
    const { activeSearch, setAtiveSearch } = value.active;

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


    useEffect(() => {
        setProductos(productosProps);
        setTablaProductos(productosProps);
    }, [productosProps])

    // console.log(productos.title);
    // console.log(productos);


    const handleChange = ({ target }) => {
        setBusqueda(target.value)
        filtrar(target.value);
        if (target.value == '') {
            setAtiveSearch(false)
        } else {
            setAtiveSearch(true)
        }
    }


    const filtrar = (terminoBusqueda) => {


        let resultadoBusqueda = tablaProductos.filter((elemento) => {
            if (elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento

            }
        });
        setProductos(resultadoBusqueda);
    }



    return (
        <>


            <div>
                <div className='h-1 bg-red-600'></div>
                <div className='h-24 bg-blue-600 flex flex-col space-y-4 md:flex-row md:justify-center md:items-center md:space-x-32  px-4 md:px-64 py-2'>
                    <div className='text-white font-bold text-2xl sm:text-3xl'>
                        <a href='/inicio'>
                            FerreteriaPortales
                        </a >
                        <hr className="border-red-600 border-2 bg-red-600 w-52 md:w-64" />
                    </div>
                    <div className='flex space-x-4 flex-row  md:pb-2 md:flex-1 md:flex'>
                        <div className=' sm:flex-1 sm:flex'>
                            <FontAwesomeIcon className='text-white text-md mt-1 md:text-xl' icon={faSearch} />
                            <input className='ml-2 md:h-8 w-36 text-sm sm:text-lg h-6 rounded-lg sm:w-full pl-4' onChange={handleChange} type="text" placeholder='Busca tu producto' name="" value={busqueda} id="" />
                        </div>
                        <div className=' flex  flex-row  font-semibold text-white md:pb-2 md:hidden space-x-2 '>
                            <FontAwesomeIcon className='  text-xl text-red-500' icon={faMapMarkerAlt} />
                            <p className=''>Encuentranos aqui</p>
                        </div>
                    </div>
                    <div className='md:pb-2 font-md text-white md:flex space-x-2 hidden'>
                        <FontAwesomeIcon className=' text-2xl text-red-500' icon={faMapMarkerAlt} />
                        <a className="text-lg" href='https://goo.gl/maps/gSJ3rXaMxuzDrGVr6' target="_blank">Encuentranos aqui</a>
                    </div>

                </div>
            </div>




        </>
    );
}
