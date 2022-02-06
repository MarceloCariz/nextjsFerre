import '../styles/globals.css'
import { GetStaticProps } from 'next'
import AppContext from '../AppContext'
import { useState } from 'react';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  const [tablaProductos,  setTablaProductos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [activeSearch, setAtiveSearch] = useState(null);


  return (
    <>
    <Head>
    <title>Ferreteria Portales   Puente Alto  Av Diego Portales</title>
                
    </Head>
  <AppContext.Provider value={{state:{tablaProductos, setTablaProductos, productos, setProductos},active:{activeSearch,setAtiveSearch}}} >
    <Component {...pageProps} />


  </AppContext.Provider>
  </>

  )
  
}

export default MyApp
