import '../styles/globals.css'
import { GetStaticProps } from 'next'
import AppContext from '../AppContext'
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [tablaProductos,  setTablaProductos] = useState([]);
  const [productos, setProductos] = useState([]);

  return (
  <AppContext.Provider value={{state:{tablaProductos, setTablaProductos, productos, setProductos}}} >
    <Component {...pageProps} />


  </AppContext.Provider>
  )
  
}

export default MyApp
