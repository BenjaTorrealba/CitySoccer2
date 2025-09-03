import Image from 'next/image';

import partnersA from 'public/images/partnersSBHotels.png';
import partnersB from 'public/images/partnersRealClubDePoloBarcelona.png';
import partnersC from 'public/images/partnersOrbital.png';
import partnersD from 'public/images/partnersMundoAbra.png';
import partnersE from 'public/images/partnersMBP.png';
import partnersF from 'public/images/partnersLetsGoUsa.png';
import partnersG from 'public/images/partnersHockeyAcademy.png';
import partnersH from 'public/images/partnersFarmaciasBriera.png';
import partnersI from 'public/images/partnersEfeSur.png';
import partnersJ from 'public/images/partnersBeggiaTurismo.png';
import partnersK from 'public/images/partnersAsistCard.png';

const partnersLogos = [
    partnersA, partnersB, partnersC, partnersD, partnersE, partnersF, partnersG, partnersH, partnersI, partnersJ, partnersK ]

export function Partners() {
    return (
        <>
                                {partnersLogos.map((src, index) => (
                                    <span data-aos-once="true" data-aos="fade-up" key={index} className={` relative inline-block aspect-1 bg-white rounded-full w-36 overflow-hidden m-8`}>
                                        <Image className={` w-full h-full object-contain object-center `} src={src} alt='' />
                                    </span>
                                ))}
        </>
    );
}
