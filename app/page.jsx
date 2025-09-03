"use client";
import { useState, useEffect } from "react";
import Cargador from "components/cargador";
import ImagenesListas from "components/imageneslistas";
import Link from 'next/link';
import Image from 'next/image';

import VideosGaleria from "components/videosgaleria";
import HockeyAcademyVideoA from 'components/hockeyacademyvideovideoa';
import PlantillaUno from 'components/plantillauno';

import ViajesGaleria from 'components/viajesgaleria';
import logo from 'public/citysoccer/logo2.png';

export default function Page() {
    return (
        <main className="min-h-screen w-full">
            <div className="min-h-screen w-full bg-[#3B3F44]">


                <PlantillaUno
                    contenta={
                        <HockeyAcademyVideoA>
                            <div className={` absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 `} >
                                <Image className={` w-2/5 md:w-1/5 h-auto `} src={logo} alt='' />

                            </div>
                        </HockeyAcademyVideoA>
                    }
                    contentb={
                        <section data-aos-once="true" data-aos="fade-up" className={` text-white text-center max-w-5xl mx-auto pt-16`} >
                            <div className={` flex flex-col md:flex-row gap-24 md:gap-5 mb-24 items-center md:items-start justify-center `}>
                                <div>
                                    <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 mb-6 text-[#000] `}>Próximos Eventos</h2>
                                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#BAECFF] mb-6 `} />
                                    <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] `}>Summer Camp Fútbol</h2>
                                    <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Diciembre de 2024<br />desde 16 hasta el 19.</p>
                                    <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Torneo Fútbol 7</h2>
                                    <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Enero de 2025<br />desde 15 hasta el 17.</p>
                                    <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Clínica Técnica Fútbol</h2>
                                    <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Febrero de 2025<br />desde 10 hasta el 12.</p>
                                    <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Liga de Fútbol 9</h2>
                                    <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Marzo de 2025<br />desde 5 en adelante.</p>
                                    <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Comienzo Academia Fútbol 2025</h2>
                                    <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Marzo de 2025, lunes 10.</p>
                                </div>
                                <div>
                                    <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-8 mb-6 text-[#000] `}>Eventos Pickleball 2025</h2>
                                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#BAECFF] mb-6 `} />
                                    <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#5fd2ff] `}>Torneo Principiantes</h2>
                                    <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Enero de 2025<br />desde 25 hasta el 26.</p>
                                    <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#5fd2ff] mt-6 `}>Clínica Técnica Pickleball</h2>
                                    <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Febrero de 2025<br />desde 20 hasta el 22.</p>
                                    <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#5fd2ff] mt-6 `}>Campeonato Abierto</h2>
                                    <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Abril de 2025<br />desde 12 hasta el 14.</p>
                                    <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#5fd2ff] mt-6 `}>Academia Pickleball</h2>
                                    <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Marzo de 2025<br />clases todo el año.</p>
                                </div>
                            </div>

                            <p className={` font-RobotoCondensed font-bold text-md sm:text-lg md:text-xl uppercase leading-loose mt-6 mb-24 `}>
                                <Link className={` text-white text-opacity-80 hover:text-opacity-100 hover:text-black inline-block py-1 px-3 sm:px-4 md:px-6 bg-blue-950 hover:bg-[#BAECFF] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300 `} href="mailto:citysoccer@gmail.com">
                                    Escríbenos y reserva tu cupo
                                    <svg className={` inline-block w-6 sm:w-8 md:w-12 ml-4 `} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                        <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg></Link></p>

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



                            <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto max-w-5xl z-30 pb-32 pt-24 `}>
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

            </div>
        </main>

    );
}
