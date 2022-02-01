import Head from 'next/head'
import Image from 'next/image'
import { InicioScreen } from '../components/InicioScreen'
import styles from '../styles/Home.module.css'
import index from './inicio'



export default function Home() {
  return (
    
    
    <div className={styles.container}>
      <Head>
        <title>Ferreteria Portales | Diego Portales | Puente Alto</title>
        <meta name="description" content="Ferreteria portales, Aridos, Materiales, nos encargamos de atender a todos nuestro clientes
        con el fin de entregarles una solucion. Nos ubicamos en Av diego portales 4497" />
        <meta property='og:title' content='Ferreteria Portales | Diego Portales | Puente Alto'/>
        <meta name="title" content="Ferreteria Portales | Diego Portales | Puente Alto" />
        <meta property="og:url" content="http://www.ferreteriasportales.com"/>
      
        <meta property="og:site_name" content="Ferretería Portales"/>
        <meta property="og:type" content="website" />
      </Head>

      

    
    </div>
  )
}
