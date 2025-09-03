'use client';
import { useState, useEffect } from 'react';
import Cargador from 'components/cargador';
import ImagenesListas from 'components/imageneslistas';

import VideosGaleria from 'components/videosgaleria';
import Link from 'next/link';
import Image from 'next/image';
import PlantillaUno from 'components/plantillauno';

import ViajesGaleria from 'components/viajesgaleria';
import HockeyAcademyVideoA from 'components/hockeyacademyvideovideoa';

export default function Eventosproximos() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const imageSources = [
            ...ImagenesListas[1],
            ...ImagenesListas[2],
            ...ImagenesListas[3],
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
                <HockeyAcademyVideoA alto={` h-[50vh] `} >
                    <div className={` block absolute left-0 top-0 w-full h-full bg-black opacity-60 `} />
                    <div className={` relative flex flex-col justify-center items-center w-full h-full `}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` block w-full relative text-center tracking-wide font-BebasNeue text-[#BAECFF] text-6xl mx-8 `} style={{ textShadow: `0 0 1rem rgba(0,0,0,1),0 0 2rem rgba(0,0,255,0.5)` }}>Próximos Eventos</h2>
                    </div>
                </HockeyAcademyVideoA>
            }
            contentb={
                <section className={` relative text-white text-center max-w-5xl mx-auto pt-16 `} >
                    <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-8 mb-6 text-[#000] `}>Próximos Eventos</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#BAECFF] mb-6 `} />
                    <div className={` flex flex-col md:flex-row gap-0 md:gap-5 mb-24 items-center md:items-start justify-center `}>
                        <div>
                            <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] `}>Summer Camp sub-13</h2>
                            <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >Diciembre de 2024<br />desde 16 hasta el 19.</p>
                            <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Summer Camp +13</h2>
                            <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >Diciembre de 2024<br />desde 20 hasta el 22.</p>
                            <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Summer Camp</h2>
                            <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >Enero de 2025<br />desde 10 hasta el 13.</p>
                        </div>
                        <div>
                            <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 md:mt-0 `}>Actividad Especial</h2>
                            <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >Febrero de 2025<br />desde 17 en adelante.</p>
                            <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Comienzo Academia 2025</h2>
                            <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >Marzo de 2025, lunes 3.</p>
                        </div>
                    </div>
                    <p className={` font-RobotoCondensed font-bold text-md sm:text-lg md:text-xl uppercase leading-loose mt-6 mb-24 `}>
                        <Link className={` text-white text-opacity-80 hover:text-opacity-100 hover:text-black inline-block py-1 px-3 sm:px-4 md:px-6 bg-blue-950 hover:bg-[#BAECFF] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300 `} href="mailto:hockeyacademychile@gmail.com">
                            Escríbenos y reserva tu cupo
                            <svg className={` inline-block w-6 sm:w-8 md:w-12 ml-4`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg></Link></p>

                    <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-8 mb-6 text-[#000] `}>Convenios y Descuentos en Tiendas</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#BAECFF] mb-6 `} />
                    <div className={` flex flex-col md:flex-row gap-0 md:gap-5 mb-24 items-center md:items-start justify-center `}>
                        <div>
                            <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] `}>MUNICH</h2>
                            <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >Precio promocional de<br />Zapatillas MUNICH Comprando en HA.</p>
                            <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>SmellWell</h2>
                            <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >Precio promocional por<br />compras de SmellWell en HA.</p>
                            <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>The Candyland</h2>
                            <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >15% Off en tiendas<br />The Candyland.</p>
                            <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Uni-ko</h2>
                            <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >15% Off en Uni-ko web<br />(código web HACADEMY).</p>
                        </div>
                        <div>
                            <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 md:mt-0 `}>Full Hockey</h2>
                            <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >10% Off Full Hockey.</p>
                            <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Sportika</h2>
                            <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >10% Off en tienda Sportika y<br />en la web (código web HA10%).</p>
                            <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Identity Campus</h2>
                            <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >Descuento en los Camp de<br />Europa con Identity Campus.</p>
                        </div>
                    </div>
                </section>
            }
            contentc={
                <>
 
                    <VideosGaleria
                            imageneslista="15"
                            titulo="Hockey Academy Camp en Videos" />

                    <ViajesGaleria
                        imageneslista="1"
                        titulo="Hockey Academy Camp en Imágenes" />

                    <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto max-w-5xl pt-32`}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Sponsors Hockey Academy</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-5 `} />
                        {!!ImagenesListas[2].length && (
                            <div className={` mx-auto text-center overflow-visible `}>
                                {ImagenesListas[2].map((src, index) => (
                                    <span data-aos-once="true" data-aos="fade-up" key={index} className={` relative inline-block aspect-1 bg-[#76b2cc] rounded-full w-36 overflow-hidden m-2 sm:m-6 md:m-8`}>
                                        <Image className={` absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-9/12 h-auto `} src={src} alt='' />
                                    </span>
                                ))}
                            </div>
                        )}
                    </section>
                    <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto max-w-5xl pb-32 pt-24 `}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Alianzas Estratégicas</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-5 `} />
                        {!!ImagenesListas[3].length && (
                            <div className={` mx-auto text-center overflow-visible `}>
                                {ImagenesListas[3].map((src, index) => (
                                    <span data-aos-once="true" data-aos="fade-up" key={index} className={` relative inline-block aspect-1 bg-[#76b2cc] rounded-full w-36 overflow-hidden m-2 sm:m-6 md:m-8`}>
                                        <Image className={` absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-9/12 h-auto `} src={src} alt='' />
                                    </span>
                                ))}
                            </div>
                        )}
                    </section>
                </>
            }
        />
    );
}
