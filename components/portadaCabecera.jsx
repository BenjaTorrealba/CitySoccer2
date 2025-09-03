"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import proximamente from 'public/images/proximamente.jpg';
import chevronLeft from 'public/images/chevronLeft.svg';
import chevronRight from 'public/images/chevronRight.svg';

import eurohockey2023 from 'public/images/IDentity-Campus-Eurohockey-2023.mp4';
import tecnificacion2023 from 'public/images/IDentity-Campus-Tecnificacion-2023.mp4';
import capsulaTecnificacioin from 'public/images/IDentity-Campus-Capsula-Tecnificacion.mp4';


export function Portadacabecera() {
    const enlaceRefs = useRef([]);
    const enlaceRefsB = useRef([]);
    const fondoRefs = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fondoCambio = (index) => {
        return () => fondoRefs.current.forEach((videoRef, idx) => videoRef && (idx === index ? (videoRef.classList.remove('opacity-0'), videoRef.classList.add('opacity-100')) : (videoRef.classList.add('opacity-0'), videoRef.classList.remove('opacity-100'))));
    };

    useEffect(() => {
        const currentRefs = enlaceRefs.current; // Store the current value of enlaceRefs.current

        currentRefs.forEach((linkRef, index) => {
            if (linkRef) {
                const changeBackground = fondoCambio(index); // Create the handler once
                linkRef.addEventListener('mouseover', changeBackground);
                // Store the handler function on the element, so it can be used in cleanup
                linkRef._changeBackground = changeBackground;
            }
        });

        return () => {
            currentRefs.forEach((linkRef) => {
                if (linkRef && linkRef._changeBackground) {
                    linkRef.removeEventListener('mouseover', linkRef._changeBackground);
                }
            });
        };
    }, []);

    useEffect(() => {

        enlaceRefsB.current.forEach((linkRef, idx) => {
            linkRef && (
                linkRef.classList.toggle('opacity-100', idx === currentIndex),
                linkRef.classList.toggle('opacity-0', idx !== currentIndex))
        });

        fondoRefs.current.forEach((videoRef, idx) => {
            videoRef && (
                videoRef.classList.toggle('opacity-100', idx === currentIndex),
                videoRef.classList.toggle('opacity-0', idx !== currentIndex))
        });

    }, [currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? enlaceRefsB.current.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === enlaceRefsB.current.length - 1 ? 0 : prevIndex + 1));
    };

    const links = [
        { text: 'Viaje Hockey con Evento', href: './eurohockey' },
        { text: 'Viaje Hockey Tecnificación', href: './hockeytecnificacion' },
        { text: 'Tecnificaciones España', href: './hockeyespagna' },
        { text: 'Torneos Internacionales', href: '/' },
    ];

    return (
        <section className='block relative w-full h-[calc(100vh-4.4rem)] md:h-screen bg-black'>

            <div className="relative hidden md:grid md:grid-cols-4 w-full h-full z-30">
                {links.map((link, index) => (
                    <Link
                        href={link.href}
                        key={index}
                        ref={el => enlaceRefs.current[index] = el}
                        className={` hover:bg-transparentBlackFondo pb-8 border-opacity-40 hover:pb-28 text-opacity-60 hover:text-opacity-100 transition-all ease-linear duration-200 px-6 font-bold text-left text-white text-2xl flex items-end justify-center leading-tight ${index !== 0 ? 'border-opacity-4 border-l-2 border-solid border-white' : ''}`}
                        
                    >
                        {link.text}
                    </Link>
                ))}
            </div>

            <div className="relative md:hidden w-full h-full z-30">
                <span onClick={handlePrev} className="z-30 transition-all ease-linear duration-[236ms] cursor-pointer flex items-center justify-center absolute md:hidden left-0 top-1/2 -translate-y-1/2 h-24 w-auto opacity-60 hover:opacity-100">
                    <Image src={chevronLeft} className="h-24 w-auto" alt='' />
                </span>
                <span onClick={handleNext} className="z-30 transition-all ease-linear duration-[236ms] cursor-pointer flex items-center justify-center absolute md:hidden right-0 top-1/2 -translate-y-1/2 h-24 w-auto opacity-60 hover:opacity-100">
                    <Image src={chevronRight} className="h-24 w-auto" alt='' />
                </span>

                {links.map((link, index) => (
                    <Link key={index} href={link.href} ref={el => enlaceRefsB.current[index] = el} className={` absolute left-0 top-0 p-8 text-opacity-100 transition-all ease-linear duration-[236ms] font-semibold text-left text-white text-2xl w-full h-full flex items-end justify-start leading-tight ${index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
                        {link.text}
                    </Link>
                ))}
            </div>

            {['Hockey-22-Entrenamiento.jpg', 'Hockey-22-Entrenamiento-II.jpg', '3.jpg', proximamente].map((src, index) => (
                <div key={index} ref={el => fondoRefs.current[index] = el} className={`opacity-0 transition-all ease-linear duration-[382ms] absolute top-0 left-0 w-full h-full z-10 ${index === 0 ? 'opacity-100' : ''}`}>
                    {index < 3 ? (
                        <video poster={`images/${src}`} className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                            <source src={`${index === 0 ? `images/IDentity-Campus-Eurohockey-2023.mp4` : index === 1 ? `images/IDentity-Campus-Tecnificacion-2023.mp4` : `images/IDentity-Campus-Capsula-Tecnificacion.mp4` }`} type="video/mp4" />
                        </video>
                    ) : (
                        <Image src={src} className='object-cover object-center w-full h-full' alt="" />
                    )}
                </div>
            ))}

        </section>
    );
}
