"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ImagenesListas from "components/imageneslistas";

const LateralImagenesCuadro = ({ imagenesCuadro = [], imageneslista }) => {

    const imagenesListaNumero = Number.isInteger(parseInt(imageneslista, 10)) ? parseInt(imageneslista, 10) : 0;
    const imagenesLista = ImagenesListas[imagenesListaNumero] || ImagenesListas[0]; 

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (imagenesLista.length > 0) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagenesLista.length);
            }, 1618);

            return () => clearInterval(interval); 
        }
    }, [imagenesLista]);

    return (
        <>
            {!!imagenesLista.length && (
                <p data-aos-once="true" data-aos="fade-up"  className={`gx:w-4/12 relative w-full mt-12 gx:mt-0 gx:ml-12 gx:aspect-[3/5] aspect-[5/2] overflow-hidden rounded-md shadow-black/30 shadow-md`} >
                    {imagenesLista.map((item, index) => (
                        <Image key={index} src={item} alt='' className={`text-blue-950 object-cover absolute top-0 left-0 w-full h-full transition-opacity ease-in-out duration-[618ms]
                             ${ index === currentImageIndex ? 'opacity-100' : 'opacity-0' }`}  />
                    ))}
                </p>
            )}
        </>
    );
};

export default LateralImagenesCuadro;
