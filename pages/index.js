
import { InicioScreen } from "../components/InicioScreen";
import Layout from "../components/Layout";

export default function index({ productosProps }) {
    // const value = useContext(AppContext);
    // let {setTablaProductos, tablaProductos,productos, setProductos} = value.state;


    return (
        <>
            <Layout productosProps={productosProps}>
            <main>
                
                <InicioScreen productosProps={productosProps} />
            </main>
            </Layout>
           
            {/* <Footer /> */}





        </>
    );
}


export async function getServerSideProps() {
    try {
        const res = await fetch('https://backend-ferreteria.herokuapp.com/api/products?limit=10')
        const { productos: productosProps } = await res.json();
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
