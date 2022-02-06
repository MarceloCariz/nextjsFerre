import CategoriaScreen from "../../../components/CategoriaScreen";
import Layout from "../../../components/Layout";

// import NavBar from '../../components/NavBar';

export default function categorias({ productosCategoria}) {
  // const { title, price, urlImage, descripcion,  category , stock} = productos;
  // console.log(title);
  
  console.log(productosCategoria[0]);
  return (
    <>
      {/* <IdNavabar /> */}
      <Layout productosProps= { productosCategoria }>

      {/* <NavBar productosProps= { productosCategoria }/> */}
      <h2 className="mx-4 mt-2 text-3xl text-gray-700 text-center font-bold">{productosCategoria[0].category}</h2>
      <hr className="mx-32" />
      <div className='sm:mt-24  mt-4 w-42 md:mx-32  mx-4 justify-items-centers sm:grid-cols-4 md:grid-cols-9  grid grid-cols-2 gap-4 '>
        <CategoriaScreen  productosCategoria={ productosCategoria}/>
    
        </div>
      </Layout>
    </>
  );
}

// export async function getStaticPaths() {
//   try {
//     const res = await fetch(
//       "https://backend-ferreteria.herokuapp.com/api/products/categoria/"
//     );
//     const { categorias } = await res.json();
//     const paths = categorias.map((categoria) => ({
//       params: { category: `${categoria}` },
//     }));

//     return {
//       paths,
//       fallback: "blocking",
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function getServerSideProps({ query }) {
  try {
      const category = query.category
    const res = await fetch(
      `https://backend-ferreteria.herokuapp.com/api/products/categoria/${category}` 
    );
    const { productos:productosCategoria } = await res.json();
   
    return {
      props: {
          productosCategoria 
      }
    };
  } catch (error) {
    console.log(error);
  }
}
