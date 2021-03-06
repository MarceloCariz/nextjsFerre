import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {

        return (
            <Html lang="es" >
                <Head >
                    <meta name="description" content="Ferreteria portales, Aridos, Materiales, nos encargamos de atender a todos nuestro clientes
con el fin de entregarles una solucion. Nos ubicamos en Pasaje Los Exportadores 4496" />
                    {/* <meta property='og:title' content='Ferreteria Portales | Diego Portales | Puente Alto'  /> */}
                    <meta name="title" content="Ferreteria Portales | Diego Portales | Puente Alto" key="title" />
                    {/* <meta property="og:url" content="http://www.ferreteriasportales.com/" /> */}
                    <link rel="canonical" href="http://www.ferreteriasportales.com/" />
                    <meta property="og:site_name" content="Ferretería Portales" />
                    <meta property="og:type" content="website" />
                    <meta name="robots" content="index, nofollow" />
                    {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />

                </body>
            </Html>)
    }

}

export default MyDocument