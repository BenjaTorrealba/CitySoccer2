"use client";
import { useRef, useState, useEffect } from 'react';

import { Footer } from "components/footer";
import LateralImagenesCuadro from "components/LateralImagenesCuadro";
import calendarioCheckIcono from 'public/images/calendar-check.svg';
import ExperienciaGaleria from "components/experienciaGaleria";
import AllInclusiveExperiencia from "components/allinclusiveexperiencia";
import PagoCondiciones from 'components/pagocondiciones';
import CitasBlock from 'components/citasblock';
import ViajesGaleria from 'components/viajesgaleria';

import Link from "next/link";


import mejorExperienciaP from 'public/images/mejorExperienciaP.webp';
import mejorExperienciaQ from 'public/images/mejorExperienciaQ.webp';
import mejorExperienciaR from 'public/images/mejorExperienciaR.webp';
import mejorExperienciaS from 'public/images/mejorExperienciaS.webp';
import mejorExperienciaT from 'public/images/mejorExperienciaT.webp';
import mejorExperienciaU from 'public/images/mejorExperienciaU.webp';

const mejorExperienciaImgs = [
    mejorExperienciaP,
    mejorExperienciaQ,
    mejorExperienciaR,
    mejorExperienciaS,
    mejorExperienciaT,
    mejorExperienciaU
]

const allInclusiveExperienci = [
    { id: 0, titulo: 'Comida', contenido: 'El Campus incluye pensión completa (4 comidas diarias de todos los días). Así también los complementos alimenticios pre y post entrenamientos con su necesaria hidratación. Para los casos que lo requieran, contamos con la posibilidad de adaptar los menús a vegetarianos, veganos y celíacos. Visitaremos diversos restaurantes sudamericanos (Ej: “El Chalito” de Luís Suárez, como también el Mercado de la Boquería).' },
    { id: 1, titulo: 'Transporte', contenido: 'Desde nuestra llegada al aeropuerto de El Prat, en las afueras de la ciudad Condal, contamos con un transfer privado a exclusiva disposición que nos transportará de manera segura y rápida hacia el alojamiento. También durante toda la estadía en Barcelona y en París, ya sea para acudir a los puntos turísticos, los eventos deportivos, entrenamientos, etc. nos trasladaremos en transporte privado (24 hs. disponible).' },
    { id: 2, titulo: 'Asistencia Médica', contenido: 'Nuestros campus cuentan con un cuerpo médico encabezado por el Dr. Hernán Santiago Boccolini especializados en el área deportiva y traumatología. A diario, al margen de la actividad estrictamente deportiva, el médico visitará nuestro alojamiento a los fines de atender cualquier tipo de necesidad que se presente en los días del viaje. Nos complace contar con el apoyo de Farmacias Briera para cualquier imprevisto o necesidad de medicamentos.' },
    { id: 3, titulo: 'Documentación', contenido: 'A los efectos de ingresar a la Unión Europea (zona Schengen) sin inconvenientes se requiere contar con la siguiente documentación: Pasaporte al día (con fecha de vencimiento no menor a 6 meses); Autorización de viaje del menor de edad ante Escribano Público suscripta por ambos padres, y/o tutor (quien ejerza la patria potestad), y Seguro al Viajero (Cobertura mínima de €60.000) para los días del viaje. La misma deberá ser presentada con 30 días de antelación a la fecha del viaje, sin excepciones.' },
    { id: 4, titulo: 'Autorización Médica', contenido: 'Como en todo Campus deportivo, es menester requerir previamente el alta médica para la actividad física, la cual deberá ser entregada en papel y suscripta por el profesional correspondiente. Asimismo se entregará a cada viajero una Ficha Médica que deberá completar con sus padres y también ser suscripta por el médico. Dicha información se cargará digitalmente, conjuntamente con las preferencias alimenticias y los números de contactos en las pulseras de monitoreo de cada pasajero a los efectos de poder contar con ella en todo momento.' },
    { id: 5, titulo: 'Equipaje Sugerido', contenido: 'Brindaremos un KIT de viaje en el cual se incluye camisetas, shorts, mochila y sudadera para la actividad deportiva (solo restará llevar medias y calzado apropiado). Se recomienda llevar una valija grande (con candado o identificación) y una mochila o equipaje de mano. Es recomendable incluir en el equipaje en cuanto sea posible, trajes de baño, calzado de playa, protector, gorra o sombrero, ropa casual y shorts, camisetas, jeans, abrigo, campera, indumentaria de tu equipo favorito, medias de algodón y ropa interior cómoda.' }
]


