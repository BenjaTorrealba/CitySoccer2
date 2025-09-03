"use client";

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import facebookIcon from 'public/images/facebook.svg';
import instagramIcon from 'public/images/instagram.svg';
import tiktokIcon from 'public/images/tiktok.svg';
import youtubeIcon from 'public/images/youtube.svg';


const navItems = [
    { linkText: "Inicio", href: "/" },
    { linkText: "Quienes somos", href: "/quienessomos" },
    {
        linkText: "Servicios",
        subTitulos: [
            { linkText: "Arriendos Futbol 7", href: "/arrendarcancha/futbol7" },
            { linkText: "Arriendos Futbol 9", href: "/arrendarcancha/futbol9" },
            { linkText: "Arriendos Pickleball", href: "/arrendarcancha/pickleball" },
            { linkText: "Clases particulares Futbol", href: "/clasesparticularesfutbol"},
            { linkText: "Clases particulares Pickleball", href: "/clasesparticularespickleball"},
            { linkText: "Academia de futbol", href: "/academiadefutbol" },
            { linkText: "Academia de Pickeball", href: "/academiadepickleball" },
            { linkText: "Summer Camp", href: "/summer-camp" },
            { linkText: "Eventos", href: "/eventos" },
        ],
    },
        {
        linkText: "Futbol",
        subTitulos: [
            { linkText: "Arriendos Futbol 7", href: "/arrendarcancha/futbol7" },
            { linkText: "Arriendos Futbol 9", href: "/arrendarcancha/futbol9" },
            { linkText: "Clases particulares Futbol", href: "/clasesparticularesfutbol"},
            { linkText: "Academia de futbol", href: "/academiadefutbol" },            
        ],
    },
            {
        linkText: "Pickleball",
        subTitulos: [
            { linkText: "Arriendos Pickleball", href: "/arrendarcancha/pickleball" },
            { linkText: "Clases particulares Pickleball", href: "/clasesparticularespickleball"},
            { linkText: "Academia de Pickeball", href: "/academiadepickleball" },
        ],
    },
    { linkText: "Summer Camp", href: "/summer-camp" },
    { linkText: "Eventos", href: "/eventos" },
    { linkText: "Contacto", href: "/contacto" },
    { linkText: "Login", href: "/login" },
];

const remToPixels = (rem) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

