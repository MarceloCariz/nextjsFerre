import React from 'react';

export default function productos({ productos }) {
    const {title, price, urlImage} = productos;
    console.log("[_id]"+title+price+urlImage);
    return ( 
        <>
            {
                // productos.map(({ _id,title, price, urlImage }) => (
                //     <div key={_id}>
                //         
                //     </div>

                // ))
            }
            <h1>{title}</h1>
        <h1>{price}</h1>
        <img src={urlImage} alt="" />

        </>


    );
}


export async function getStaticPaths() {
    try {
        const res = await fetch('https://backend-ferreteria.herokuapp.com/api/products/')
        const { productos } = await res.json();
        const paths = productos.map(({ _id }) => ({ params: { _id: `${_id}` } }));
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch('https://backend-ferreteria.herokuapp.com/api/products/' + params._id)
        const { productos } = await res.json();
        return {
            props: {
                productos
            }
        }
    } catch (error) {
        console.log(error);
    }
}
