"use client";
import { useEffect, useState } from "react";
import videofondoa from 'public/hockeyacademycamp/hockeyacademyfondoa.jpg';
import videofondob from 'public/hockeyacademycamp/hockeyacademyfondob.jpg';

export default function HockeyAcademyVideoA({ children }) {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
            >
                <source src="/citysoccer/854169-hd_1920_1080_25fps.mp4" type="video/mp4" />
                Su navegador no soporta el elemento de video.
            </video>
            
            {/* Children content (logos, overlays, etc.) */}
            {children}
        </section>
    );
};
