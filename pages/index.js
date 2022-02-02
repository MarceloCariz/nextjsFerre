import { Html } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import { InicioScreen } from '../components/InicioScreen'
import styles from '../styles/Home.module.css'
import index from './inicio'



export default function Home() {
  return (

    <Html lang="es">
      <Head>
        <meta name="description" content="Ferreteria portales, Aridos, Materiales, nos encargamos de atender a todos nuestro clientes
con el fin de entregarles una solucion. Nos ubicamos en Av diego portales 4497" />
        <meta property='og:title' content='Ferreteria Portales | Diego Portales | Puente Alto' />
        <meta name="title" content="Ferreteria Portales | Diego Portales | Puente Alto" />
        <meta property="og:url" content="http://www.ferreteriasportales.com" />
        <link rel="canonical" href="https://ferreteriasportales.com/" />
        <meta property="og:site_name" content="Ferretería Portales" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <title>Ferreteria Portales  Av Diego Portales Puente Alto</title>
      </Head>
      <Head />
      <body>
        <index />

        <Footer />
      </body>
    </Html>




  )
}
