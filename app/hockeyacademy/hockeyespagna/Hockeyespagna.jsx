'use client';
import { useState, useEffect } from 'react';
import Cargador from 'components/cargador';
import ImagenesListas from 'components/imageneslistas';
import Image from 'next/image';

import Link from 'next/link';
import { Footer } from 'components/footer';

import ExperienciaGaleria from 'components/experienciaGaleria';
import ViajesGaleria from 'components/viajesgaleria';

import hockeytecnificacionVid from 'public/images/IDentity-Campus-Tecnificacion-2023.mp4';

import cabeceraFoto from 'public/images/Hockey-22-Entrenamiento.jpg';
import chevronRight from 'public/images/chevronRight.svg';



export default function Hockeyespagna() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const imageSources = [
            cabeceraFoto,
            chevronRight,
            ...ImagenesListas[5],
            ...ImagenesListas[9],
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
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white mt-[4.4rem] md:mt-0 `}>

            <section className={` block relative w-full aspect-[16/7] bg-black z-30 `}>
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <Image src={cabeceraFoto} className='object-cover object-center w-full h-full' alt='' />
                </div>
            </section>

            <div className={` relative bg-otoFondo `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <section data-aos-once="true" data-aos="fade-up" className={` relative z-30 text-white text-center max-w-5xl mx-auto py-24`} >
                    <h2 data-aos-once="true" data-aos="fade-up" className={` font-BebasNeue text-5xl text-black mx-8 mb-6`}>Campus de Hockey Hierba en España</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-6 `} />
                    <p className={` mx-auto max-w-lg font-RobotoCondensed text-2xl leading-normal mb-4 text-center hyphens-none tracking-tight indent-5 `} >Si estas en Europa y queres ser parte del mejor Campus de Hockey esta es tu oportunidad</p>
                    <div className={` my-16 mx-8 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8 max-w-7xl `}>
                        <div>
                            <h3 data-aos-once="true" data-aos="fade-up" className={` font-BebasNeue text-4xl italic mb-6 text-[#5fd2ff] `}>Hockey Hierba Valencia</h3>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-28 border-none bg-[#BAECFF] mb-6 `} />
                            <p className={` font-Roboto text-md font-bold leading-relaxed mb-4 uppercase `} >Julio 2025</p>
                            <p className={` font-Roboto text-lg leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >Experiencia orientada a deportistas de 12 a 18 años. Campus de verano con 10 sesiones de entrenamientos con entrenadores internacionales y la participación especial de  3 jugadoras olímpicas, en las instalaciones del Polideportivo Virgen del Carmen Beteró, Valencia.</p>
                            <p className={` font-Roboto font-bold text-lg leading-loose mt-6`}><Link className={` text-white text-opacity-80 hover:text-opacity-100 hover:text-black inline-block py-1 px-6 bg-blue-950 hover:bg-[#BAECFF] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300 `} href="./hockeyhierbavalencia">Más información <Image className={` inline-block h-8 w-auto `} src={chevronRight} alt='' /></Link></p>
                        </div>
                        <div>
                            <h3 data-aos-once="true" data-aos="fade-up" className={` font-BebasNeue text-4xl italic mb-6 text-[#5fd2ff] `}>Hockey Hierba Barcelona</h3>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-28 border-none bg-[#BAECFF] mb-6 `} />
                            <p className={` font-Roboto text-md font-bold leading-relaxed mb-4 uppercase `} >Julio 2025</p>
                            <p className={` font-Roboto text-lg leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >Experiencia orientada a deportistas de 12 a 18 años. Campus de verano con 14 sesiones de entrenamientos con entrenadores de selección y la participación especial de  jugadoras de talla mundial, olímpicas y/o mundialistas, en las instalaciones del Real Club de Polo de Barcelona.</p>
                            <p className={` font-Roboto font-bold text-lg leading-loose mt-6`}><Link className={` text-white text-opacity-80 hover:text-opacity-100 hover:text-black inline-block py-1 px-6 bg-blue-950 hover:bg-[#BAECFF] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300 `} href="./hockeyhierbabarcelona">Más información <Image className={` inline-block h-8 w-auto`} src={chevronRight} alt='' /></Link></p>
                        </div>
                    </div>
                </section>
            </div>

            <ExperienciaGaleria
                ExperienciaImgs={ImagenesListas[9]}
                title="La mejor experiencia de hockey de vida" />

            <section className={` relative pb-0 gx:pb-24`}>
                <div className={` max-w-5xl w-full mx-auto `}>
                    <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>
                        Conoce más sobre nuestro Campus de Verano Hockey Hierba
                    </h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#72efdd] mb-8 `} />
                </div>
                <div className={`relative max-w-5xl w-full mx-auto aspect-[16/9] overflow-hidden `}>
                    <video poster='images/Hockey-22-Entrenamiento-II.jpg' className='absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-700' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src={hockeytecnificacionVid} type="video/mp4" /> 
                    </video>
                    </div>
            </section>

            <ViajesGaleria
                imageneslista='5'
                titulo='Nuestros campus en imágenes' />

            <div className={` relative bg-otoFondoDos clear-both `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <Footer />
            </div>
        
        </main>
    );
}


