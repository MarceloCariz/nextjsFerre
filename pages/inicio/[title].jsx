import React, { useContext, useEffect } from 'react';
import AppContext from '../../AppContext';
import IdNavabar from '../../components/IdNavabar';
import { InicioScreen } from '../../components/InicioScreen';
import NavBar from '../../components/NavBar';

export default function productos({ productos }) {
    // const { title, price, urlImage, descripcion,  category , stock} = productos;
    // console.log(title);
   
   
    return (
        <>
            <IdNavabar />
            {
                productos.map(({_id, title, price, urlImage, descripcion,  category , stock})=>(
            <div key={_id} className='mt-4 mx-4'>
                    

                    <img className='object-contain  rounded-md' src={urlImage} alt="" />
                    <div className='mx-4 flex flex-col space-y-2  justify-center text-2xl '>
                         <h3 className='font-semibold'> Nombre: <span className='font-normal' >{title}</span></h3>
                         <h3 className='font-semibold' >Precio: <span className='font-normal' >$ {price}</span></h3>
                         <h3 className='font-semibold'> Categoria: <span  className='font-normal'>{category}</span></h3>
                         <p className='font-semibold'>stock: <span className='font-normal'>{stock}</span></p>
                         <p className='font-semibold'>Descripcion: <span className='font-normal'>{descripcion}</span></p>
    
    
                    </div>
                    </div>
                    
                ))
            }
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


export async function getStaticPaths() {
    try {
        const res = await fetch('https://backend-ferreteria.herokuapp.com/api/products/')
        const { productos } = await res.json();
        const paths = productos.map(({title }) => ({ params: { title: `${title}` } }));
        return {
            paths,
            fallback: 'blocking'
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch('https://backend-ferreteria.herokuapp.com/api/products/producto/' + params.title)
        const { productos } = await res.json();
        return {
            props: {
                productos
            },
            revalidate: 10
        }
    } catch (error) {
        console.log(error);
    }
}
