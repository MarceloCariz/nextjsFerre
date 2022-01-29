

import { InicioScreen } from "../../components/InicioScreen";

export default function index({productosProps}) {
    // const value = useContext(AppContext);
    // let {setTablaProductos, tablaProductos,productos, setProductos} = value.state;

    
    return (
        <>

            <InicioScreen productosProps={productosProps}/>
        </>
    );
}


export async function getStaticProps() {
    try {
        const res = await fetch('https://backend-ferreteria.herokuapp.com/api/products')
        const { productos:productosProps } = await res.json();
        return {
            props: {
                productosProps
            },
            revalidate: 60

        }
    } catch (error) {
        console.log(error);
    }
}
