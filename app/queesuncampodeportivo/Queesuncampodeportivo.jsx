import Link from "next/link";
import { Footer } from "components/footer";
import Cargador from 'components/cargador';


export default function queesuncampodeportivo() {
    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white mt-[4.4rem] md:mt-0 `}>

            <section className={` block relative w-full aspect-[9/10] sm:aspect-[16/7] bg-black z-30 `}>
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <video poster='images/euroHockey2025F.webp' className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src='images/IDentity-Campus-Hockey-2022.mp4' type="video/mp4" />
                    </video>
                </div>
                <div className={` block absolute left-0 top-0 w-full h-full bg-black opacity-60 `} />
                <div className={` relative z-30 flex flex-col justify-end items-center w-full h-full max-w-5xl mx-auto `}>

                    <p className={` inline-block relative text-center mx-auto w-[16rem] lg:w-[28rem] gx:w-[35rem] mb-4 transition-all ease-in-out duration-100`}>
                        <img data-aos-once="true" data-aos="fade-up" className={` w-full h-auto`} src='images/identitylogoblanco.png' alt=''/>
                    </p>
                    <h2 data-aos-once="true" data-aos="fade-up" className={` block mb-6 w-full relative text-center tracking-wide font-BebasNeue text-white text-4xl lg:text-5xl gx:text-6xl px-8 transition-all ease-in-out duration-100 `}>Campus deportivos en Europa</h2>
                    <p data-aos-once="true" data-aos="fade" className={`block mb-10 text-center `}>
                       <Link className={` inline-block rounded-md bg-white bg-opacity-70 hover:bg-opacity-100 text-black text-sm sm:text-lg font-Roboto font-bold px-8 py-2 mx-2 sm:mx-3 transition-all ease-in-out duration-300 `} href=''>Hockey</Link>
                       <Link className={` inline-block rounded-md bg-white bg-opacity-70 hover:bg-opacity-100 text-black text-sm sm:text-lg font-Roboto font-bold px-8 py-2 mx-2 sm:mx-3 transition-all ease-in-out duration-300 `} href='./futbolmasculino'>Fútbol masculino</Link>
                    </p>

                </div>
            </section>

            <section className={`block mx-8`}>
                <div className={`block mx-auto max-w-5xl mt-8`}>
                    <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Qué es un campus deportivo</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#72efdd] mb-8 `} />
                    <div className={` font-Roboto text-lg leading-relaxed mb-4 text-justify hyphens-auto indent-5 `}>
                    Los Campus deportivos son una experiencia de vida inolvidable para cualquier joven deportista. El objetivo principal de estas prácticas es mantener a los jóvenes ligados a la práctica deportiva, y cultivarlos a nivel cultural y turístico. En la actualidad consideramos de suma importancia brindarle herramientas para motivar la actividad física como tarea prioritaria en sus vidas cotidianas, generando hábitos positivos, buenas costumbres y favoreciendo la salud tanto física como mental.
                    </div>
                </div>
            </section>

            <section className={`block mx-8`}>
                <div className={`block mx-auto max-w-5xl mt-8`}>
                    <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Enseñanzas y valores positivos</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#72efdd] mb-8 `} />
                    <div className={` font-Roboto text-lg leading-relaxed mb-4 text-justify hyphens-auto indent-5 `}>
                    Asimismo, podemos confirmar por nuestra experiencia personal, que a través del deporte se aprenden innumerables enseñanzas y valores positivos muy útiles para cualquier ámbito de la vida. El trabajo en equipo, el bien común por encima del triunfo personal, la solidaridad, saber perder, el valor al esfuerzo, aceptar el liderazgo de un entrenador, son algunas de esas enseñanzas importantes tanto dentro como fuera del campo de juego. En nuestros Campus deportivos se hace especialmente hincapié en ello, gracias a la profesionalidad de los técnicos de primer nivel que dictan los entrenamientos y sesiones diarias.
                    </div>
                </div>
            </section>

            <section className={`block mx-8`}>
                <div className={`block mx-auto max-w-5xl mt-8`}>
                    <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Amistad</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#72efdd] mb-8 `} />
                    <div className={` font-Roboto text-lg leading-relaxed mb-4 text-justify hyphens-auto indent-5 `}>
                    Otros aspectos a destacar es la posibilidad de generar nuevas amistades (niños de otras ciudades y colegios), comprender nuevas culturas y costumbres (en este caso las catalanas), ver a sus ídolos deportivos en acción (Messi) y conocer la historia europea en primera persona, enriqueciendo su mente de forma única. También nos importa que todos los concurrentes a nuestro Campus se lleven la idea de que se puede vivir de distintas profesiones dentro del deporte, brindándoles casos reales de este fenómeno, en un ambiente deportivo super desarrollado como el europeo.
                    </div>
                </div>
            </section>

            <section className={`block mx-8`}>
                <div className={`block mx-auto max-w-5xl mt-8`}>
                    <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Una experiencia inolvidable</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#72efdd] mb-8 `} />
                    <div className={` font-Roboto text-lg leading-relaxed mb-4 text-justify hyphens-auto indent-5 `}>
                    En fin, por todos estos aspectos y muchos más, nuestros Campus Deportivos son una vivencia inolvidable y muy recomendable para la vida y desarrollo de cualquier niño apasionado al deporte.
                    </div>
                </div>
            </section>

            <div className={` relative bg-fucsiaAzulFondoDos clear-both mt-28 `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <Footer />
            </div>

        </main>
    );
}


