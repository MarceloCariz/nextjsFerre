import React from 'react';

export default function productos({ productos }) {

    return (
        <>
            {
                productos.map(({ _id,title, price, urlImage }) => (
                    <div key={_id}>
                        <h1>{title}</h1>
                        <h1>{price}</h1>
                        <img src={urlImage} alt="" />
                    </div>

                ))
            }

        </>


    );
}


export async function getStaticPaths() {
    try {
        const res = await fetch('https://backend-ferreteria.herokuapp.com/api/products/')
        const { productos } = await res.json();
        const paths = productos.map(({ title }) => ({ params: { title: title } }));
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
        const res = await fetch('https://backend-ferreteria.herokuapp.com/api/products/' + params.title)
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
