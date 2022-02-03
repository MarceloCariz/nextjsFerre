import Layout from '../../components/Layout';

export default function productos({ productos }) {
    // const { title, price, urlImage, descripcion,  category , stock} = productos;
    // console.log(title);


    return (
        <>
            {/* <NavBar productosProps={productos} />
             */}

            <Layout productosProps={productos}>

            <div className='h-96 relative mt-20'>

            {
                productos.map(({ _id, title, price, urlImage, descripcion, category, stock }) => (
                    <div key={_id} className='mx-2  md:mt-12 md:mx-32 flex md:justify-center items-center  '>

                        {/* <div className='relative w-60 h-40 md:w-72 md:h-72 mr-8'> */}
                            {/* <Image src={`${urlImage}`} alt={`${title}`} layout='responsive' width={80} height={80}  quality={20} objectFit='cover'  />
                             */}
                             <img className='object-cover  w-1/2 h-1/3  md:w-72 md:h-72  rounded-md' src={urlImage} alt={`${title}`} />

                        {/* </div> */}

                        <div className='mx-2 flex flex-col space-y-2 md:text-2xl justify-center text-md '>
                            <h1 className='font-semibold'> Nombre: <span className='font-normal' >{title}</span></h1>
                            <h3 className='font-semibold' >Precio: <span className='font-normal' >$ {price}</span></h3>
                            <h3 className='font-semibold'> Categoria: <span className='font-normal'>{category}</span></h3>
                            <p className='font-semibold'>stock: <span className='font-normal'>{stock}</span></p>
                            <p className='font-semibold'>Descripcion: <span className='font-normal'>{descripcion}</span></p>


                        </div>
                    </div>

                ))
            }
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


                {/* <Footer /> */}
                </Layout>

        </>


    );
}


export async function getStaticPaths() {
    try {
        const res = await fetch('https://backend-ferreteria.herokuapp.com/api/products/')
        const { productos } = await res.json();
        const paths = productos.map(({ title }) => ({ params: { title: `${title}` } }));
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
