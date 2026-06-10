"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Section2() {

    const { lang } = useLanguage();

    const text = {
        sq: {
            parfume: {
                title: "Parfume",
                desc: "Parfumet më të mira do ti gjeni tek ne me cmime shumë të arsyeshme."
            },
            canta: {
                title: "Çanta",
                desc: "Çantat dhe portofolet më të mira i gjeni tek ne cmime te arsyeshme."
            },
            syze: {
                title: "Syze",
                desc: "Syzet më moderne i gjeni tek ne me stil unik dhe çmime perfekte."
            },
            orat: {
                title: "Orat",
                desc: "Orat më luksoze i gjeni tek ne me dizajne elegante dhe çmime ideale."
            },
            stoli: {
                title: "Stoli",
                desc: "Stolitë më elegante i gjeni tek ne me pamje perfekte dhe çmime fantastike"
            }
        },

        en: {
            parfume: {
                title: "Perfumes",
                desc: "The best perfumes you will find with us at very affordable prices."
            },
            canta: {
                title: "Bags",
                desc: "The best bags and wallets you will find with us at affordable prices."
            },
            syze: {
                title: "Sunglasses",
                desc: "The most modern sunglasses with unique style and perfect prices."
            },
            orat: {
                title: "Watches",
                desc: "Luxury watches with elegant designs and ideal prices."
            },
            stoli: {
                title: "Jewelry",
                desc: "Elegant jewelry with perfect look and fantastic prices."
            }
        },

        it: {
            parfume: {
                title: "Profumi",
                desc: "I migliori profumi li trovi da noi a prezzi molto convenienti."
            },
            canta: {
                title: "Borse",
                desc: "Le migliori borse e portafogli li trovi da noi a prezzi convenienti."
            },
            syze: {
                title: "Occhiali",
                desc: "Gli occhiali più moderni con stile unico e prezzi perfetti."
            },
            orat: {
                title: "Orologi",
                desc: "Orologi di lusso con design eleganti e prezzi ideali."
            },
            stoli: {
                title: "Gioielli",
                desc: "Gioielli eleganti con aspetto perfetto e prezzi fantastici."
            }
        }
    };

    const t = text[lang] || text.sq;

    useEffect(() => {
        const elements = document.querySelectorAll(".card-zoom");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    } else {
                        entry.target.classList.remove("active");
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div
            id="Produktet"
            className="flex flex-col md:flex-row w-full h-auto mt-20 items-center justify-center gap-10 px-5 scroll-mt-[30vh]">

            <Link href="/parfume" className="relative w-80 overflow-hidden group">
                <div className="h-100 transition-transform duration-300">
                    <img src="/Parfume.webp" className="card-zoom w-full h-full object-cover" />
                    <div className="absolute inset-0 hover:bg-black/20"></div>
                </div>
                <div className="absolute bottom-0 left-0 z-10 bg-black/80 text-center justify-center py-4 px-4 leading-loose">
                    <h2 className="text-white text-lg font-normal font-serif">
                        {t.parfume.title}
                    </h2>
                    <p className="text-sm text-gray-100 font-sans font-thin">
                        {t.parfume.desc}
                    </p>
                </div>
            </Link>

            <Link href="/canta" className="relative w-80 overflow-hidden group">
                <div className="h-100 transition-transform duration-300">
                    <img src="/Canta.webp" className="card-zoom w-full h-full object-cover" />
                    <div className="absolute inset-0 hover:bg-black/20"></div>
                </div>
                <div className="absolute bottom-0 left-0 z-10 bg-black/80 text-center justify-center py-4 px-4 leading-loose">
                    <h2 className="text-white text-lg font-normal font-serif">
                        {t.canta.title}
                    </h2>
                    <p className="text-sm text-gray-100 font-sans font-thin">
                        {t.canta.desc}
                    </p>
                </div>
            </Link>

            <Link href="/syze" className="relative w-80 overflow-hidden group">
                <div className="h-100 transition-transform duration-300">
                    <img src="/Syze.webp" className="card-zoom w-full h-full object-cover" />
                    <div className="absolute inset-0 hover:bg-black/20"></div>
                </div>
                <div className="absolute bottom-0 left-0 z-10 bg-black/80 text-center justify-center py-4 px-4 leading-loose">
                    <h2 className="text-white text-lg font-normal font-serif">
                        {t.syze.title}
                    </h2>
                    <p className="text-sm text-gray-100 font-sans font-thin">
                        {t.syze.desc}
                    </p>
                </div>
            </Link>

            <Link href="/orat" className="relative w-80 overflow-hidden group">
                <div className="h-100 transition-transform duration-300">
                    <img src="/Ora.webp" className="card-zoom w-full h-full object-cover" />
                    <div className="absolute inset-0 hover:bg-black/20"></div>
                </div>
                <div className="absolute bottom-0 left-0 z-10 bg-black/80 text-center justify-center py-4 px-4 leading-loose">
                    <h2 className="text-white text-lg font-normal font-serif">
                        {t.orat.title}
                    </h2>
                    <p className="text-sm text-gray-100 font-sans font-thin">
                        {t.orat.desc}
                    </p>
                </div>
            </Link>

            <Link href="/stoli" className="relative w-80 overflow-hidden group">
                <div className="h-100 transition-transform duration-300">
                    <img src="/Stoli.webp" className="card-zoom w-full h-full object-cover" />
                    <div className="absolute inset-0 hover:bg-black/20"></div>
                </div>
                <div className="absolute bottom-0 left-0 z-10 bg-black/80 text-center justify-center py-4 px-4 leading-loose">
                    <h2 className="text-white text-lg font-normal font-serif">
                        {t.stoli.title}
                    </h2>
                    <p className="text-sm text-gray-100 font-sans font-thin">
                        {t.stoli.desc}
                    </p>
                </div>
            </Link>

        </div>
    )
}