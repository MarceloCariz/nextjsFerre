import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="  h-auto  bg-blue-600 sm:pt-12 pt-4 bottom-0   mt-24 ">
      <div className="flex flex-col items-center text-center font-semibold text-xl text-white">
        <Link className=" text-white" href="/">FerreteriaPortales</Link>
          <hr className=" border-red-600 border-2 bg-red-600 w-40 md:w-64" />
      </div>
      
      <div className="sm:flex sm:justify-between sm:mx-32 grid grid-cols-2 mx-4 sm:pb-12 pb-4 items-center ">
        <div className="content-start">
          <h3 className="text-left  text-white sm:text-2xl text-md font-semibold">
            Donde encontrarnos?
          </h3>
     
          <iframe title="Ubicacion Ferreteria" className="sm:w-auto sm:h-60  w-40 h-40   " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212851.76059259466!2d-70.7173169488407!3d-33.53235748577657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d134c5025889%3A0xba54a9a83e335a5!2sFerreteria%20Portales!5e0!3m2!1ses-419!2scl!4v1643905964009!5m2!1ses-419!2scl" width="400" height="300"  allowFullScreen="" loading="lazy"></iframe>
        </div>
        <div className="flex flex-col ml-4 text-white font-semibold text-mds ">
         
          {/* <Link className=" text-white" href="/inicio">FerreteriaPortales</Link>
          <hr className="border-red-600 border-2 bg-red-600 w-40 md:w-64" /> */}
          <ul className="text-white font-semibold flex flex-col sm:space-y-4 space-y-2 sm:mt-0 mt-2 ">
            <li>Quienes Somos?</li>
            <li>Politica de despacho</li>
            <li>Productos</li>
            <li>Capacidades de la pagina</li>
            <li>Whatsapp</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
