"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Cargador from 'components/cargador';

import HockeyAcademyVideoA from "components/hockeyacademyvideovideoa";
import PlantillaUno from "components/plantillauno";

import imagenC from 'public/hockeyacademycamp/hockeyacademycamp_imagen_24.jpg';

export default function Queeshockeyacademy() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const imageSources = [
            imagenC,
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
            contentc={
                <>
                    <div className={` absolute inset-0 bg-repeat bg-whiteFadedFondoDos opacity-40 `} />
                    <section className={` block relative max-w-5xl w-full mx-auto px-4 pt-32 `}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` relative text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Qué es Hockey Academy</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` relative block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] `} />
                    </section>

                    <section className={`relative block mx-8`}>
                        <div className={`block mx-auto max-w-5xl pt-16 pb-32`}>
                            <p className={` text-blue-950 font-Roboto text-lg md:text-xl leading-relaxed mb-8 text-justify hyphens-auto indent-8 `} style={{ lineHeight: `1.6em` }}>
                                Hockey Academy es una institución de entrenamiento especializada en el desarrollo integral de jugadoras y jugadores de hockey. Nos enfocamos en mejorar de manera personalizada y detallada tanto la técnica individual como las capacidades físicas, lo que garantiza un avance significativo en el rendimiento y ejecución de cada uno de nuestros participantes.
                            </p>

                            <div className={` rounded-md overflow-hidden relative shadow-md shadow-[rgba(0,0,0,0.6)] mx-auto my-12 w-full md:w-4/5 aspect-[16/11] md:aspect-[24/11] `}>
                                <HockeyAcademyVideoA controles={true} silencio={false} alto={` h-full `} />
                            </div>

                            <p className={` text-blue-950 font-Roboto text-lg md:text-xl leading-relaxed mb-8 text-justify hyphens-auto indent-8 `} style={{ lineHeight: `1.6em` }}>
                                Nuestra metodología se basa en grupos reducidos y nivelados, lo que permite una corrección inmediata y adaptada a las necesidades de cada jugador. Además, fomentamos un ambiente sano, relajado y divertido, creando las condiciones ideales para un aprendizaje efectivo.
                            </p>

                            <p className={` text-blue-950 font-Roboto text-lg md:text-xl leading-relaxed mb-8 text-justify hyphens-auto indent-8 `} style={{ lineHeight: `1.6em` }}>
                                Contamos con un equipo de entrenadores altamente capacitados, con años de experiencia en el hockey argentino, especializados en la corrección técnica individual. De igual manera, nuestros preparadores físicos son reconocidos en el ámbito del hockey, habiendo trabajado con equipos formativos y adultos, lo que asegura que los entrenamientos sean de la más alta calidad.
                            </p>
                            <p className={` text-blue-950 font-Roboto text-lg md:text-xl leading-relaxed text-justify hyphens-auto indent-8 `} style={{ lineHeight: `1.6em` }}>
                                Creemos firmemente que la combinación de estos factores es clave para lograr un desarrollo óptimo y potenciar el rendimiento de nuestros jugadores.
                            </p>
                            <p data-aos-once="true" data-aos="fade-up"  className={` mx-auto w-full md:w-4/5 relative aspect-[6/5] md:aspect-[16/5] overflow-hidden rounded-md shadow-black/30 shadow-md my-12 `} >
                                <Image src={imagenC} alt='' className={`text-blue-950 object-cover object-center w-full h-full `}  />
                            </p>
                        </div>
                    </section>
                </>
            }
        />
    );
}