import equipamientoA from 'public/images/equipamientoA.png';
import equipamientoB from 'public/images/equipamientoB.png';
import equipamientoC from 'public/images/equipamientoC.webp';

import pagoCondicionesSaldo from 'public/images/pagoCondicionesSaldo.svg';
import pagoCondicionesPlane from 'public/images/pagoCondicionesPlane.svg';
import pagoCondicionesPen from 'public/images/pagoCondicionesPen.svg';
import pagoCondicionesCard from 'public/images/pagoCondicionesCard.svg';
import pagoCondicionesBill from 'public/images/pagoCondicionesBill.svg';

const pagoCondiciones = [
    { icono: pagoCondicionesPen, titulo: 'Seña', descripcion: 'Permite reservar el cupo del deportista contra la firma del contrato.' },
    { icono: pagoCondicionesPlane, titulo: 'Aereo', descripcion: 'No incluido. Debe contratarse 90 días antes de la fecha del viaje.' },
    { icono: pagoCondicionesSaldo, titulo: 'Saldo', descripcion: 'Financiación en cuotas sin interés. Cancelación hasta 30 días antes del viaje.' },
    { icono: pagoCondicionesCard, titulo: 'Medios de pago', descripcion: 'Efectivo, transferencia/deposito bancario y transferencia internacional.' },
    { icono: pagoCondicionesBill, titulo: 'Flexibilidad', descripcion: 'Posibilidad de abonar el 100% del Campus en cuotas fijas acordadas en el contrato.' },
]

import citasFondo from 'public/images/citasFutbolMasculino.webp';

const citasFutbolMasculino = [
    { autor: 'Pablo F. Candia, padre de deportista', cita: 'Gracias por cuidar tan bien a nuestros hijos. En el material que nos enviaron podemos ver parte de lo que nos contaron, que son experiencias realmente inolvidables.' },
    { autor: 'Madre de deportista, acompañante del grupo', cita: 'Es una experiencia genial, nunca pensé que lo iba a pasar tan lindo así. Creo que es la mejor experiencia que pueden vivir los chicos. No se puede pedir más' },
    { autor: 'Marcelo Fernández, padre de deportista', cita: 'Agradecerles porque he visto a mi hijo y a mi sobrino muy felices en estos días como pocas veces los había visto antes' }
]



import diapoForm01 from 'public/images/DIAPO-01.jpg.webp';
import diapoForm02 from 'public/images/DIAPO-02.jpg.webp';
import diapoForm03 from 'public/images/DIAPO-03.jpg.webp';

const formDiapos = [
    diapoForm01, diapoForm02, diapoForm03]


import futbolProximasSalidas01 from 'public/images/futbolProximasSalidas01.webp';
import futbolProximasSalidas02 from 'public/images/futbolProximasSalidas02.webp';
import futbolProximasSalidas03 from 'public/images/futbolProximasSalidas03.webp';
import futbolProximasSalidas04 from 'public/images/futbolProximasSalidas04.webp';
    
const futbolProximasSalidas = [
    futbolProximasSalidas02,futbolProximasSalidas04,futbolProximasSalidas03,futbolProximasSalidas01
]

import FutbolViajes from 'components/futbolimagenes';
import Cargador from 'components/cargador';

