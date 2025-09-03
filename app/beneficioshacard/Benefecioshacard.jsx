'use client';
import { useState, useEffect } from 'react';
import Cargador from 'components/cargador';

import PlantillaUno from 'components/plantillauno';
import Image from 'next/image';
import ImagenesListas from 'components/imageneslistas';

export default function BenefeciosHaCard() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const imageSources = [
            ...ImagenesListas[7],
            ...ImagenesListas[8].map((item) => item.imagen),
          ];

        preloadImages(imageSources).then(() => setLoading(false));
    }, []);

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
        <PlantillaUno
            contenta={

                <section className={` block relative w-full aspect-[16/5] `}>
                    <Image src={ImagenesListas[7][2]} className={` absolute w-full h-full object-center object-cover `} alt='' />
                    <div className={` relative flex flex-col justify-center items-center w-full h-full `}>
                        <h2 className={` block w-full relative text-center tracking-wide font-BebasNeue text-white text-4xl sm:text-5xl md:text-6xl mx-8 `} style={{ textShadow: `0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black` }}>HA Card</h2>
                    </div>
                </section>

            }
            contentc={
                <>
                    <section className={` relative mx-auto max-w-5xl pb-16 pt-24`}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Beneficios</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-3 `} />
                        <div className={` block text-center `}>

                            <div className={` mx-auto max-w-2xl p-6 items-start justify-start align-top `}>
                                <p data-aos-once="true" data-aos="fade-up" className={` font-Roboto font-medium text-lg sm:text-xl md:text-2xl text-blue-950 leading-normal text-justify hyphens-auto `}>
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Productos de nuestras alianzas estratégicas, todas nuestr@s jugador@s que tengan la <span className={` font-extrabold  text-sky-600 `}>HA Card</span> podrán disfrutar de descuentos exclusivos con nuestros aliados.</p>
                            </div>
                            {!!ImagenesListas[8].length && (
                                <div className={` grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 mx-auto max-w-sm md:max-w-2xl lg:max-w-5xl text-center overflow-hidden py-12 px-6 `}>
                                    {ImagenesListas[8].map((src, index) => (
                                        <div key={index} className={` flex flex-col md:flex-row mx-auto  w-full`}>
                                            <div className={` flex flex-col md:mr-8  mt-6 sm:mt-7 md:mt-0  mb-2 sm:mb-4 md:mb-0 justify-center items-center `}>
                                                <span data-aos-once="true" data-aos="fade-up" className={` relative inline-block bg-[#76b2cc] rounded-full mx-auto w-36 md:w-44 h-36 md:h-44`}>
                                                    <Image className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9/12 h-auto `} src={src.imagen} alt='' />
                                                </span>
                                            </div>
                                            <div className={` flex flex-col flex-grow justify-center items-center md:items-start`}>
                                                <h2 className={` font-Roboto font-extrabold text-xl sm:text-2xl md:text-3xl text-[#347996] leading-normal text-center md:text-left `}>{src.titulo}</h2>
                                                <p className={` font-Roboto font-normal text-xl md:text-2xl text-blue-950 leading-snug text-center md:text-left `}>{src.descripcion}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>

                    <section className={` relative mx-auto max-w-5xl pb-32 `}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>HA Card</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-3 `} />
                        <div className={` block text-center `}>


                            <div className={` mx-auto max-w-2xl p-6 items-start justify-start align-top `}>
                                <p data-aos-once="true" data-aos="fade-up" className={` font-Roboto font-medium text-lg sm:text-xl md:text-2xl text-blue-950 leading-normal text-justify hyphens-auto `}>
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>La credencial <span className={` font-extrabold  text-sky-600 `}>HA Card</span> será un premio que las jugadoras obtendrán luego de tener 5 meses de antigüedad en la academia.</p>
                            </div>

                            <div className={` grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-6 p-6`}>
                                <Image data-aos-once="true" data-aos="fade-up" className={` shadow-lg shadow-[rgba(0,0,0,0.5)] `} src={ImagenesListas[7][0]} alt='Beneficios' />
                                <Image data-aos-once="true" data-aos="fade-up" className={` shadow-lg shadow-[rgba(0,0,0,0.5)] `} src={ImagenesListas[7][1]} alt='Fiesta HA ' />
                            </div>

                        </div>
                    </section>
                </>
            }
        />
    );
};
