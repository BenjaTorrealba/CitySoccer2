'use Client';
import { useEffect, useState } from 'react';

const CitasBlock = ({ citaslista = [], citasfondo, identitycampus }) => {
    const [currentCitaIndex, setCurrentCitaIndex] = useState(0);
    const [fade, setFade] = useState(true); // State to manage fade effect

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade out
            setTimeout(() => {
                setCurrentCitaIndex((prevIndex) => (prevIndex + 1) % citaslista.length);
                setFade(true); // Start fade in
            }, 382); // Duration of fade out before changing text
        }, 4618); // Change the interval to your preference
    
        return () => clearInterval(interval);
    }, [citaslista.length]); 

    const { autor, cita } = citaslista[currentCitaIndex];


    return (


        <section className={` relative ${identitycampus ? `bg-citasFondo` : `bg-otoFondoCitasFondo` } transition-all ease-in-out duration-[618ms] min-h-80 gx:min-h-80 flex flex-grow items-center justify-center `}>
            {citasfondo && (
            <div className={` absolute top-0 left-0 inset-0 z-10 opacity-20`}>
                <img src={citasfondo.src} className={` object-center object-cover w-full h-full `} alt='' />
            </div>
            )}
            <div className={` absolute top-0 left-0 inset-0 z-10 opacity-50`}>
                <p className={`mx-auto max-w-3xl font-NotoSerif italic font-light text-[15rem] leading-[12rem] text-blue-950 `}>“</p>
            </div>
            <div className={` relative z-20 max-w-5xl mx-auto `}>
                <p className={` text-center font-NotoSerif italic text-white text-md lg:text-lg gx:text-xl mx-12 transition-opacity duration-[618ms] ${fade ? 'opacity-100' : 'opacity-0'}`} style={{ lineHeight: '1.8em' }}>{cita}<br /><span className={` font-Cabin text-black text-md gx:text-xl font-bold leading-relaxed mt-4`}>{autor}</span></p>
            </div>
        </section>


    );
};

export default CitasBlock;