const Futbolmasculino = () => {

    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleIndex((prevIndex) => (prevIndex + 1) % formDiapos.length); // Iterate over the images
        }, 2000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white mt-[4.4rem] md:mt-0`}>

            <section className={` block relative w-full aspect-[16/7] bg-black z-30 `}>
                <div className={` absolute top-0 left-0 w-full h-full `}>

                    <video poster='images/Campus-BCN-2019-futbol.webp' className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src='images/Campus-BCN-2019-futbol.mp4' type="video/mp4" />
                    </video>
                </div>

            </section>

            <section className={` block relative w-full max-w-5xl z-30 my-12 px-4 gx:px-0  text-neutral-700 mx-auto `}>
                <div className={` flex flex-col gx:flex-row `}>
                    <div className={` gx:w-8/12 `} data-aos-once="true" data-aos="fade-up">
                        <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Fútbol Masculino<br /><span className={` text-nowrap text-[rgb(211,0,126)] `}>Barça Clinics</span></h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#72efdd] mb-8 `} />
                        <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5`} >
                            Nuestro Campus es un viaje a las ciudades de Barcelona y Madrid, España de 11 días y 9 noches. Una experiencia de vida, orientada a jóvenes (entre 12 y 17 años) con interés en enriquecerse a nivel deportivo, cultural y turístico. Proponemos un Campus inolvidable, donde conjugaremos la práctica deportiva en “La Masia”, con las entradas al Camp Nou y al Santiago Bernabeú para ver al F.C. Barcelona y al Real Madrid respectivamente por La Liga. Visitaremos también los principales puntos turísticos de ambas ciudades, eventos deportivos, charlas, actividades y muchas sorpresas más.
                        </p>
                        <p className={` font-Roboto font-normal text-md text-white pb-12 text-center mt-6 `}>
                            <Link className={` inline-block mx-auto py-2 px-8 bg-[rgb(188,0,121)] bg-fucsiaAzulRatioFondo hover:bg-none rounded-md border-black border-solid border-1 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-500 `} href="#reservas">
                                Información <img className={` align-text-top inline-block h-4 w-auto ml-2`} src={calendarioCheckIcono.src} alt='' /></Link>
                        </p>
                    </div>
                    <LateralImagenesCuadro imageneslista="4" />

                </div>
            </section>

            <ExperienciaGaleria
                ExperienciaImgs={mejorExperienciaImgs}
                title="Viví la mejor experiencia de tu vida" />

            <section data-aos-once="true" data-aos="fade-up" className={` relative max-w-5xl w-full mx-auto `}>
                <p className={` font-Roboto font-normal text-md text-white pb-8 text-center mb-6 `}>
                    <Link className={` inline-block mx-auto py-2 px-8 bg-[rgb(188,0,121)] bg-fucsiaAzulRatioFondo hover:bg-none rounded-md border-black border-solid border-1 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-500 `} href="#reservas">
                        Reservá tu lugar <img className={` align-text-top inline-block h-4 w-auto ml-2`} src={calendarioCheckIcono.src} alt='' /></Link>
                </p>
            </section>

            <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto mt-20 max-w-5xl z-30 pb-12`}>
                            <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Próximos eventos deportivos</h2>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#72efdd] mb-12 `} />
                            {!!futbolProximasSalidas?.length && (
                            <div className={` mx-auto text-center overflow-hidden pb-6 px-6 gx:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gx:grid-cols-4 gap-8 md:gap-8 lg:gap-4`}>
                                {futbolProximasSalidas.map((item, index) => (
                                    <span key={index} className={` inline-block rounded-full w-full overflow-hidden `}>
                                        <img src={item.src} alt='' />
                                    </span>

                                ))}
                            </div>)}
            </section>

            <AllInclusiveExperiencia
                list={allInclusiveExperienci} />

            <section className={` max-w-5xl w-full mx-auto `}>
                <div className={` flex md:flex-row flex-col px-8 gap-8 md:gap-0 my-20`}>
                    <div className={` w-full md:w-6/12 justify-start items-start`}>
                        <h4 className={` text-left font-BebasNeue text-[#F6BB0E] text-2xl mb-2 md:mr-12 `}>Equipamiento</h4>
                        <h3 className={` text-left font-BebasNeue text-blue-950 text-4xl mb-6 md:mr-12 `}>Kit de Viaje</h3>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block h-1 w-8 border-none bg-[#72efdd] mb-8 `} />
                        <p className={` font-Roboto text-lg text-neutral-500 leading-relaxed md:mr-12 text-justify hyphens-auto indent-5 `}>Proponemos un viaje inolvidable, por lo que deseamos te lleves muchos recuerdos. Incluimos la indumentaria deportiva para realizar las tecnificaciones (Faldas, camisetas, buzo, mochila). Asimismo, en la cena despedida llevaremos a cabo distintos sorteos. <strong>¡No te lo puedes perder!</strong></p>
                    </div>
                    <p className={` w-full md:w-6/12 flex justify-center items-center`}>
                        <img data-aos-once="true" data-aos="fade-down" className={` max-w-md w-full `} src={equipamientoC.src} alt='' />
                    </p>
                </div>
                <div className={` flex md:flex-row flex-col-reverse px-8 gap-8 md:gap-0 my-20`}>
                    <p className={` w-full md:w-6/12 flex justify-center items-center`}>
                        <img data-aos-once="true" data-aos="fade-down" className={` max-w-sm w-full `} src={equipamientoB.src} alt='' />
                    </p>
                    <div className={` w-full md:w-6/12 justify-start items-start`}>
                        <h4 className={` text-left font-BebasNeue text-[#F6BB0E] text-2xl mb-2 md:mr-12 `}>Equipamiento</h4>
                        <h3 className={` text-left font-BebasNeue text-blue-950 text-4xl mb-6 md:mr-12 `}>Monitoreo y control de pasajeros</h3>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block h-1 w-8 border-none bg-[#72efdd] mb-8 `} />
                        <p className={` font-Roboto text-lg text-neutral-500 leading-relaxed md:mr-12 text-justify hyphens-auto indent-5 `}>EFESUR es un sistema desarrollado para la industria del turismo estudiantil, que comprende una plataforma de última tecnología en monitoreo y control de pasajeros. Lleva adelante el control y la seguridad de los pasajeros, prioriza la agilidad y eficiencia en los puntos de control y garantiza la información clara y trasparente para todos los actores del circuito.</p>
                    </div>
                </div>
            </section>

            <PagoCondiciones
                pagoCondiciones={pagoCondiciones} />

            <CitasBlock
                citaslista={citasFutbolMasculino}
                citasfondo={citasFondo} />

            <ViajesGaleria
                imageneslista="4" />

            <section id='reservas' className={` bg-white py-0 px-0 gx:px-4 `}>
                <div className={` max-w-5xl mx-auto grid grid-cols-1 gx:grid-cols-2 gap-6`}>
                    <div className={`  w-full `}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Solicitá más información</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#72efdd] mb-8 `} />
                        <form className={` pb-12 px-6 gx:px-0 font-Roboto text-lg text-neutral-500`}>
                            <input className={` block mt-5 w-full border-b-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none  p-2`} type='text' placeholder='Nombre y apellido' />
                            <input className={` block mt-5 w-full border-b-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none p-2 `} type='email' placeholder='Correo electrónico' />
                            <input className={` block mt-5 w-full border-b-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none p-2 `} type='tel' placeholder='Número de teléfono' />
                            <textarea className={` block mt-5 w-full border-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none p-2 `} rows='8' placeholder='Mensaje'></textarea>

                            <label className={` mt-5 whitespace-normal flex flex-row `} htmlFor='privacidadPoliticas'>
                                <span className={` mr-3 block w-5 h-5 border-2 border-solid border-black border-opacity-40 bg-transparent `}>
                                    <input className={` m-0 p-0 block border-0 w-full h-full bg-transparent focus:outline-none`} type='checkbox' name='privacidadPoliticas' id='privacidadPoliticas' /></span>
                                <span className={`block hyphens-auto font-RobotoCondensed leading-tight `}>
                                    Sí, acepto la política de privacidad y los términos y condiciones.</span></label>
                            <p className={` block align-bottom mt-8 text-center `}>
                                <input type='submit' className={` cursor-pointer inline-block mx-auto py-2 px-8 bg-[rgb(188,0,121)] bg-fucsiaAzulRatioFondo rounded-md border-black border-solid border-1 border-opacity-0 no-underline shadow-black shadow-sm transition-all ease-in-out duration-500 text-white hover:bg-none hover:border-opacity-10 `} value='Enviar mensaje' /></p>

                        </form>
                    </div>
                    {!!formDiapos?.length && (
                        <p className={` relative w-full h-72 gx:min-h-full overflow-hidden `}>
                            {formDiapos.map((item, index) => (
                                <img key={index} className={`${index === visibleIndex ? 'opacity-100' : 'opacity-0'}  absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 `} src={item.src} alt='' />
                            ))}
                        </p>
                    )}
                </div>
            </section>

            <div className={` relative bg-fucsiaAzulFondoDos clear-both `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <Footer />
            </div>

        </main>
    );
}

export default Futbolmasculino;


