import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";


export const InicioScreen = ({ productosProps }) => {
  const value = useContext(AppContext);
  const router = useRouter();

  let { setTablaProductos, tablaProductos, productos, setProductos } =
    value.state;
  const [category, setCategory] = useState([]);
  useEffect(async () => {
    const res = await fetch(
      "https://backend-ferreteria.herokuapp.com/api/products/categoria"
    );
    const { categorias } = await res.json();
    let result = categorias.filter((item, index) => {
      return categorias.indexOf(item) === index;
    })
    setCategory(result);
  }, [setCategory]);

  //////////////////Paginacion/////////////////////////////
  // console.log(productos);


  return (
    <>
    <div className="md:mx-60  ">
      <div className="md:mx-32 mx-4"> 
      <h2 className="text-2xl  font-semibold text-left mt-4">Categorias</h2>
      <hr className=" w-32 mt-2" />
      </div>
    
      <div className="sm:mt-12  mt-2 w-42 md:mx-32 text-center mx-4 justify-items-centers md:grid-cols-4 sm:grid-cols-4 grid grid-cols-2 gap-4">
        {category.map((category, index) => (

          <div className="bg-white border-2 cursor-pointer border-gray-400 transition ease-in-out delay-100 hover:-translate-y-1 " key={index}>
            {/* <Link href={`/inicio/categoria/${category}`}  passHref> */}
            <Link href={`/producto/categoria/${category}`}  passHref>

              <h2>{category}</h2>
            </Link>
          </div>
        ))}
      </div>

      {/* <NavBar productosProps={productosProps} /> */}
      <div className="sm:mt-12 md:mx-32 mx-2 pb-12 md:grid-cols-6 sm:grid-cols-4 md:grid-rows-2 overflow-x-auto grid  auto-cols-max grid-flow-col  grid-rows-2 gap-4    ">

        {productos.map(({ _id, title, price, urlImage }) => (
          ///cards

          <div
            key={_id}
            className="  w-32 mt-8   transition ease-in-out delay-150 hover:-translate-y-3 shadow-2xl text-center rounded-xl border border-gray-200    items-center "
          >
            {/* <Link href={`/inicio/${title}`}  passHref> */}
            <Link href={`/producto/${title}`}  passHref>

              {/* <img
                className="cursor-pointer object-cover rounded-md h-32 w-auto"
                src={urlImage}
                alt={`imagen ${title}`}
              /> */}
              <div className=" ">
              <Image layout="responsive"  alt={`imagen ${title}`} objectFit="cover" loading="eager" quality={50} width={150} height={150} src={urlImage} />

              </div>
            </Link>

            <div className="text-gray-800  text-center mb-2 flex flex-col space-y-2">
              <h3 className="text-gray-800">{title}</h3>
              <p className="font-semibold">$ {price}</p>
            </div>
            {/* <Link href={`/inicio/${title}`}  passHref> */}
            <Link href={`/producto/${title}`}  passHref>

              <button className="transition  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 text-white rounded-lg bg-blue-600 px-4 py-2">
                Ver mas
              </button>
            </Link>
          </div>

        ))}

      </div>
      </div>
    </>
  );
};
