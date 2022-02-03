
import { InicioScreen } from "../components/InicioScreen";
import Layout from "../components/Layout";

export default function index({ productosProps, result }) {
    // const value = useContext(AppContext);
    // let {setTablaProductos, tablaProductos,productos, setProductos} = value.state;


    return (
        <>
            <Layout productosProps={productosProps}>
            <main>
                
                <InicioScreen productosProps={productosProps} categorias={result} />
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
        const resp = await fetch('https://backend-ferreteria.herokuapp.com/api/products/categoria')
        const { categorias } = await resp.json();
        let result = categorias.filter((item, index) => {
            return categorias.indexOf(item) === index;
          })
        return {
            props: {
                productosProps,
                result
            }
            // revalidate: 60

        }
    } catch (error) {
        console.log(error);
    }
}
