import Image from 'next/image';
import Link from 'next/link';

import novedadesA from 'public/images/novedadesBarcelona2024.webp';
import novedadesB from 'public/images/novedadesLeonas2024.webp';
import novedadesC from 'public/images/novedadesValencia2024.webp';

const novedadesList = [
    { 
        imagen: novedadesA,
        titulo: '¡Comienza la participación de Las Leonas en los Juegos Olímpicos!',
        sumario: 'El hockey sobre césped femenino argentino, representado por las emblemáticas Leonas, se encuentra en la cúspide del deporte mundial.' },
    { 
        imagen: novedadesB,
        titulo: 'Campus IDentity Barcelona 2024: una experiencia inolvidable en la cuna del hockey español',
        sumario: 'Del 8 al 16 de julio de 2024, Barcelona, la capital mundial del hockey sobre césped, vibró al ritmo del talento y la pasión en el Campus IDentity.' },
    { 
        imagen: novedadesC,
        titulo: 'Campus de Valencia: un verano de aprendizaje, crecimiento y pasión por el hockey',
        sumario: 'Del 1 al 6 de julio, el Polideportivo Virgen del Carmen-Beteró en Valencia se convirtió en el epicentro del talento y la pasión por el hockey sobre césped, gracias al Campus IDentity.' },
]

export function Novedades() {
    return (
        <>
                                {novedadesList.map((item, index) => (
                                <div key={index} className={`flex flex-col p-4 bg-white bg-opacity-80 border-solid border-2 border-black border-opacity-5 shadow-md shadow-neutral-300`}>
                                    <p><Image src={item.imagen} alt='' className={` w-full h-auto `} /></p>
                                    <h3 className={` font-Cabin font-bold text-2xl my-6 `}>{item.titulo}</h3>
                                    <p className={`  flex-grow font-Roboto text-md leading-relaxed mb-4 `} >{item.sumario}</p>
                                    <p><Link className={` font-semibold `} href=''>Leer más</Link></p>
                                </div>
                                ))}
        </>
    );
}
