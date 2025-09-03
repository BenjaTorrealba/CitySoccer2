
import { Footer } from 'components/footer';
import { Navigation } from '../components/navigation';

const PlantillaUno = ({ contenta, contentb, contentc }) => {
    return (

<>
        <main className={`block relative z-0 w-full pl-0 md:pl-32 mt-[4.4rem] md:mt-0`}>

            <div className={` relative z-30 `}>
                {contenta}
            </div>

            <div className={` relative w-full `}>
                <div className={` absolute inset-0 bg-otoFondo bg-fixed `} />
                <div className={` absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[rgba(0,0,0,0.6)] from-0% via-[rgba(0,0,0,0.2)] via-35% to-transparent `} />

                    <div className={` relative z-30 `}>
                        {contentb}
                    </div>

                <div className={` relative w-full  `}>
                    <div className={` absolute inset-0 bg-whiteFadedFondo  `} />

                    <div className={` relative z-30 `}>
                        {contentc}
                    </div>

                </div>
                <Footer />
                <div className={` absolute inset-0 opacity-5 bg-center bg-repeat bg-lineasPatron `} />
            </div>
        </main>
        <Navigation />
        </>

    );
}

export default PlantillaUno;