export function Navigation() {
    const pathname = usePathname();
    const [activePath, setActivePath] = useState(pathname);
    const [subMenuOpening, setOpenSubMenu] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const subMenuRefs = useRef([]);

    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSubMenuToggle = (index) => {
        if (subMenuOpening === index) {
            closeSubMenu(index);
            setOpenSubMenu(null);
        } else {

            if (subMenuOpening !== null) {
                closeSubMenu(subMenuOpening);
            }
            openSubMenu(index);
            setOpenSubMenu(index);
        }
    };

    const handleLinkClick = () => {
        if (subMenuOpening !== null) {
            closeSubMenu(subMenuOpening);
            setOpenSubMenu(null);
        }
        // Close the entire menu when a link is clicked
        setMenuOpen(false);
    };

    const closeSubMenu = (index) => {
        const subMenu = subMenuRefs.current[index];
        const marginBottomPixels = remToPixels(0.75);
        subMenu.style.height = `${subMenu.scrollHeight + marginBottomPixels}px`;
        requestAnimationFrame(() => {
            subMenu.style.transition = 'height 0.382s ease-in-out, opacity 0.382s ease-in-out';
            subMenu.style.height = '0';
            subMenu.style.opacity = '0';
        });
    };

    const openSubMenu = (index) => {
        const subMenu = subMenuRefs.current[index];
        subMenu.style.height = '0';
        subMenu.style.opacity = '0';
        requestAnimationFrame(() => {
            const marginBottomPixels = remToPixels(0.75);
            subMenu.style.transition = 'height 0.382s ease-in-out, opacity 0.382s ease-in-out';
            subMenu.style.height = `${subMenu.scrollHeight + marginBottomPixels}px`;
            subMenu.style.opacity = '1';
        });
    };

    const isSubItemActive = (subTitulos) => {
        return subTitulos.some(subItem => subItem.href === activePath);
    };

    const getLinkClass = (path, subTitulos) => {
        if (path === activePath) return 'text-yellow-400';
        if (subTitulos && isSubItemActive(subTitulos)) return 'text-yellow-400';
        return 'text-[rgba(255,255,255,0.8)]';
    };

    return (
        <nav className={` bg-transparent fixed top-0 left-0 inline-flex font-Cabin w-full h-20 md:w-min md:h-screen `}>

            <div className={` h-min inline-flex flex-row bg-gray-950 z-50 md:pb-6 md:w-32 md:h-full md:flex-col transition-all ease-in-out duration-500 w-full `}>
                <div className={` py-2 px-4 flex md:p-2 md:inline-block md:aspect-1 md:w-full  `}>
                    <Link href='.\' className={` cursor-pointer `}>
                        <img
                            src="./citysoccer/logo2.png"
                            alt="City Soccer Logo"
                            className="mx-auto mb-8 w-20 h-150 object-contain"
                            style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}
                        />
                    </Link>
                </div>
                <div className={` queverguenzaMenu pr-3 h-auto flex flex-grow items-center justify-end    md:flex-col md:p-0 md:justify-center `}>
                    <div className={` flex flex-raw cursor-pointer m-1.5   md:m-0 md:flex-col `} onClick={toggleMenu}>
                        <div className={` inline-block mx-3 font-semibold text-white text-lg uppercase md:my-1.5      md:block md:mx-0 `}>Menú</div>
                        <div className={` inline-flex h-6 w-7 relative cursor-pointer transition-all ease-in-out duration-200    md:m-auto `}>
                            <div className={`block mx-auto w-7 h-1 absolute         left-0 z-20 transition-all ease-in-out duration-[380ms] bg-white ${menuOpen ? 'top-2.5 queverguenzaMenuIconoBarraSupOpen' : ' top-0 queverguenzaMenuIconoBarraSupClose'} `}></div>
                            <div className={`      mx-auto w-7 h-1 absolute top-2.5 left-0 z-10 transition-all ease-in-out duration-[380ms]            ${menuOpen ? ' bg-gray-950' : ' bg-white'} `}></div>
                            <div className={`block mx-auto w-7 h-1 absolute         left-0 z-20 transition-all ease-in-out duration-[380ms] bg-white ${menuOpen ? 'top-2.5 queverguenzaMenuIconoBarraInfOpen' : ' top-5 queverguenzaMenuIconoBarraInfClose'} `}></div>
                        </div>
                    </div>
                </div>
                <div className={` hidden grid-cols-2 grid-rows-2 gap-6 p-7    md:grid md:aspect-1 md:w-32 `}>
                    <Link href={` https://www.facebook.com/identity.campus.arg/ `} className={`inline-block `}><Image src={facebookIcon} alt={` `} className={` mx-auto `} /></Link>
                    <Link href={` https://www.instagram.com/hockeyacademyok/ `} className={`inline-block `}><Image src={instagramIcon} alt={` `} className={` mx-auto `} /></Link>
                    <Link href={` https://www.tiktok.com/@hockeyacademyok `} className={`inline-block `}><Image src={tiktokIcon} alt={` `} className={` mx-auto `} /></Link>
                    <Link href={` https://www.youtube.com/channel/UCug1CBwhTNIJ9rZFNGuu0_A `} className={` inline-block `}><Image src={youtubeIcon} alt={` `} className={` mx-auto `} /></Link>
                </div>
            </div>

            {!!navItems?.length && (
                <ul className={` inline-flex  font-semibold text-lg text-left md:text-right w-min px-8 z-40 h-screen     bg-gray-950 items-start md:items-end justify-center transition-all ease-in-out duration-[382ms] leading-relaxed flex-col ${menuOpen ? 'mx-0 opacity-100 ' : 'opacity-0 -mr-96 md:-ml-96'} `}  >
                    {navItems.map((item, index) => (
                        <li key={index}>
                            {item.href && (
                                <Link href={item.href} onClick={handleLinkClick} className={`${getLinkClass(item.href)} hover:text-yellow-400 no-underline whitespace-nowrap`}>
                                    {item.linkText}
                                </Link>
                            )}
                            {item.subTitulos && (
                                <div>
                                    <div onClick={() => handleSubMenuToggle(index)} className={`${getLinkClass(item.href, item.subTitulos)} hover:text-yellow-400 cursor-pointer whitespace-nowrap `}>
                                        {item.linkText}
                                    </div>
                                    <ul ref={el => subMenuRefs.current[index] = el} className={`h-0 opacity-0 leading-tight transition-all overflow-hidden `}>
                                        {item.subTitulos.map((subItem, subIndex) => (
                                            <li key={subIndex} className={` ml-3 md:mr-3 `}>
                                                <Link href={subItem.href} onClick={handleLinkClick} className={`${getLinkClass(subItem.href)} hover:text-yellow-400 no-underline text-sm whitespace-nowrap `}>
                                                    {subItem.linkText}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}

        </nav>
    );
}
