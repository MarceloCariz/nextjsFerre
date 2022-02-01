import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";
import NavBar from "./NavBar";
import Resultado from "./Resultado";

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
  const refreshData = () => {
      router.replace(router.asPath);
  }

  useEffect(()=>{
    refreshData()

  },[setProductos])

  return (
    <>
      <h1 className="text-2xl font-semibold text-left mx-4 mt-4">Categorias</h1>
      <hr className=" mx-4 mt-2" />
      <div className="sm:mt-24  mt-4 w-42 md:mx-32 text-center mx-4 justify-items-centers md:grid-cols-4 sm:grid-cols-4 grid grid-cols-2 gap-4">
        {category.map((category, index) => (

          <div className="bg-white border-2 cursor-pointer border-gray-400 " key={index}>
            <Link href={`/inicio/categoria/${category}`}>
              <h2>{category}</h2>
            </Link>
          </div>
        ))}
      </div>

      {/* <NavBar productosProps={productosProps} /> */}
      <div className="sm:mt-24  mt-4  md:mx-32  ml-4 justify-items-centers md:grid-cols-9 sm:grid-cols-4 overflow-x-auto  grid  auto-cols-max grid-flow-col  grid-rows-2 gap-4    ">

        {productos.map(({ _id, title, price, urlImage }) => (
          ///cards

          <div
            key={_id}
            className=" w-74  transition ease-in-out delay-150 hover:-translate-y-3 shadow-2xl text-center rounded-xl border border-gray-200  py-2   items-center "
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
          
        ))}
        
     </div>

    </>
  );
};
