'use Client';
import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImagenesListas from "components/imageneslistas";

const ViajesGaleria = ({ imageneslista, titulo = 'Galería de nuestros viajes', identitycampus }) => {

    const imagenesListaNumero = Number.isInteger(parseInt(imageneslista, 10)) ? parseInt(imageneslista, 10) : 0;
    const imagenesLista = ImagenesListas[imagenesListaNumero] || ImagenesListas[0];

    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(2);
    const galleryRef = useRef(null);
    const intervalRef = useRef(null);

    const startInterval = useCallback(() => {
        intervalRef.current = setInterval(() => {
            setCurrentGalleryIndex((prevIndex) => (prevIndex + 1) % imagenesLista.length);
        }, 4000);
    }, [imagenesLista.length]);

    const clearIntervalTimer = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }, []);

    useEffect(() => {
        startInterval();
        return () => clearIntervalTimer();
    }, [startInterval, clearIntervalTimer]);

    const handleNavClick = (index) => {
        setCurrentGalleryIndex(index);
        clearIntervalTimer();
        startInterval();
    };

    const [listaPosicion, setListaPosicion] = useState(0);

    useEffect(() => {
        const calculatePosition = () => {
            if (typeof window !== "undefined") {
                const isMedScreen = window.innerWidth >= 640;
                const position = isMedScreen ? currentGalleryIndex * -392 : currentGalleryIndex * -296;
                setListaPosicion(position);
            }
        };

        calculatePosition();

        if (typeof window !== "undefined") {
            window.addEventListener("resize", calculatePosition);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", calculatePosition);
            }
        };
    }, [currentGalleryIndex]); // Recalculate when currentGalleryIndex changes

    const identityCampus = identitycampus ? 1 : 0;

    return (
        <section className={` relative `}>
            <div className={` absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.05)_2rem,rgba(0,0,0,0.02)_calc(100%_-_2rem),rgba(0,0,0,0.15)_100%)] `} />
            <div className={` max-w-5xl w-full mx-auto relative`}>
                <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-[#000] text-4xl mx-8 mb-6 pt-12 `}>{titulo}</h2>
                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none ${identitycampus ? `bg-[rgb(211,0,126)]` : `bg-[#5fd2ff]`} mb-8 `} />
            </div>

            <div className={` relative max-w-5xl w-full mx-auto px-4 gx:px-0 rounded-md h-auto `}>
                <div className={` relative w-full overflow-y-visible overflow-x-hidden h-[22rem] sm:h-[28rem] `}> {/*  */}
                    {!!imagenesLista.length && (
                        <div ref={galleryRef} style={{ translate: `${listaPosicion}px 0` }} className={` absolute left-[calc(50%_-_156px)] sm:left-[calc(50%_-_202px)] top-5 w-full whitespace-nowrap no-scrollbar transition-all ease-in-out duration-1000 px-2 `}>  {/*  */}
                            {imagenesLista.map((item, index) => (
                                <span  className={` ${index === currentGalleryIndex ? `scale-105 sm:scale-110 z-50 shadow-black/70` : ` shadow-black/40` } aspect-1 inline-block relative h-72 sm:h-96 mx-1 shadow-lg rounded-sm overflow-hidden transition-all ease-in-out duration-700 `} key={index} > {/*  */}
                                    <Image className={` w-full h-full object-center object-cover `} src={item} alt='' />
                                    <div className={` absolute inset-0 backdrop-grayscale transition-all ease-in-out duration-700 ${index === currentGalleryIndex ? `opacity-0` : `opacity-80 bg-white/40` } `} />
                                    <Link className={` absolute inset-0 ${index === currentGalleryIndex ? `` : `hidden` } `} href={`./prontovista?index=${index}&imagenesListaNumero=${imagenesListaNumero}&identityCampus=${identityCampus}`} />
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className={` max-w-5xl w-full mx-auto px-4 gx:px-0 text-center pt-5 pb-10 relative `}>
                {!!imagenesLista.length && (
                    <div>
                        {imagenesLista.map((_, index) => (
                            <span key={index} onClick={() => handleNavClick(index)}
                                    className={` ${ index === currentGalleryIndex ? identitycampus ? 'bg-[rgb(211,0,126)] w-12 gx:w-16' : 'bg-[#33b4f5] w-12 gx:w-16' : 'bg-black bg-opacity-20 w-3 gx:w-4' } m-1.5 gx:m-2 inline-block rounded-full h-3 gx:h-4 cursor-pointer transition-all ease-in-out duration-300 `} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ViajesGaleria;

{/*

                            <div className={` h-96 w-1/6 bg-gradient-to-r from-black/30 to-transparent absolute top-0 left-3 `} />
                            <div className={` h-96 w-1/6 bg-gradient-to-l from-black/30 to-transparent absolute top-0 right-3 `} /> 
    */}