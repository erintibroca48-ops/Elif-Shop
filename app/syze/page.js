"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Section4 from "@/components/Section4";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import products from "@/data/product";
import { useLanguage } from "@/context/LanguageContext";

export default function Syzet() {

    const { lang } = useLanguage();
    const [search, setsearch] = useState("");

    const syze_m = products?.syze_per_mashkull ?? [];
    const syze_f = products?.syze_per_femra ?? [];

    const images = syze_m.map((p) => p.image);
    const image = syze_f.map((p) => p.image);

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

    return (
        <>
            <Header search={search} setsearch={setsearch} />

            <div className="bg-black/10 py-12 px-4 mt-20">
                <div className="max-w-7xl mx-auto flex flex-col gap-5 items-center justify-center">
                    <h1 className="text-3xl md:text-4xl font-normal font-serif text-center">
                        ELIF SUNGLASSES
                    </h1>

                    <div className="bg-white/70 backdrop-blur-lg p-5 shadow-lg text-center">
                        <p className="text-md text-gray-700 leading-7 max-w-3xl mx-auto">
                            Syze që kombinojnë luksin, stilin dhe komoditetin për çdo look perfekt.
                            Nga modelet moderne deri te ato elegante, çdo detaj është zgjedhur për të të bërë të dukesh unik/e në çdo moment.
                            Plotëso stilin tënd me aksesorin që tërheq gjithë vëmendjen.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center px-5">
                        <h3 className="text-black font-sans tracking-widest text-2xl md:text-3xl font-light border-b-1 mt-5">
                            Syze për meshkuj
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
                                        alt={`Syze M ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>

                        <h3 className="text-black font-sans tracking-widest text-2xl md:text-3xl font-light border-b-1 mt-5">
                            Syze për femra
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
                                        alt={`Syze F ${index + 1}`}
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
                                    alt="Syze"
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