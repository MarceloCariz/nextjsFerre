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
 
            {
                
                productos.map(({ _id, title, urlImage }) => (
                    <li key={_id}>
                        <img src={urlImage} alt="" />
                        <Link href={`/inicio/${_id}`}>
                            <a>{title}</a>
                        </Link>
                    </li>
                ))
            } 
        </>
    );
};
