import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../AppContext';
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { useRouter } from 'next/router';







export default function NavBar({ productosProps }) {


    const value = useContext(AppContext);
    let { setTablaProductos, tablaProductos, setProductos } = value.state;
    const { activeSearch, setAtiveSearch } = value.active;

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

    // console.log(productosProps);
    // console.log(productos);
    const router = useRouter();



    useEffect(() => {
        setProductos(productosProps);
        setTablaProductos(productosProps);
    }, [setProductos, setTablaProductos])

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
    /////buscador
    // useEffect(async()=>{

    //     console.log(productos);
    // },[])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`https://backend-ferreteria.herokuapp.com/api/products/busqueda?q=${busqueda}`)
        const { productos } = await res.json();
        setAtiveSearch(true)
        // const {title} = productos;
        // setBusqueda(productos[0].title)
        if (productos.length > 1) {
            setProductos(productos)
            // filtrar(productos)
            router.push(`/inicio/resultado`);


        } else {
            router.push(`/inicio/${productos[0].title}`)

        }
        // console.log(title);
    }

    // const router = useRouter();

    const filtrar = (terminoBusqueda) => {

        if (!tablaProductos) {
            return;
        }
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
                <div className='h-24 bg-blue-600 flex flex-col space-y-4 md:flex-row md:justify-center md:items-center md:space-x-32   px-4 md:px-64 py-2'>
                    <div className='text-white font-bold text-2xl sm:text-3xl'>
                        <Link href='/inicio' passHref>
                            <h1 className='cursor-pointer'>      FerreteriaPortales </h1>
                        </Link >
                        <hr className="border-red-600 border-2 bg-red-600 w-52 md:w-64" />
                    </div>
                    <div className='flex  justify-between  flex-row  md:pb-2 md:flex-1 md:flex'>
                        {/* REsponsive mobile */}
                        <div className='flex sm:flex-1 sm:flex'>
                            <FontAwesomeIcon className='text-white text-sm mt-1 md:text-xl' icon={faSearch} />
                            <form className='' onSubmit={handleSubmit} >
                                <input className='ml-2 pb-50 md:h-8 w-40 text-sm sm:text-lg h-6 rounded-lg  sm:w-1/3 md:absolute pl-4' onChange={handleChange} type="text" placeholder='Busca tu producto' name="" value={busqueda} id="" />
                                <button type='submit' className="hidden" >Buscar</button>
                            </form >

                        </div>
                        <div className=' flex  flex-row  font-semibold text-white md:pb-2 md:hidden space-x-2 '>
                            <FontAwesomeIcon className='  text-xl text-red-500' icon={faMapMarkerAlt} />
                            <Link className="text-lg" rel="noopener noreferrer" href='https://goo.gl/maps/gSJ3rXaMxuzDrGVr6' passHref target="_blank">Encuentranos aqui</Link>
                        </div>
                    </div>
                    {/* Pantalla grande */}
                    <div className='md:pb-2 font-md text-white md:flex space-x-2  hidden'>
                        <FontAwesomeIcon className=' text-2xl text-red-500' icon={faMapMarkerAlt} />
                        <Link className="text-lg" rel="noopener noreferrer" href='https://goo.gl/maps/gSJ3rXaMxuzDrGVr6' passHref target="_blank">Encuentranos aqui</Link>
                    </div>

                </div>
            </div>




        </>
    );
}
