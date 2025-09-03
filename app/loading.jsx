"use client";
import { useEffect } from "react";

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <div className="text-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400 mx-auto mb-4"></div>
                <h2 className="text-yellow-400 text-2xl font-bold">Hockey Academy</h2>
                <p className="text-gray-300">Cargando...</p>
            </div>
        </div>
    );
}


