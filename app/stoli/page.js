"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Section4 from "@/components/Section4";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import products from "@/data/product";
import { useLanguage } from "@/context/LanguageContext";

export default function Stolit() {

    const { lang } = useLanguage();
    const [search, setsearch] = useState("");

    const byrzylykm = products?.byrzylyqe_per_mashkull ?? [];
    const byrzylykf = products?.byrzylyqe_per_femra ?? [];
    const varsem = products?.varse_per_mashkull ?? [];
    const varsef = products?.varse_per_femra ?? [];
    const unazam = products?.unaza_per_mashkull ?? [];
    const unazaf = products?.unaza_per_femra ?? [];

    const images = byrzylykm.map((p) => p.image);
    const image = byrzylykf.map((p) => p.image);
    const varseM = varsem.map((p) => p.image);
    const varseF = varsef.map((p) => p.image);
    const unazaM = unazam.map((p) => p.image);
    const unazaF = unazaf.map((p) => p.image);

    const allImages = [
        ...images,
        ...image,
        ...varseM,
        ...varseF,
        ...unazaM,
        ...unazaF
    ];

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

    const t = {
        sq: {
            title: "ELIF ACCESSORIES",
            desc: "Zbulo koleksionin tonë të veçantë të stolive – unaza, varëse dhe byrzylyke të dizajnuara me elegancë dhe finesë për të theksuar bukurinë tënde unike. Çdo pjesë kombinon stilin modern me shkëlqim të rafinuar.",
            mBracelets: "Byrzylyqe për meshkuj",
            fBracelets: "Byrzylyqe për femra",
            mNecklaces: "Varëse për meshkuj",
            fNecklaces: "Varëse për femra",
            mRings: "Unaza për meshkuj",
            fRings: "Unaza për femra"
        },
        en: {
            title: "ELIF ACCESSORIES",
            desc: "Discover our exclusive jewelry collection – rings, necklaces and bracelets designed with elegance and finesse to highlight your unique beauty.",
            mBracelets: "Men's bracelets",
            fBracelets: "Women's bracelets",
            mNecklaces: "Men's necklaces",
            fNecklaces: "Women's necklaces",
            mRings: "Men's rings",
            fRings: "Women's rings"
        },
        it: {
            title: "ELIF ACCESSORI",
            desc: "Scopri la nostra collezione esclusiva di gioielli – anelli, collane e bracciali dal design elegante.",
            mBracelets: "Bracciali da uomo",
            fBracelets: "Bracciali da donna",
            mNecklaces: "Collane da uomo",
            fNecklaces: "Collane da donna",
            mRings: "Anelli da uomo",
            fRings: "Anelli da donna"
        }
    };

    const get = (key) => t[lang]?.[key] || t.sq[key];

    return (
        <>
            <Header search={search} setsearch={setsearch} />

            <div className="bg-black/10 py-12 px-4 mt-14 md:mt-20">
                <div className="max-w-7xl mx-auto flex flex-col gap-5 items-center justify-center">

                    <h1 className="text-3xl md:text-4xl font-serif text-center">
                        {get("title")}
                    </h1>

                    <div className="bg-white/70 backdrop-blur-lg p-5 shadow-lg text-center">
                        <p className="text-md text-gray-700 leading-7 max-w-3xl mx-auto">
                            {get("desc")}
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center px-5 w-full">

                        <h3 className="text-black text-2xl md:text-3xl font-light border-b mt-5">
                            {get("mBracelets")}
                        </h3>

                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 py-5">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedIndex(index)}
                                    className="flex flex-col items-center justify-center overflow-hidden shadow-lg cursor-pointer group mx-auto w-full max-w-[240px]"
                                >
                                    <img src={img} className="h-50 md:h-90 w-full object-cover" />
                                </div>
                            ))}
                        </div>

                        <h3 className="text-black text-2xl md:text-3xl font-light border-b mt-5">
                            {get("fBracelets")}
                        </h3>

                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 py-5">
                            {image.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedIndex(index + images.length)}
                                    className="flex flex-col items-center justify-center overflow-hidden shadow-lg cursor-pointer group mx-auto w-full max-w-[240px]"
                                >
                                    <img src={img} className="h-50 md:h-90 w-full object-cover" />
                                </div>
                            ))}
                        </div>

                        <h3 className="text-black text-2xl md:text-3xl font-light border-b mt-5">
                            {get("mNecklaces")}
                        </h3>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-5">
                            {varseM.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        setSelectedIndex(index + images.length + image.length)
                                    }
                                    className="flex flex-col items-center justify-center overflow-hidden shadow-lg cursor-pointer group mx-auto w-full max-w-[240px]"
                                >
                                    <img src={img} className="h-50 md:h-90 w-full object-cover" />
                                </div>
                            ))}
                        </div>

                        <h3 className="text-black text-2xl md:text-3xl font-light border-b mt-5">
                            {get("fNecklaces")}
                        </h3>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-5">
                            {varseF.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        setSelectedIndex(index + images.length + image.length + varseM.length)
                                    }
                                    className="flex flex-col items-center justify-center overflow-hidden shadow-lg cursor-pointer group mx-auto w-full max-w-[240px]"
                                >
                                    <img src={img} className="h-50 md:h-90 w-full object-cover" />
                                </div>
                            ))}
                        </div>

                        <h3 className="text-black text-2xl md:text-3xl font-light border-b mt-5">
                            {get("mRings")}
                        </h3>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-5">
                            {unazaM.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        setSelectedIndex(
                                            index +
                                            images.length +
                                            image.length +
                                            varseM.length +
                                            varseF.length
                                        )
                                    }
                                    className="flex flex-col items-center justify-center overflow-hidden shadow-lg cursor-pointer group mx-auto w-full max-w-[240px]"
                                >
                                    <img src={img} className="h-50 md:h-90 w-full object-cover" />
                                </div>
                            ))}
                        </div>

                        <h3 className="text-black text-2xl md:text-3xl font-light border-b mt-5">
                            {get("fRings")}
                        </h3>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-5">
                            {unazaF.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        setSelectedIndex(
                                            index +
                                            images.length +
                                            image.length +
                                            varseM.length +
                                            varseF.length +
                                            unazaM.length
                                        )
                                    }
                                    className="flex flex-col items-center justify-center overflow-hidden shadow-lg cursor-pointer group mx-auto w-full max-w-[240px]"
                                >
                                    <img src={img} className="h-50 md:h-90 w-full object-cover" />
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
                                    alt="Punim dore"
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