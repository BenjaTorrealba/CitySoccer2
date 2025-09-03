"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Cargador from 'components/cargador';
import ImagenesListas from "components/imageneslistas";

import NosotrosFoto from 'components/nosotrosFoto';
import PlantillaUno from 'components/plantillauno';

export default function Staff() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const imageSources = [
            ...ImagenesListas[12].map((item) => item.imagen),
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
                <section className={` relative mx-auto max-w-5xl pt-32`}>
                    <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Staff</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />

                    {!!ImagenesListas[12].length && (
                        <div className={` block text-center `}>
                            {ImagenesListas[12].map((item, index) => (
                                <NosotrosFoto
                                    key={index}
                                    foto={item.imagen}
                                    nombre={item.nombre}
                                    soy={item.soy}
                                    {...(item.otoSoy && { otoSoy: item.otoSoy })}
                                    dimension="-top-10 w-full h-auto" />
                            ))}
                        </div>
                    )}

                </section>
            }
        />
    );
}


