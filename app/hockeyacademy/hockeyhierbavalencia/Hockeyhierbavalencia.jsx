'use client';
import { useState, useEffect } from 'react';
import Cargador from 'components/cargador';
import ImagenesListas from 'components/imageneslistas';
import Image from 'next/image';
import Link from 'next/link';


import { Footer } from 'components/footer';
import LateralImagenesCuadro from 'components/LateralImagenesCuadro';
import ExperienciaGaleria from 'components/experienciaGaleria';
import ViajesGaleria from 'components/viajesgaleria';

import calendarioIcono from 'public/images/calendar-days.svg';
import calendarioCheckIcono from 'public/images/calendar-check.svg';

import hockeyTecnificacionForm from 'public/images/Portada-Campus-Hockey-Valencia-2024.jpg';



const Hockeyhierbavalencia = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const imageSources = [
            calendarioIcono,
            calendarioCheckIcono,
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

            <section className={` block relative w-full aspect-[16/7] bg-black z-30 mb-12 `}>
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <video poster='images/Hockey-22-Entrenamiento.jpg' className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src='images/IDentity-Campus-Tecnificacion-2023.mp4' type="video/mp4" />
                    </video>
                </div>
            </section>

            <section className={` block relative w-full max-w-5xl z-30 my-12 px-4 gx:px-0  text-neutral-700 mx-auto `}>
                <div className={` flex flex-col gx:flex-row `}>
                    <div className={` gx:w-8/12 `} data-aos-once="true" data-aos="fade-up">
                        <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Campus de Verano Hockey Hierba<br/><span className={` text-nowrap text-[#3998be] `}>Valencia 2025</span></h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-8 `} />
                        <p className={` text-center mb-6 h-auto`} ><Image className={` mx-auto w-8 `} src={calendarioIcono} alt='' /></p>
                        <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-0 `}>Del lunes 30 de junio al sábado 5 de julio</h2>
                        <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 `}>9 sesiones de entrenamiento</h2>
                        <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5`} >
                        Nuestro Campus es una experiencia orientada a deportistas de 12 a 18 años, con el interés de mejorar su técnica individual y la comprensión integral del deporte.</p>
                        <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >
                        Brindamos un Campus de 9 sesiones de entrenamientos a cargo de entrenadores internacionales y la participación especial de 3 deportistas olímpicos con sus selecciones,  en las instalaciones del Polideportivo Virgen del Carmen Beteró, Valencia.</p>
                        <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >
                        Proponemos una experiencia inolvidable con el objetivo principal de lograr motivar la formación integral en los deportistas. Procuramos que los mismos mejoren su técnica individual bajo un proceso de entrenamiento intensivo.</p>
                        <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >
                        Dentro de los contenidos que se desarrollan, contamos con gestos de habilidades aéreas y suelo, de definición en área chica y grande, de despido y como contenido estelar el desarrollo y perfeccionamiento de la arrastrada.</p>
                        <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >
                        <strong>Nuestro Campus de verano cuenta con sesiones de entrenamiento exclusivas para porteros/as dictadas por Mariana Scandura (Selección Argentina)</strong></p>
                        {/*<p className={` font-Roboto font-normal text-md text-white pb-12 text-center mt-6 `}>
                            <Link className={` inline-block mx-auto py-2 px-8 bg-[rgb(188,0,121)] bg-fucsiaAzulRatioFondo hover:bg-none rounded-md border-black border-solid border-1 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-500 `} href="#reservas">
                                Información <Image className={` align-text-top inline-block h-4 w-auto ml-2`} src={calendarioCheckIcono} alt='' /></Link>
                            <Link className={` inline-block mx-8 text-[#25D366] hover:text-sky-900 transition-all ease-in-out duration-200 `} href='https://api.whatsapp.com/send/?phone=34653783576' >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`inline-block h-14 w-auto `} fill="currentColor">
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>
                            </Link></p>*/}
                    </div>
                    <LateralImagenesCuadro
                        imageneslista="5" />

                </div>
            </section>

            <ExperienciaGaleria
                ExperienciaImgs={ImagenesListas[9]}
                title="La mejor experiencia de hockey hierba de vida" />

            <section data-aos-once="true" data-aos="fade-up" className={` relative max-w-5xl w-full mx-auto `}>
                <p className={` font-Roboto font-normal text-md text-white pb-8 text-center mt-6 `}>
                    <Link className={` cursor-pointer inline-block mx-auto py-2 px-8 bg-otoFondoRatioFondo hover:bg-otoFondoRatioFondoHover rounded-md border-black border-solid border-1 border-opacity-0 no-underline shadow-black shadow-sm transition-all ease-in-out duration-500 text-white hover:border-opacity-10 `}
                        href='ID-Campus-tecnificacion-Barcelona-2024.pdf'
                        download='ID-Campus-tecnificacion-Barcelona-2024.pdf'
                        type='application/pdf'
                        alt=''>
                        Descargá el Programa de Actividades <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={`inline-block h-4 w-auto ml-4 `} fill="currentColor"><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" /></svg>
                    </Link></p>
            </section>

            <section className={` block relative w-full h-auto mb-12 `}>
                <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Conocé más sobre nuestro campus de verano hockey hierba</h2>
                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-8 `} />

                <div className={` relative max-w-5xl mx-auto `}>
                    <video poster='images/Hockey-tecificacion-barcelona-2023.jpg' className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src='images/IDentity-Campus-Tecnificacion-2023.mp4' type="video/mp4" />
                    </video>
                </div>
                <p className={` font-Roboto font-normal text-md text-white pb-12 text-center mt-8 `}>
                    <Link className={` cursor-pointer inline-block mx-auto py-2 px-8 bg-otoFondoRatioFondo hover:bg-otoFondoRatioFondoHover rounded-md border-black border-solid border-1 border-opacity-0 no-underline shadow-black shadow-sm transition-all ease-in-out duration-500 text-white hover:border-opacity-10 `} href="#reservas">
                        Información <Image className={` align-text-top inline-block h-4 w-auto ml-2`} src={calendarioCheckIcono} alt='' /></Link>
                </p>
            </section>

            <ViajesGaleria
                imageneslista='5'
                titulo='Nuestros campus en imágenes' />

            <section id='reservas' className={` bg-white py-0 px-0 gx:px-4 `}>
                <div className={` max-w-5xl mx-auto grid grid-cols-1 gx:grid-cols-2 gap-6`}>
                    <div className={`  w-full `}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Solicitá más información</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-8 `} />
                        <form className={` pb-12 px-6 gx:px-0 font-Roboto text-lg text-neutral-500`}>
                            <input className={` block mt-5 w-full border-b-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none  p-2`} type='text' placeholder='Nombre y apellido' />
                            <input className={` block mt-5 w-full border-b-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none p-2 `} type='email' placeholder='Correo electrónico' />
                            <input className={` block mt-5 w-full border-b-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none p-2 `} type='tel' placeholder='Número de teléfono' />
                            <input className={` block mt-5 w-full border-b-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none p-2 `} type='number' placeholder='Edad' />
                            <input className={` block mt-5 w-full border-b-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none p-2 `} type='text' placeholder='Club' />

                            <label className={` mt-5 whitespace-normal flex flex-row `} htmlFor='privacidadPoliticas'>
                                <span className={` mr-3 block w-5 h-5 border-2 border-solid border-black border-opacity-40 bg-transparent `}>
                                    <input className={` m-0 p-0 block border-0 w-full h-full bg-transparent focus:outline-none`} type='checkbox' name='privacidadPoliticas' id='privacidadPoliticas' /></span>
                                <span className={`block hyphens-auto font-RobotoCondensed leading-tight `}>
                                    Sí, acepto la política de privacidad y los términos y condiciones.</span></label>
                            <p className={` block align-bottom mt-8 text-center `}>
                                <input type='submit' className={` cursor-pointer inline-block mx-auto py-2 px-8 bg-otoFondoRatioFondo hover:bg-otoFondoRatioFondoHover rounded-md border-black border-solid border-1 border-opacity-0 no-underline shadow-black shadow-sm transition-all ease-in-out duration-500 text-white hover:border-opacity-10 `} value='Enviar mensaje' /></p>

                        </form>
                    </div>
                    <p className={` w-full h-72 gx:min-h-full overflow-hidden `}>
                        <Image data-aos-once="true" data-aos="fade-up" className={` object-cover object-center w-full h-full `} src={hockeyTecnificacionForm} alt='' /></p>
                </div>
            </section>

            <div className={` relative bg-otoFondoDos clear-both `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <Footer />
            </div>
        </main>
    );
}

export default Hockeyhierbavalencia;

