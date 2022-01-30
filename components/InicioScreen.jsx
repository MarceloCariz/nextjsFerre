import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import AppContext from '../AppContext';
import NavBar from './NavBar';

export const InicioScreen = ({productosProps}) => {
    const value = useContext(AppContext);
    let {setTablaProductos, tablaProductos,productos, setProductos} = value.state;

    console.log(productos);
   
    return (
        <>
            <NavBar productosProps={productosProps} />
            <div className='mt-4 w-42 mx-4 justify-items-centers grid grid-cols-2 gap-4 '>
            {
                
                productos.map(({ _id, title, urlImage }) => (
                    <div key={_id}>
                        <img className='object-cover h-32 w-42' src={urlImage} alt="" />
                        <Link href={`/inicio/${_id}`}>
                            <a>{title}</a>
                        </Link>
                    </div>
                ))
            } 
            </div>
          
        </>
    );
};
