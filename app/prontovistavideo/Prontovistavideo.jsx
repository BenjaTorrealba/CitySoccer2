"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import ImagenesListas from "components/imageneslistas";

const PlayIcono = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" >
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>
);

const StopIcono = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" >
        <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
);

const OirIcono = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
        <path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>
);

{/* half volume icon */}
const MedioOirIcono = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/></svg>
);

const SileciarIcono = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
        <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
);

const Prontovistavideo = ({ }) => {

    const router = useRouter();
    const volverBoton = () => router.back();

    const searchParams = useSearchParams();
    const conSinAudio = parseInt(searchParams.get("consinaudio"), 10) || 0;
    const videoIndex = parseInt(searchParams.get("videoindex"), 10) || 0;
    const videoPath = ImagenesListas[15][videoIndex].video || 0;
    const videoconaudio = conSinAudio && conSinAudio === 1 ? true : false;

    const identityCampusNumero = parseInt(searchParams.get("identityCampus"), 10) || 0;
    const identityCampus = identityCampusNumero || 0;


    // State and refs for the video
    const videoRef = useRef(null);
    const [controlsVisible, setControlsVisible] = useState(false);
    const [volumeState, setVolumeState] = useState(2); // 0: mute, 1: half-volume, 2: full-volume
    const [playing, setPlaying] = useState(true);

    const toggleControls = () => {
        if (videoRef.current) {
            setControlsVisible(!controlsVisible);
            videoRef.current.controls = !controlsVisible;
        }
    };

    const toggleVolume = () => {
        if (videoRef.current) {
            const newVolumeState = (volumeState + 1) % 3; // Cycle between 0, 1, 2
            setVolumeState(newVolumeState);

            if (newVolumeState === 0) {
                videoRef.current.volume = 0.0; // Mute
            } else if (newVolumeState === 1) {
                videoRef.current.volume = 0.5; // Half-volume
            } else if (newVolumeState === 2) {
                videoRef.current.volume = 1.0; // Full-volume
            }
        }
    };

    const togglePlaying = () => {
        if (videoRef.current) {
            if (playing) videoRef.current.pause();
            else videoRef.current.play();
            setPlaying(!playing);
        }
    };

    //  active:text-white active:bg-[#0187bc]

    return (
        <main className={` relative w-dvw h-dvh flex flex-col justify-end items-center overflow-hidden bg-black `} >

            <section className={` absolute inset-0 text-center `} >
                <video className={` relative h-full aspect-[9/16] mx-auto `} preload="auto" autoPlay="autoplay" loop controls playsInline ref={videoRef} >
                    <source src={videoPath} type="video/mp4" />
                </video>
            </section>

            <section className={` absolute left-3 sm:left-4 md:left-6 top-0 flex flex-col text-center h-full w-20 md:w-24 py-6 sm:py-8 md:py-12 gap-4 sm:gap-6 md:gap-8 transition-all ease-in-out duration-300 `} >

                <div className={` flex-shrink `} >
                    <p onClick={volverBoton} className={` tracking-tight h-auto w-full text-center relative cursor-pointer inline-block shadow-md shadow-black/70 py-1 font-black text-base sm:text-lg md:text-xl text-black text-opacity-60 hover:text-opacity-100  ${identityCampus === 1 ? `bg-[rgb(211,0,126)] text-white` : ` bg-[#5fd2ff] text-black`} uppercase rounded-sm transition-all ease-in-out duration-300 `}>
                        Volver
                    </p>
                </div>

                <div className={` flex flex-col flex-grow items-center justify-center gap-4 sm:gap-6 md:gap-8 transition-all ease-in-out duration-300 `} >

                    <p onClick={togglePlaying} className={` text-center relative h-10 sm:h-11 md:h-12 w-full flex items-center justify-center  cursor-pointer shadow-md shadow-black/70 font-black text-sm text-black text-opacity-60 hover:text-opacity-100 ${identityCampus === 1 ? `bg-[rgb(211,0,126)] text-white` : ` bg-[#5fd2ff] text-black`} uppercase rounded-sm transition-all ease-in-out duration-300 `}>

                        <span className={` block w-4 sm:w-5 md:w-6 transition-all ease-in-out duration-300 `}>
                            {playing ? <StopIcono className={` h-auto w-full `} /> : <PlayIcono className={` h-auto w-full `} />}
                        </span>

                    </p>

                    {videoconaudio && (
                    <p onClick={toggleVolume} className={` text-center relative h-10 sm:h-11 md:h-12 w-full flex items-center justify-end cursor-pointer shadow-md shadow-black/70 font-black text-sm text-black text-opacity-60 hover:text-opacity-100 ${identityCampus === 1 ? `bg-[rgb(211,0,126)] text-white` : ` bg-[#5fd2ff] text-black`} uppercase rounded-sm transition-all ease-in-out duration-75 `}>

                        {volumeState === 0 && 
                            <span className={` block w-8 sm:w-9 md:w-10 mr-6 sm:mr-[1.4rem] md:mr-7 pr-[0.18rem] sm:pr-[0.22rem] md:pr-1 transition-all ease-in-out duration-300 `}>
                                <SileciarIcono className={` h-auto w-full `} />
                            </span>
                        }
                        {volumeState === 1 &&
                            <span className={` block w-8 sm:w-9 md:w-10 mr-6 sm:mr-[1.4rem] md:mr-7 pr-[0.58rem] sm:pr-[0.68rem] md:pr-3 transition-all ease-in-out duration-300 `}>
                                <MedioOirIcono className={` h-auto w-full `} />
                            </span>
                        }
                        {volumeState === 2 &&
                            <span className={` block w-8 sm:w-9 md:w-10 mr-6 sm:mr-[1.4rem] md:mr-7 transition-all ease-in-out duration-300 `}>
                                <OirIcono className={` h-auto w-full `} />
                            </span>
                        }

                    </p>
                    )}
{/*
                    <p onClick={toggleControls} className={` tracking-tight leading-3 h-auto w-24 text-center relative cursor-pointer shadow-md shadow-black/70 pt-2 pb-1 font-black text-base text-black text-opacity-60 hover:text-opacity-100  ${identityCampus === 1 ? `bg-[rgb(211,0,126)] text-white` : ` active:text-white active:bg-[#0187bc] bg-[#5fd2ff] text-black`} uppercase rounded-sm transition-all ease-in-out duration-75 `}>
                        {controlsVisible ? "Ocultar" : "Mostrar"}<br /><span className={` text-xs font-normal `}>controles</span>
                    </p>
*/}
                </div>

                <div className={` flex-shrink h-full max-h-12 `} />

            </section>

        </main>
    );
}

export default Prontovistavideo;