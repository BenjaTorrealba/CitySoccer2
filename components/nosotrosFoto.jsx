import Link from "next/link";
import Image from "next/image";



const NosotrosFoto = ({nombre, foto, linkedinEnlace, dimension = 'h-full w-auto', soy, otoSoy = '\u00A0' }) => {

    return (

        <div className={`inline-block w-80 m-2  `}>
            <div data-aos-once="true" data-aos="fade-up" className={`  relative aspect-1 h-80 rounded-full border-8 border-solid border-[#257caa] overflow-hidden bg-otoFondoDos`}>
            {!!foto ? (
                <Image className={` absolute ${dimension} `} src={foto} alt='' />
                ):
            (
                <Image className={` absolute inset-0 h-full aspect-1 `} src='nosotros/avatar.jpg' alt='' />
            )}
            </div>
            <p className={`  block w-full text-center font-RobotoCondensed font-bold text-4xl text-black mt-6 `}>{nombre}</p>
            <p className={`  block w-full text-center font-RobotoCondensed font-semibold text-2xl text-[#299dca] mt-0 `}>{soy}</p>
            <p className={`  block w-full text-center font-RobotoCondensed font-semibold text-2xl text-[#299dca] mt-0 mb-10 `}>{otoSoy}</p>
            <p className={`  block w-full text-center mt-3`}>
                {!!linkedinEnlace && (
                <Link className={` inline-flex items-center justify-center text-white bg-sky-600 hover:bg-sky-900 mx-auto w-12 h-12 rounded-full transition-all ease-in-out duration-300`} href={linkedinEnlace}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`  w-8 h-8 `} fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                </Link>
                )}
            </p>
        </div>

    );
};

export default NosotrosFoto;