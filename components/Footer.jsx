import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-32  h-auto bg-blue-600 sm:pt-12 pt-4 ">
      <div className="flex flex-col items-center text-center font-semibold text-xl text-white">
        <Link className=" text-white" href="/inicio">FerreteriaPortales</Link>
          <hr className=" border-red-600 border-2 bg-red-600 w-40 md:w-64" />
      </div>
      
      <div className="sm:flex sm:justify-between sm:mx-32 grid grid-cols-2 mx-4 sm:pb-12 pb-4 items-center ">
        <div className="content-start">
          <h1 className="text-left  text-white sm:text-2xl text-lg font-semibold">
            Donde encontrarnos
          </h1>
          <iframe
            className="sm:w-auto sm:h-60  w-48 h-40   "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26598.180686399373!2d-70.57459656044918!3d-33.559284499999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d134c5025889%3A0xba54a9a83e335a5!2sFerreteria%20Portales!5e0!3m2!1ses-419!2scl!4v1643220550776!5m2!1ses-419!2scl"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
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
    </div>
  );
};

export default Footer;
