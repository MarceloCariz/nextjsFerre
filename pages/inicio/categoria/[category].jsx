import Link from "next/link";
import React, { useContext, useEffect } from "react";
import AppContext from "../../../AppContext";
import CategoriaScreen from "../../../components/CategoriaScreen";
import IdNavabar from "../../../components/IdNavabar";
import NavBar from "../../../components/NavBar";

// import NavBar from '../../components/NavBar';

export default function categorias({ productosCategoria}) {
  // const { title, price, urlImage, descripcion,  category , stock} = productos;
  // console.log(title);
  
 
  return (
    <>
      {/* <IdNavabar /> */}
      <NavBar productosProps= { productosCategoria }/>
      <h1 className="mx-4 mt-2 text-3xl text-gray-700 text-center font-bold">{productosCategoria[0].category}</h1>
      <hr className="mx-32" />
      <div className='sm:mt-24  mt-4 w-42 md:mx-32  mx-4 justify-items-centers md:grid-cols-9 sm:grid-cols-4 grid grid-cols-2 gap-4 '>
        <CategoriaScreen  productosCategoria={ productosCategoria}/>
      {/* {productos.map(({ _id, title, price, urlImage }) => (
        <div
          key={_id}
          className="transition ease-in-out delay-150 hover:-translate-y-3 shadow-2xl text-center rounded-xl border border-gray-200  py-2 flex flex-col  items-center "
        >
          <Link href={`/inicio/${title}`}>
            <img
              className="cursor-pointer object-cover rounded-md h-32 w-36"
              src={urlImage}
              alt=""
            />
          </Link>

          <div className="text-gray-800 mb-2 flex flex-col space-y-2">
            <h3 className="text-gray-800">{title}</h3>
            <p className="font-semibold">$ {price}</p>
          </div>
          <Link href={`/inicio/${title}`}>
            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 text-white rounded-lg bg-blue-600 px-4 py-2">
              Ver mas
            </button>
          </Link>
        </div>
      ))} */}
        </div>

      {/* <div className='mt-4 mx-4'> */}
      {/* <img className='object-contain  rounded-md' src={urlImage} alt="" />
                <div className='mx-4 flex flex-col space-y-2  justify-center text-2xl '>
                     <h3 className='font-semibold'> Nombre: <span className='font-normal' >{title}</span></h3>
                     <h3 className='font-semibold' >Precio: <span className='font-normal' >$ {price}</span></h3>
                     <h3 className='font-semibold'> Categoria: <span  className='font-normal'>{category}</span></h3>
                     <p className='font-semibold'>stock: <span className='font-normal'>{stock}</span></p>
                     <p className='font-semibold'>Descripcion: <span className='font-normal'>{descripcion}</span></p>


                </div> */}

      {/* <p>{Descripcion}</p> */}
      {/* </div> */}
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
