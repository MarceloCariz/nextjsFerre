import React from 'react';
import CategoriaScreen from '../../../components/CategoriaScreen';

export  default function categorias ({productosCategoria}){
  console.log(productosCategoria);
  return (
      <CategoriaScreen productosCategoria={productosCategoria}/>

  );






};


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
