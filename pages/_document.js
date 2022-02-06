import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {

        return (
            <Html lang="es" >
                <Head />
                <meta name="description" content="Ferreteria portales, Aridos, Materiales, nos encargamos de atender a todos nuestro clientes
con el fin de entregarles una solucion. Nos ubicamos en Av diego portales 4497" />
                <meta property='og:title' content='Ferreteria Portales | Diego Portales | Puente Alto' />
                <meta name="title" content="Ferreteria Portales | Diego Portales | Puente Alto" />
                <meta property="og:url" content="http://www.ferreteriasportales.com/" />
                <link rel="canonical" href="http://www.ferreteriasportales.com/" />
                <meta property="og:site_name" content="Ferretería Portales" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, nofollow" />
                <title>Ferreteria Portales   Puente Alto  Av Diego Portales</title>
                <body>
                <Main />
          <NextScript />

                </body>
            </Html>)
    }

}

export default MyDocument