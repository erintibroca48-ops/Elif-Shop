"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Section4 from "@/components/Section4";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import products from "@/data/product";
import { useLanguage } from "@/context/LanguageContext";

export default function Orat() {

    const { lang } = useLanguage();
    const [search, setsearch] = useState("");

    const ora_m = products?.ora_per_mashkull ?? [];
    const ora_f = products?.ora_per_femra ?? [];

    const images = ora_m.map((p) => p.image);
    const image = ora_f.map((p) => p.image);

    const allImages = [...images, ...image];

    const [selectedIndex, setSelectedIndex] = useState(null);

    const modalRef = useRef(null);

    const nextImage = () => {
        setSelectedIndex((prev) =>
            prev !== null ? (prev + 1) % allImages.length : 0
        );
    };

    const prevImage = () => {
        setSelectedIndex((prev) =>
            prev !== null
                ? prev === 0
                    ? allImages.length - 1
                    : prev - 1
                : 0
        );
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setSelectedIndex(null);
            }
        };

        if (selectedIndex !== null) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedIndex]);

    const TEXTS = {
        sq: {
            title: "ELIF WATCHES",
            description: `Ora që nuk është thjesht aksesor, por një detaj që tregon stil dhe vetëbesim. 
                          Me dizajne elegante dhe moderne, çdo model është krijuar për të kompletuar çdo veshje në mënyrë perfekte. 
                          Bëje çdo sekondë të duket më me vlerë me një stil që bie në sy menjëherë.`,
            male: "Ora për meshkuj",
            female: "Ora për femra",
            altMale: (i) => `Ora për meshkuj ${i + 1}`,
            altFemale: (i) => `Ora për femra ${i + 1}`,
            modalAlt: "Ora"
        },

        en: {
            title: "ELIF WATCHES",
            description: `A watch is not just an accessory, but a detail that shows style and confidence. 
                          With elegant and modern designs, each model is created to perfectly complete every outfit. 
                          Make every second more valuable with a style that stands out instantly.`,
            male: "Men's Watches",
            female: "Women's Watches",
            altMale: (i) => `Men's watch ${i + 1}`,
            altFemale: (i) => `Women's watch ${i + 1}`,
            modalAlt: "Watch"
        },

        it: {
            title: "ELIF OROLOGI",
            description: `Un orologio non è solo un accessorio, ma un dettaglio che mostra stile e sicurezza. 
                          Con design eleganti e moderni, ogni modello è creato per completare perfettamente ogni outfit. 
                          Rendi ogni secondo più prezioso con uno stile che si distingue subito.`,
            male: "Orologi da uomo",
            female: "Orologi da donna",
            altMale: (i) => `Orologio da uomo ${i + 1}`,
            altFemale: (i) => `Orologio da donna ${i + 1}`,
            modalAlt: "Orologio"
        }
    };

    const t = TEXTS[lang] || TEXTS.sq;

    return (
        <>
            <Header search={search} setsearch={setsearch} />

            <div className="bg-black/10 py-12 px-4 mt-14 md:mt-20">
                <div className="max-w-7xl mx-auto flex flex-col gap-5 items-center justify-center">

                    <h1 className="text-3xl md:text-4xl font-normal font-serif text-center">
                        {t.title}
                    </h1>

                    <div className="bg-white/70 backdrop-blur-lg p-5 shadow-lg text-center">
                        <p className="text-md text-gray-700 leading-7 max-w-3xl mx-auto">
                            {t.description}
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center px-5">

                        <h3 className="text-black font-sans tracking-widest text-2xl md:text-3xl font-light border-b-1 mt-5">
                            {t.male}
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center w-full py-5">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedIndex(index)}
                                    className="flex flex-col items-center justify-center overflow-hidden shadow-lg cursor-pointer group mx-auto w-full max-w-[240px]"
                                >
                                    <img
                                        src={img}
                                        className="h-50 md:h-90 w-full object-cover group-hover:scale-105 transition duration-300"
                                        alt={t.altMale(index)}
                                    />
                                </div>
                            ))}
                        </div>

                        <h3 className="text-black font-sans tracking-widest text-2xl md:text-3xl font-light border-b-1 mt-5">
                            {t.female}
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center w-full py-5">
                            {image.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedIndex(index + images.length)}
                                    className="flex flex-col items-center justify-center overflow-hidden shadow-lg cursor-pointer group mx-auto w-full max-w-[240px]"
                                >
                                    <img
                                        src={img}
                                        className="h-50 md:h-90 w-full object-cover group-hover:scale-105 transition duration-300"
                                        alt={t.altFemale(index)}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {selectedIndex !== null && (
                    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
                        <div
                            ref={modalRef}
                            className="relative flex items-center justify-center"
                        >
                            <button
                                onClick={() => setSelectedIndex(null)}
                                className="absolute top-[-50px] right-0 text-white hover:scale-110 transition"
                            >
                                <X size={32} />
                            </button>

                            <button
                                onClick={prevImage}
                                className="absolute left-2 sm:left-4 md:left-[-60px] bg-black/50 p-2 rounded-full text-white hover:scale-110 transition"
                            >
                                <ChevronLeft size={28} />
                            </button>

                            <div className="w-[90vw] max-w-4xl h-[70vh] flex items-center justify-center">
                                <img
                                    src={allImages[selectedIndex]}
                                    className="w-full h-full object-contain rounded-2xl shadow-2xl"
                                    alt={t.modalAlt}
                                />
                            </div>

                            <button
                                onClick={nextImage}
                                className="absolute right-2 sm:right-4 md:right-[-60px] bg-black/50 p-2 rounded-full text-white hover:scale-110 transition"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <Section4 />
        </>
    );
}