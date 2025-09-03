"use client";
import { useState, useEffect } from "react";
import Cargador from 'components/cargador';
import Image from "next/image";
import ImagenesListas from "components/imageneslistas";

import PlantillaUno from 'components/plantillauno';

export default function Sponsors() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const imageSources = [
            ...ImagenesListas[2],
            ...ImagenesListas[3]
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
                    <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto max-w-5xl z-30 pt-32`}>
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
    );
}


