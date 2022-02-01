
import Head from "next/head";
import Footer from "../../components/Footer";
import { InicioScreen } from "../../components/InicioScreen";
import NavBar from "../../components/NavBar";

export default function index({productosProps}) {
    // const value = useContext(AppContext);
    // let {setTablaProductos, tablaProductos,productos, setProductos} = value.state;
  
    
    return (
        <>
     <Head>
        <html lang="es-ES"/>
        <title>Ferreteria Portales | Diego Portales | Puente Alto</title>
        <meta name="description" content="Ferreteria portales, Aridos, Materiales, nos encargamos de atender a todos nuestro clientes
        con el fin de entregarles una solucion. Nos ubicamos en Av diego portales 4497" />
        <meta property='og:title' content='Ferreteria Portales | Diego Portales | Puente Alto'/>
        <meta name="title" content="Ferreteria Portales | Diego Portales | Puente Alto" />
        <meta property="og:url" content="http://www.ferreteriasportales.com"/>
        <link rel="canonical" href="https://ferreteriasportales.com/"/>
        <meta property="og:site_name" content="Ferretería Portales"/>
        <meta property="og:type" content="website" />
        <meta name="robots" content= "index, follow" />
      </Head>
        <NavBar productosProps={productosProps}/>
        <main>
        <div className="bg-gray-250">
            <InicioScreen productosProps={productosProps}/>
           

            </div>
        </main>
           
            <Footer/>
        </>
    );
}


export async function getServerSideProps() {
    try {
        const res = await fetch('https://backend-ferreteria.herokuapp.com/api/products?limit=10')
        const { productos:productosProps } = await res.json();
        return {
            props: {
                productosProps  
            }
            // revalidate: 60

        }
    } catch (error) {
        console.log(error);
    }
}
