"use client";
import { useState, useEffect } from 'react';
import Cargador from 'components/cargador';
import ImagenesListas from 'components/imageneslistas';

import HockeyAcademyVideoA from 'components/hockeyacademyvideovideoa';
import Link from 'next/link';
import PlantillaUno from 'components/plantillauno';

import VerticalVideo from 'components/verticalvideo';
import ImagenesGrid from 'components/imagenesgrid';

export default function HAenimagenes() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const imageSources = [
            ...ImagenesListas[1],
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
                <HockeyAcademyVideoA alto={` h-56 `} >
                    <div className={` block absolute left-0 top-0 w-full h-full bg-black opacity-60 `} />
                    <div className={` relative z-30 flex flex-col justify-center items-center w-full h-full max-w-5xl mx-auto `}>

                        <h2 data-aos-once="true" data-aos="fade-up" className={` block w-full relative text-center tracking-wide font-BebasNeue text-white text-4xl lg:text-5xl gx:text-6xl px-8 transition-all ease-in-out duration-100 `}>
                            Hockey Academy en Imágenes</h2>
                    </div>
                </HockeyAcademyVideoA>
            }
            contentc={
                <>
                    <section className={` relative mx-auto max-w-lg sm:max-w-xl md:max-w-3xl transition-all duration-300 ease-in-out pt-32 flex flex-row items-center gap-4`}>
                        {/*
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-[#000] text-4xl mx-8 mb-6`}>Visita el Google Drive de<span className={` sm:hidden inline `}> </span><br className={` hidden sm:inline `} />Hockey Academy</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />
                    */}
                        <Link href='https://drive.google.com/drive/folders/17HRZP2jq2Jb0WESaVAU7WlQ6M6haTCyZ?usp=sharing' data-aos-once="true" data-aos="fade-up" className={` flex items-center justify-center bg-white bg-opacity-60 w-5/12 md:w-1/5 aspect-1 cursor-pointer rounded-full border-4 sm:border-[5px] md:border-[6px] border-[#00b3f9] ml-6 `} >
                            <svg className={` w-3/5 h-auto mx-auto cursor-pointer `} viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                                <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
                                <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47" />
                                <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335" />
                                <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d" />
                                <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc" />
                                <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
                            </svg>
                        </Link>

                        <Link href='https://drive.google.com/drive/folders/17HRZP2jq2Jb0WESaVAU7WlQ6M6haTCyZ?usp=sharing' data-aos-once="true" data-aos="fade" className={` flex fle-grow font-Roboto font-medium text-lg sm:text-xl md:text-2xl text-blue-950 text-left mr-6  `}>
                            <span className={`  leading-tight sm:leading-snug md:leading-normal `}>En Google Drive podrás encontrar todos los eventos y fiestas de Hockey Academy.</span></Link>

                    </section>
                    {/*
                    <section className={` w-full text-center `} >
                        <p className={` font-RobotoCondensed font-bold text-md sm:text-lg md:text-xl uppercase leading-loose mt-6 mb-24 mx-auto `}>
                            <Link className={` text-white text-opacity-80 hover:text-opacity-100 hover:text-black inline-block py-1 px-3 sm:px-4 md:px-6 bg-blue-950 hover:bg-[#BAECFF] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300 `} href="https://drive.google.com/drive/folders/17HRZP2jq2Jb0WESaVAU7WlQ6M6haTCyZ?usp=sharing">
                                Google Drive Hockey Academy
                                <svg className={` inline-block w-6 sm:w-8 md:w-12 ml-4 my-2 `} viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                                <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
                                <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47" />
                                <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335" />
                                <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d" />
                                <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc" />
                                <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
                                </svg>
                            </Link></p>
                    </section>
*/}

                    <section className={` relative mx-auto max-w-5xl pt-36`}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Hockey Academy en Imágenes</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />
                        <ImagenesGrid imageneslista="1" />
                    </section>

                    <section className={` relative mx-auto max-w-5xl z-30 py-28 `}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-[#000] text-4xl mx-8 mb-6`}>Hockey Academy Camp en Videos</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />
                        <div className={` grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-2 px-4 gx:px-0 `}>
                            {['hockeyacademycamp/hockeyacademycamp_video_01.mp4',
                                'hockeyacademycamp/hockeyacademycamp_video_02.mp4',
                                'hockeyacademycamp/hockeyacademycamp_video_03.mp4',
                                'hockeyacademycamp/hockeyacademycamp_video_04.mp4'
                            ].map((videoSrc, index) => (<VerticalVideo key={index} videoSrc={videoSrc} />))}
                        </div>
                    </section>
                </>
            }
        />
    );
}


