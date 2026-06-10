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

    const punimem = products?.punime_artizanale_m ?? [];
    const punimef = products?.punime_artizanale_f ?? [];

    const images = punimem.map((p) => p.image);
    const image = punimef.map((p) => p.image);

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

    const t = {
        sq: {
            title: "ELIF HANDMADE",
            desc: "Unazat tona artizanale janë të punuara me dorë me kujdes dhe detaje unike, duke kombinuar elegancën me stilin modern. Çdo unazë është një krijim i veçantë që nuk prodhohet në seri, por shpreh individualitet dhe shije personale.",
            male: "Unaza për meshkuj me punim dore",
            female: "Unaza për femra me punim dore",
            orderTitle: "Porosia jote!",
            orderText: "Porosite ti unazën tjetër të radhës sipas dëshirës tënde.",
            orderBtn: "Porosit"
        },
        en: {
            title: "ELIF HANDMADE",
            desc: "Our handmade rings are crafted with care and unique details, combining elegance with modern style. Each ring is a unique creation, not mass-produced, expressing individuality and personal taste.",
            male: "Men's handmade rings",
            female: "Women's handmade rings",
            orderTitle: "Your order!",
            orderText: "Order your next ring exactly the way you want it.",
            orderBtn: "Order"
        },
        it: {
            title: "ELIF FATTO A MANO",
            desc: "I nostri anelli artigianali sono realizzati a mano con cura e dettagli unici, combinando eleganza e stile moderno. Ogni anello è un pezzo unico, non prodotto in serie, che esprime individualità e gusto personale.",
            male: "Anelli da uomo fatti a mano",
            female: "Anelli da donna fatti a mano",
            orderTitle: "Il tuo ordine!",
            orderText: "Ordina il tuo prossimo anello come desideri.",
            orderBtn: "Ordina"
        }
    };

    const text = t[lang] || t.sq;

    return (
        <>
            <Header search={search} setsearch={setsearch} />

            <div className="bg-black/10 py-12 px-4 mt-20">
                <div className="max-w-7xl mx-auto flex flex-col gap-5 items-center justify-center">

                    <h1 className="text-3xl md:text-4xl font-normal font-serif text-center">
                        {text.title}
                    </h1>

                    <div className="bg-white/70 backdrop-blur-lg p-5 shadow-lg text-center">
                        <p className="text-md text-gray-700 leading-7 max-w-3xl mx-auto">
                            {text.desc}
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center px-5">

                        <h3 className="text-black font-sans tracking-widest text-lg md:text-3xl font-light border-b-1 mt-5 text-center">
                            {text.male}
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center w-full py-5">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedIndex(index)}
                                    className="w-40 md:w-60 overflow-hidden shadow-lg cursor-pointer group items-center justify-center"
                                >
                                    <img
                                        src={img}
                                        className="h-50 md:h-90 w-full object-cover group-hover:scale-105 transition duration-300"
                                        alt={`Punim dore ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>

                        <h3 className="text-black font-sans tracking-widest text-lg md:text-3xl font-light border-b-1 mt-5 text-center">
                            {text.female}
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center w-full py-5">
                            {image.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedIndex(index + images.length)}
                                    className="w-40 md:w-60 overflow-hidden shadow-lg cursor-pointer group items-center justify-center"
                                >
                                    <img
                                        src={img}
                                        className="h-50 md:h-90 w-full object-cover group-hover:scale-105 transition duration-300"
                                        alt={`Punim dore ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>

                        <h3 className="text-black font-sans tracking-widest text-xl md:text-3xl font-light border-b-1 mb-5 mt-5 text-center">
                            {text.orderTitle}
                        </h3>

                        <a
                            href="https://wa.me/355693286179?text=Përshëndetje%2C%20isha%20i%20interesuar%20për%20unaza%20me%20punim%20dore."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-80 overflow-hidden group block"
                        >
                            <div className="h-100 w-full transition-transform duration-300 group-hover:scale-105">
                                <img
                                    src="/Unazb.Pd.webp"
                                    alt="Unaza punim dore"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                            </div>

                            <div className="absolute bottom-0 left-0 z-10 w-full bg-black/80 text-center py-4 px-4 leading-loose">
                                <h2 className="text-white text-lg font-normal font-serif">
                                    {text.orderBtn}
                                </h2>
                                <p className="text-sm text-gray-100 font-thin">
                                    {text.orderText}
                                </p>
                            </div>
                        </a>

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