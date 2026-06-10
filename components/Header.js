"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronRight, Search, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Header({ search, setsearch }) {

    const { lang, setLang } = useLanguage();;

    const [openmenu, setopenmenu] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openlang, setopenlang] = useState(false);

    const wrapperRef = useRef(null);
    const router = useRouter();

    const t = {
        sq: {
            home: "Hoe",
            products: "Produkte",
            custom: "Personalizime",
            contact: "Kontakto",
            search: "Kërko..."
        },
        en: {
            home: "Home",
            products: "Products",
            custom: "Customizations",
            contact: "Contact",
            search: "Search..."
        },
        it: {
            home: "Home",
            products: "Prodotti",
            custom: "Personalizzazioni",
            contact: "Contatto",
            search: "Cerca..."
        }
    };

    const get = (key) => t[lang]?.[key] || t.sq[key];

    useEffect(() => {
        document.body.style.overflow = openmenu ? "hidden" : "auto";
    }, [openmenu]);

    useEffect(() => {
        document.body.style.overflow = openlang ? "hidden" : "auto";
    }, [openlang]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpenSearch(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleKeyDown = (e) => {
        if (e.key !== "Enter") return;

        const text = e.target.value.toLowerCase();

        if (
            text.includes("canta") ||
            text.includes("çant") ||
            text.includes("cante") ||
            text.includes("kulete") ||
            text.includes("kuleta") ||
            text.includes("kulet") ||
            text.includes("bag") ||
            text.includes("bags") ||
            text.includes("handbag") ||
            text.includes("purse") ||
            text.includes("borsa")
        ) {
            router.push("/canta");
        }

        else if (
            text.includes("syze") ||
            text.includes("glasses") ||
            text.includes("sunglasses") ||
            text.includes("occhiali")
        ) {
            router.push("/syze");
        }

        else if (
            text.includes("ora") ||
            text.includes("orat") ||
            text.includes("orë") ||
            text.includes("ore") ||
            text.includes("watch") ||
            text.includes("watches") ||
            text.includes("clock") ||
            text.includes("orologio")
        ) {
            router.push("/orat");
        }

        else if (
            text.includes("parfum") ||
            text.includes("parfume") ||
            text.includes("perfume") ||
            text.includes("fragrance") ||
            text.includes("profumo")
        ) {
            router.push("/parfume");
        }

        else if (
            text.includes("stoli") ||
            text.includes("jewelry") ||
            text.includes("jewelery") ||
            text.includes("bijoux") ||
            text.includes("gioielli") ||
            text.includes("unaza") ||
            text.includes("unaz") ||
            text.includes("unaze") ||
            text.includes("ring") ||
            text.includes("rings") ||
            text.includes("varse") ||
            text.includes("necklace") ||
            text.includes("bracelet") ||
            text.includes("byrzylyk")
        ) {
            router.push("/stoli");
        }

        else if (
            text.includes("punime") ||
            text.includes("punime dore") ||
            text.includes("punime artizanale") ||
            text.includes("personalizime") ||
            text.includes("handmade") ||
            text.includes("custom") ||
            text.includes("customized") ||
            text.includes("artigianale")
        ) {
            router.push("/punime-dore");
        }

        setOpenSearch(false);
    };

    return (
        <div className="flex flex-col w-full fixed top-0 left-0 z-50">

            <div className="bg-white flex w-full px-4 md:px-20 py-3 items-center justify-between relative">
                <div
                    className="md:hidden cursor-pointer"
                    onClick={() => setopenmenu(!openmenu)}
                >
                    {openmenu ? (
                        <X className="w-7 h-7" />
                    ) : (
                        <Menu className="w-7 h-7" />
                    )}
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center gap-2">

                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/Elif-Shop.webp"
                            className="border-[0.1px] rounded-sm border-gray-900 w-12 h-12"
                            alt="logo"
                        />

                        <h2 className="md:hidden text-sm font-serif text-gray-800">
                            Elif Shop
                        </h2>
                    </Link>

                </div>

                <div className="hidden md:flex items-center gap-2 md:gap-5 lg:gap-10 text-[16px] font-normal tracking-widest absolute left-1/2 -translate-x-1/2 text-gray-800">

                    <Link href="/#Porosit" className="hover:border-b hover:text-black">
                        {get("home")}
                    </Link>

                    <Link href="/#Produktet" className="hover:border-b hover:text-black">
                        {get("products")}
                    </Link>

                    <Link href="/#PunimeDore" className="hover:border-b hover:text-black">
                        {get("custom")}
                    </Link>

                    <Link href="/#Kontakto" className="hover:border-b hover:text-black">
                        {get("contact")}
                    </Link>

                </div>

                <div className="ml-auto flex items-center" ref={wrapperRef}>

                    {!openSearch && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpenSearch(true);
                            }}
                            className="px-1 py-1 border border-gray-600 rounded bg-gray-100 hover:bg-gray-300 text-black transition-colors duration-300 cursor-pointer"
                        >
                            <Search className="w-3 md:w-5 lg:w-7 h-auto" strokeWidth={1} />
                        </button>
                    )}

                    <div
                        className={`
                                    transition-all duration-300 overflow-hidden
                                    ${openSearch ? "w-14 md:w-18 lg:w-24 opacity-100" : "w-0 opacity-0"}
                                    `}
                    >
                        <input
                            className="w-14 md:w-18 lg:w-24 border border-gray-300 px-1 md:px-3 py-2 text-sm outline-none rounded-sm"
                            type="text"
                            placeholder={get("search")}
                            value={search}
                            onChange={(e) => setsearch(e.target.value)}
                            onKeyDown={handleKeyDown}
                            autoFocus={openSearch}
                        />
                    </div>
                    <div className="relative flex items-center gap-2 text-xs font-sans ml-2">

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setopenlang(!openlang);
                            }}
                            className="px-1 py-1 border border-gray-900 rounded bg-gray-900 hover:bg-black text-gray-100 transition-colors duration-300 cursor-pointer"
                        >
                            {openlang ? <X className="w-3 md:w-5 lg:w-7 h-auto" strokeWidth={1} /> : <Globe className="w-3 md:w-5 lg:w-7 h-auto" strokeWidth={1} />}
                        </button>

                        {openlang && (
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="absolute md:top-12 top-8 right-[-5px] flex flex-col gap-2 bg-white border shadow-md p-2 rounded"
                            >
                                <button
                                    onClick={() => {
                                        setLang("sq");
                                        setopenlang(false);
                                    }}
                                    className={`py-0.5 ${lang === "sq"
                                        ? "font-bold text-black border-b border-black cursor-pointer"
                                        : "text-gray-500 hover:text-black"
                                        }`}
                                >
                                    SQ - Shqip
                                </button>

                                <button
                                    onClick={() => {
                                        setLang("en");
                                        setopenlang(false);
                                    }}
                                    className={`py-0.5 ${lang === "en"
                                        ? "font-bold text-black border-b border-black cursor-pointer"
                                        : "text-gray-500 hover:text-black"
                                        }`}
                                >
                                    EN - English
                                </button>

                                <button
                                    onClick={() => {
                                        setLang("it");
                                        setopenlang(false);
                                    }}
                                    className={`py-0.5 ${lang === "it"
                                        ? "font-bold text-black border-b border-black cursor-pointer"
                                        : "text-gray-500 hover:text-black"
                                        }`}
                                >
                                    IT - Italiano
                                </button>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {openmenu && (
                <div
                    className="fixed top-15 md:top-17 left-0 w-full h-full z-50 flex justify-center"
                    onClick={() => setopenmenu(false)}
                >
                    <div
                        className="bg-slate-200 w-full h-full flex flex-col relative px-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col py-3">

                            <Link
                                onClick={() => setopenmenu(false)}
                                href="/#Porosit"
                                className="flex items-center justify-between border-b border-gray-300 py-4 w-full px-4 text-gray-800 hover:bg-slate-900 hover:text-amber-500 transition-colors duration-300"
                            >
                                <h2 className="text-[17px] font-thin leading-loose">{get("home")}</h2>
                                <ChevronRight className="w-5 h-5" />
                            </Link>

                            <Link
                                onClick={() => setopenmenu(false)}
                                href="/#Produktet"
                                className="flex items-center justify-between border-b border-gray-300 py-4 w-full px-4 text-gray-800 hover:bg-slate-900 hover:text-amber-500 transition-colors duration-300"
                            >
                                <h2 className="text-[17px] font-thin leading-loose">{get("products")}</h2>
                                <ChevronRight className="w-5 h-5" />
                            </Link>

                            <Link
                                onClick={() => setopenmenu(false)}
                                href="/#PunimeDore"
                                className="flex items-center justify-between border-b border-gray-300 py-4 w-full px-4 text-gray-800 hover:bg-slate-900 hover:text-amber-500 transition-colors duration-300"
                            >
                                <h2 className="text-[17px] font-thin leading-loose">{get("custom")}</h2>
                                <ChevronRight className="w-5 h-5" />
                            </Link>

                            <Link
                                onClick={() => setopenmenu(false)}
                                href="/#Kontakto"
                                className="flex items-center justify-between border-b border-gray-300 py-4 w-full px-4 text-gray-800 hover:bg-slate-900 hover:text-amber-500 transition-colors duration-300"
                            >
                                <h2 className="text-[17px] font-thin leading-loose">{get("contact")}</h2>
                                <ChevronRight className="w-5 h-5" />
                            </Link>

                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
}