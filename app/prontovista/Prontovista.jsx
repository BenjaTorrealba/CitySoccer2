"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import ImagenesListas from "components/imageneslistas";
import Cargador from 'components/cargador';

const ProntoVista = ({ }) => {

    const router = useRouter();
    const volverBoton = () => router.back();

    const searchParams = useSearchParams();
    const initialIndex = parseInt(searchParams.get("index"), 10) || 0;

    const [thumbnailsVisible, setThumbnailsVisible] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

    const imagenesListaNumero = parseInt(searchParams.get("imagenesListaNumero"), 10) || 0;
    const imagenesLista = ImagenesListas[imagenesListaNumero] || ImagenesListas[0]; 

    const identityCampusNumero = parseInt(searchParams.get("identityCampus"), 10) || 0;
    const identityCampus = identityCampusNumero || 0; 

    useEffect(() => {
        if (initialIndex >= 0 && initialIndex < imagenesLista.length) {
          setCurrentImageIndex(initialIndex);
        }
      }, [initialIndex, imagenesLista.length]);

    const listaPosicion = currentImageIndex * -88;



    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const imageSources = [
            ...imagenesLista,
          ];
        preloadImages(imageSources).then(() => setLoading(false));
    }, [imagenesLista]);

    const preloadImages = (imageSources) => {
        return Promise.all(
          imageSources.map((src) => {
            return new Promise((resolve, reject) => {
              // Extract the src if the image is an object (imported asset)
              const imageSrc = typeof src === 'string' ? src : src?.src;
              if (!imageSrc) {
                console.error('Invalid image source:', src);
                resolve(); // Resolve even if invalid to avoid blocking
                return;
              }
      
              const img = new window.Image();
              img.src = imageSrc;
              img.onload = resolve;
              img.onerror = (error) => {
                console.error(`Failed to preload image: ${imageSrc}`, error);
                resolve(); // Resolve even on error to avoid blocking
              };
            });
          })
        );
      };

    if (loading) {
        return <Cargador />;
    }

    return (
        <main className={` relative w-dvw h-dvh flex flex-col justify-end items-center overflow-hidden bg-black `} >

            {!!imagenesLista.length && (
                    <section className={` absolute inset-0 `} >
                    {imagenesLista.map((img, index) => (
                            <Image key={index} className={` absolute w-full h-full object-center object-contain ${index === currentImageIndex ? `opacity-100` : `opacity-0` } transition-all ease-in-out duration-300 `} src={img} alt='' />
                    ))}
                </section>
            )}

            <section className={` absolute inset-0 w-full h-full `} >
                <p onClick={volverBoton} className={` tracking-tight cursor-pointer ml-3 sm:ml-4 md:ml-6 mt-6 sm:mt-8 md:mt-12 inline-block shadow-md shadow-black/70 px-4 py-1 font-black text-xl text-black text-opacity-60 hover:text-opacity-100  ${identityCampus === 1 ? `bg-[rgb(211,0,126)] text-white` : `bg-[#5fd2ff] text-black` } uppercase rounded-sm transition-all ease-in-out duration-300 `}>
                    Volver
                </p>
            </section>

            <section className={` relative block w-[calc(100vw-3rem)] text-center ${thumbnailsVisible ? `h-44` : `h-16 ` } transform-all ease-in-out duration-700 overflow-hidden `} >

                <p className={` tracking-tight relative cursor-pointer mx-auto inline-block shadow-md shadow-black/70 px-4 py-1 font-black text-base text-opacity-60 hover:text-opacity-100  ${identityCampus === 1 ? `bg-[rgb(211,0,126)] text-white` : `bg-[#5fd2ff] text-black` } uppercase rounded-sm transition-all ease-in-out duration-300 `}
                        onClick={() => setThumbnailsVisible(!thumbnailsVisible)}>
                    {thumbnailsVisible ? `Ocultar Lista` : `Mostrar Lista` }
                </p>

                {!!imagenesLista.length && (
                    <div style={{ translate: `${listaPosicion}px 0` }} className={` absolute top-10 left-[calc(50%_-_56px)] h-36 whitespace-nowrap pt-6 px-3 transition-all ease-in-out duration-700 ${thumbnailsVisible ? `opacity-100` : `opacity-0` } `} >
                        {imagenesLista.map((item, index) => (
                            <div onClick={() => setCurrentImageIndex(index)} key={index} className={` cursor-pointer relative inline-block shadow-lg shadow-black/70 hover:shadow-lg rounded-sm overflow-hidden ${thumbnailsVisible ? `opacity-100` : `opacity-0` } aspect-1 h-20 mx-1 hover:scale-125 hover:z-50 transition-all ease-in-out duration-300 `}>
                                <Image className={` relative w-full h-full object-center object-cover `} src={item} alt='' />
                                <div className={` absolute top-0 left-0 w-full h-full border-4 border-solid ${identityCampus === 1 ? `border-[rgb(211,0,126)]` : `border-[#5fd2ff]` } ${index === currentImageIndex ? `` : `hidden` } `} />
                                <div className={` absolute top-0 left-0 w-full h-full backdrop-grayscale ${index === currentImageIndex ? `hidden` : ` opacity-70 hover:opacity-0` } `} />
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}

export default ProntoVista;