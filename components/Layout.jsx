


// import React, { Children } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ productosProps,children }) => {
    return (
        <>
            <NavBar productosProps={productosProps} />
            <main className="bg-gray-250">
                {children}
            </main>

            <Footer />

        </>


    );
};

export default Layout;
