'use client';
import { useState, useEffect } from 'react';
import Cargador from 'components/cargador';

import contactoFondo from 'public/hockeyacademycamp/hockeyacademycamp_contacto_fondo_b_.jpg';
import { useForm, ValidationError } from "@formspree/react";


import PlantillaUno from "components/plantillauno";

export default function Contacto() {
    const [state, handleSubmit] = useForm("mzzbqrly");
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const imageSources = [
            contactoFondo
        ];

        preloadImages(imageSources).then(() => setLoading(false));
    }, []);

    const preloadImages = (imageSources) => {
        return Promise.all(
            imageSources.map((src) => {
                return new Promise((resolve, reject) => {

                    const imageSrc = typeof src === 'string' ? src : src?.src;
                    if (!imageSrc) {
                        console.error('Invalid image source:', src);
                        resolve();
                        return;
                    }

                    const img = new window.Image();
                    img.src = imageSrc;
                    img.onload = resolve;
                    img.onerror = (error) => {
                        console.error(`Failed to preload image: ${imageSrc}`, error);
                        resolve();
                    };
                });
            })
        );
    };

    if (loading) {
        return <Cargador />;
    }

    if (state.succeeded) {
        return (
            <PlantillaUno
                contentc={
                    <>
                        <div className={`absolute w-full h-full bg-otoContactoGradient `} />
                        <div className={`absolute w-full h-full opacity-50 bg-cover bg-center bg-no-repeat grayscale `} style={{ backgroundImage: `url(${contactoFondo.src})` }} />

                        <section className={`relative bg-transparent py-0 mt-16 md:mt-0 `}>
                            <div className={`max-w-3xl mx-auto flex justify-center items-center`}>
                                <div className={`bg-[#37678c] bg-opacity-60 px-8 shadow-lg w-full backdrop-blur-sm h-screen flex flex-col items-center justify-center `}>
                                    <h2 data-aos-once="true" data-aos="fade-up" className={`text-center font-BebasNeue text-[#00445f] text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-12 mx-8 uppercase `}>
                                        Su mensaje ha sido enviado.<br/>
                                        Gracias por contactarnos.
                                    </h2>
                                </div>
                            </div>
                        </section>
                    </>
                }
            />
        )
    }

    return (
        <PlantillaUno
            contentc={
                <>
                    <div className={`absolute w-full h-full bg-otoContactoGradient `} />
                    <div className={`absolute w-full h-full opacity-50 bg-cover bg-center bg-no-repeat grayscale `} style={{ backgroundImage: `url(${contactoFondo.src})` }} />

                    <section className={`relative bg-transparent py-0 mt-16 md:mt-0 `}>
                        <div className={`max-w-3xl mx-auto flex justify-center items-center`}>
                            <div className={`bg-[#37678c] bg-opacity-60 px-8 shadow-lg w-full backdrop-blur-sm `}>
                                <h2 data-aos-once="true" data-aos="fade-up" className={`text-center font-BebasNeue text-[#00445f] text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-12 mx-8 mb-6 uppercase`}>
                                    Contacto
                                </h2>
                                <hr data-aos-once="true" data-aos="flip-left" className={`block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-8`} />
                                <form className={`pb-12 px-6 gx:px-0  text-white font-Roboto text-base gx:text-lg`}
                                    onSubmit={handleSubmit}>
                                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5`}>
                                        <input className={`flex-1 border-b-2 border-solid border-white bg-transparent p-1 lg:p-2 xl:p-3 focus:outline-none appearance-none placeholder:text-white `} type='text' placeholder='Nombre' name='nombre' />
                                        <input className={`flex-1 border-b-2 border-solid border-white bg-transparent p-1 lg:p-2 xl:p-3 focus:outline-none placeholder:text-white `} type='text' placeholder='Apellido' name='apellido' />
                                        <input className={`flex-1 border-b-2 border-solid border-white bg-transparent p-1 lg:p-2 xl:p-3 focus:outline-none appearance-none placeholder:text-white `} name='email' id='email' type='email' placeholder='Correo electrónico' />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                        <input className={`flex-1 border-b-2 border-solid border-white bg-transparent p-1 lg:p-2 xl:p-3 focus:outline-none appearance-none placeholder:text-white `} type='tel' placeholder='Número de teléfono' name='telefono' />
                                    </div>
                                    <div className={`mb-5`}>
                                        <label htmlFor='experiencia' className={`block mb-2 appearance-none`}>¿Qué experiencia deportiva te interesa?</label>
                                        <select id='experiencia' name='experiencia' className={`w-full border-b-2 border-solid border-white bg-transparent p-0 lg:p-1 xl:p-2 focus:outline-none appearance-none rounded-none`}>
                                            <option value='hockey-academy-camp'>Camp</option>
                                            <option value='hockey-academy-camp-europa'>Camp Europa</option>
                                            <option value='hockey-academy-entrenamiento-academia'>Entrenamientos Academia</option>
                                            <option value='hockey-academy-capacitaciones'>Capacitaciones</option>
                                            <option value='hockey-academy-clinicas'>Clínicas</option>
                                            <option value='hockey-academy-otro'>Otro</option>
                                        </select>
                                    </div>
                                    <textarea className={`block mt-5 w-full border-2 border-solid border-white bg-transparent p-2 md:p-3 lg:p-4 xl:p-4 focus:outline-none placeholder:text-white `} rows='6' placeholder='Mensaje' id='message' name='message'></textarea>
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                                    <label className={` mt-5 text-white whitespace-normal flex flex-row `} htmlFor='privacidadPoliticas'>
                                        <span className={` block mr-3 mt-1 w-5 h-5 border-2 border-solid border-white bg-transparent`}>
                                            <input className={` m-0 p-0 block border-2 w-full h-full focus:outline-none`} type='checkbox' name='privacidadPoliticas' id='privacidadPoliticas' />
                                        </span>
                                        <span className={`block hyphens-auto `}>
                                            Sí, acepto la política de privacidad y los términos y condiciones.
                                        </span>
                                    </label>
                                    <p className={`block mt-8 text-center`}>
                                        <button type="submit" disabled={state.submitting} className={`cursor-pointer inline-block mx-auto py-2 px-6 md:py-3 md:px-8 lg:py-3 lg:px-10 xl:py-3 xl:px-10 bg-otoFondoRatioFondo hover:bg-otoFondoRatioFondoHover rounded-md border-none shadow-black shadow-sm transition-all ease-in-out duration-500 text-white `}>Enviar mensaje</button>
                                        <ValidationError errors={state.errors} />
                                    </p>
                                </form>
                            </div>
                        </div>
                    </section>
                </>
            } />
    );
}
