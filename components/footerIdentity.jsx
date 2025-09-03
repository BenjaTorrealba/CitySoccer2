import Link from 'next/link';

export function FooterIdentity() {
    return (
        <footer className={` relative z-30 bg-blackTransparenteFondo `}>

            <div className={` max-w-5xl p-8 border-solid border-b-2 border-white border-opacity-30 mx-auto `}>
                <div className={` grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-white text-left mx-auto`}>

                    <address>
                        <h3 className={` not-italic text-lg font-bold my-4 `}>Contacto Argentina</h3>
                        <p className={` not-italic text-sm font-NotoSerif `}>A. Figueroa 106 Buenos Aires</p>
                        <p className={` not-italic text-sm font-NotoSerif `}><Link href='tel:+5491160379742'>+54 9 11 6037-9742</Link></p>
                        <p className={` not-italic text-sm font-NotoSerif `}><Link href='mailto:info@identitycampus.com'>info@identitycampus.com</Link></p>
                    </address>
                    <address>
                        <h3 className={` not-italic text-lg font-bold my-4 `}>Contacto España</h3>
                        <p className={` not-italic text-sm font-NotoSerif `}>San Pere D´abanto 14 Barcelona</p>
                        <p className={` not-italic text-sm font-NotoSerif `}><Link href='tel:+34653783576'>+34 653 783 576</Link></p>
                        <p className={` not-italic text-sm font-NotoSerif `}><Link href='mailto:info@identitycampus.com'>info@identitycampus.com</Link></p>
                    </address>
                    <address>
                        <h3 className={` not-italic text-lg font-bold my-4 `}>Contacto EEUU - LETSGO USA</h3>
                        <p className={` not-italic text-sm font-NotoSerif `}>7777 Glades Road. Boca Raton. FL. 33434. United States</p>
                        <p className={` not-italic text-sm font-NotoSerif`}><Link href='tel:+19544005755'>+1 954 400 5755</Link></p>
                        <p className={` not-italic text-sm font-NotoSerif `}><Link href='mailto:info@letsgo-usa.com'>info@letsgo-usa.com</Link></p>
                    </address>

                </div>
            </div>

            <div className={` max-w-5xl p-8 mx-auto `}>
                <div className={` text-white text-left mx-auto `}>
                    Todos los derechos reservados a IDentity Campus 2024
                </div>
            </div>

        </footer>
    );
};
