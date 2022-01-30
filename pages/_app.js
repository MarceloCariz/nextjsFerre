import '../styles/globals.css'
import { GetStaticProps } from 'next'
import AppContext from '../AppContext'
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [tablaProductos,  setTablaProductos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [activeSearch, setAtiveSearch] = useState(null);


  return (
  <AppContext.Provider value={{state:{tablaProductos, setTablaProductos, productos, setProductos},active:{activeSearch,setAtiveSearch}}} >
    <Component {...pageProps} />


  </AppContext.Provider>
  )
  
}

export default MyApp
