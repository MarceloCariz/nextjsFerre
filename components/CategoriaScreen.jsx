


import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import AppContext from '../AppContext';

export default function CategoriaScreen({ productosCategoria }) {
  const value = useContext(AppContext);
  let { setTablaProductos, tablaProductos, productos, setProductos } = value.state;

  const router = useRouter();

  // const { category } = productosCategoria[0];
  // const refreshData = () => {
  //   router.replace(router.asPath);
  // }

  // useEffect(() => {
  //   refreshData()

  // }, [])
  

 
  // console.log(productosCategoria);
  return (
    <>
      {productos.map(({ _id, title, price, urlImage }) => (
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
      ))}
    </>

  );
};
