'use client';
import { useState, useEffect } from 'react';
import Cargador from 'components/cargador';
import Image from 'next/image';
import videofondoa from 'public/hockeyacademycamp/hockeyacademyfondoa.jpg';
import videofondob from 'public/hockeyacademycamp/hockeyacademyfondob.jpg';

import PlantillaUno from 'components/plantillauno';
import HockeyAcademyVideoA from 'components/hockeyacademyvideovideoa';

export default function Capacitaciones() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const imageSources = [
            videofondoa,
            videofondob
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
                <HockeyAcademyVideoA alto={` h-[38vh] `} >

                    <div className={` block absolute left-0 top-0 w-full h-full bg-black opacity-60 `} />
                    <div className={` relative flex flex-col justify-center items-center w-full h-full `}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` block w-full relative text-center tracking-wide font-BebasNeue text-[#BAECFF] text-6xl mx-8 `} style={{ textShadow: `0 0 1rem rgba(0,0,0,1),0 0 2rem rgba(0,0,255,0.5)` }}>Capacitaciones</h2>
                    </div>

                </HockeyAcademyVideoA>
            }
            contentc={
                <section className={` relative mx-auto max-w-5xl pt-28 pb-10 min-h-[60vh]`}>
                    <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>En construcción</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />

                </section>
            }
        />

    );
}
