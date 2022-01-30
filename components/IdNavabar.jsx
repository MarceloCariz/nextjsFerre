import React from 'react';
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
const IdNavabar = () => {
  return (
    <div>
    <div className='h-1 bg-red-600'></div>
    <div className='h-24 bg-blue-600 flex flex-row space-x-12 md:flex-row md:justify-center items-center md:space-x-32  px-4 md:px-64 py-2'>
        <div className='text-white font-bold text-2xl sm:text-3xl'>
            <Link  href='/inicio'>
                FerreteriaPortales
            </Link>
            <hr className="border-red-600 border-2 bg-red-600 w-52 md:w-64" />
        </div>
        <div className='flex space-x-4 flex-row  md:pb-2 md:flex-1 md:flex'>
            <div className=' flex  flex-row  font-semibold text-white md:pb-2 md:hidden space-x-2 '>
                <FontAwesomeIcon className='  text-xl text-red-500' icon={faMapMarkerAlt} />
                <a className="text-md" href='https://goo.gl/maps/gSJ3rXaMxuzDrGVr6' target="_blank">Encuentranos aqui</a>
            </div>
        </div>
        <div className='md:pb-2 font-md text-white md:flex space-x-2 hidden'>
            <FontAwesomeIcon className=' text-2xl text-red-500' icon={faMapMarkerAlt} />
            <a className="text-lg" href='https://goo.gl/maps/gSJ3rXaMxuzDrGVr6' target="_blank">Encuentranos aqui</a>
        </div>

    </div>
</div>
  );
};

export default IdNavabar;
