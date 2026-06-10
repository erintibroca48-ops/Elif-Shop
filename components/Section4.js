"use client";

import { MessageCircle, Phone, ChevronRight, MapPin } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Section4() {

    const { lang } = useLanguage();

    const text = {
        sq: {
            title: "Kontakto",
            slogan: "Çdo detaj ka rëndësi",
            desc: "Na kontaktoni dhe zbuloni koleksionin që sjell elegancë, finesë dhe shkëlqim në stilin tuaj.",
            whatsapp: "WhatsApp",
            whatsappDesc: "Na shkruani për porosi.",
            phone: "Telefono",
            phoneDesc: "Për porosi na kontaktoni në numrin tonë të telefonit.",
            locationTitle: "Lokacioni ynë",
            addressLabel: "ADRESA",
            address: "Rruga e Kavajes, Tiranë",
            addressDesc: "Na vizitoni në dyqanin tonë fizik në Rrugën e Kavajës, Tiranë.",
            nav: "Navigim",
            write: "Na shkruani",
            placeholder: "Shkruaj mesazhin...",
            send: "Dërgo në WhatsApp",
            copyright: "© Elif Shop. Të gjitha të drejtat e rezervuara.  Tirana, Albania."
        },

        en: {
            title: "Contact",
            slogan: "Every detail matters",
            desc: "Contact us and discover a collection that brings elegance, finesse and shine to your style.",
            whatsapp: "WhatsApp",
            whatsappDesc: "Message us for orders.",
            phone: "Phone",
            phoneDesc: "Contact us for orders via phone.",
            locationTitle: "Our Location",
            addressLabel: "ADDRESS",
            address: "Kavaja Street, Tirana",
            addressDesc: "Visit our physical store on Kavaja Street, Tirana.",
            nav: "Navigation",
            write: "Write to us",
            placeholder: "Write a message...",
            send: "Send on WhatsApp",
            copyright: "© Elif Shop. All rights reserved. Tirana, Albania."
        },

        it: {
            title: "Contatto",
            slogan: "Ogni dettaglio conta",
            desc: "Contattaci e scopri una collezione che porta eleganza, finezza e brillantezza nel tuo stile.",
            whatsapp: "WhatsApp",
            whatsappDesc: "Scrivici per ordini.",
            phone: "Telefono",
            phoneDesc: "Contattaci per ordini telefonici.",
            locationTitle: "La Nostra Posizione",
            addressLabel: "INDIRIZZO",
            address: "Via Kavaja, Tirana",
            addressDesc: "Visita il nostro negozio fisico in Via Kavaja, Tirana.",
            nav: "Navigazione",
            write: "Scrivici",
            placeholder: "Scrivi un messaggio...",
            send: "Invia su WhatsApp",
            copyright: "© Elif Shop. Tutti i diritti riservati. Tirana, Albania."
        }
    };

    const t = text[lang] || text.sq;

    const [message, setMessage] = useState("");
    const phone = "355693286179";

    const sendToWhatsApp = () => {
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div id="Kontakto"
            className="flex flex-col w-full h-auto bg-black/10 items-center justify-center border-t border-gray-400 gap-5 items-center text-center justify-center px-10 py-10">

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full h-full py-10 border-b border-gray-400">

                <div className=" flex flex-col text-gray-900 text-lg font-thin font-mono">

                    <h1 className="text-gray-900 text-lg font-light w-fit px-3 py-1 mb-7 md:mb-10 border border-gray-800 bg-black/10">
                        {t.title}
                    </h1>

                    <h2 className="text-6xl md:text-8xl font-serif font-light text-white tracking-widest text-left">
                        Elif Shop
                    </h2>

                    <p className="text-2xl md:text-4xl font-thin font-sans text-amber-500 text-left border-b border-amber-500 w-3/4 mb-5 md:mb-10">
                        {t.slogan}
                    </p>

                    <p className="text-[0.875rem] font-light font-mono text-black leading-relaxed text-left w-3/4 mb-3 md:mb-10">
                        {t.desc}
                    </p>

                    <a href="https://instagram.com/elif.silvershop1" target="_blank" rel="noopener noreferrer"
                        className=" rounded-sm bg-white/30 hover:bg-white/50 px-2 py-2 w-fit">
                        <img src="/Instagram.webp"
                            className="w-8 h-8 rounded-md" />
                    </a>
                </div>

                <div className="flex flex-col items-center justify-center text-center gap-5 py-5 md:py-10 w-full">

                    <a
                        href="https://wa.me/355693286179"
                        className="flex flex-col justify-between border-1 border-black bg-white/90 hover:bg-white/10 w-full h-auto gap-10 px-5 md:px-10 py-10">

                        <div className="flex items-center justify-between w-full">

                            <div className="flex items-center">
                                <MessageCircle className="bg-black px-3 py-3 text-white w-12 h-12" />
                                <h3 className="text-md font-mono font-normal text-gray-400 ml-3">
                                    +355693286179
                                </h3>
                            </div>

                            <ChevronRight className="bg-white border border-gray-500 rounded-full px-2 py-2 text-black w-8 h-8" />
                        </div>

                        <div className="flex flex-col items-left text-left justify-between w-full gap-2">
                            <h3 className="text-3xl font-serif font-medium text-black">
                                {t.whatsapp}
                            </h3>
                            <p className="text-sm font-mono text-gray-600 group-hover:text-white">
                                {t.whatsappDesc}
                            </p>
                        </div>
                    </a>

                    <div className="flex flex-col md:flex-col lg:flex-row gap-5 w-full">

                        <a
                            href="tel:+355693286179"
                            className="flex flex-col justify-between border-1 border-black bg-white/90 hover:bg-white/10 w-full h-auto gap-10 px-5 md:px-10 py-10">

                            <div className="flex items-center justify-between w-full">

                                <div className="flex items-center">
                                    <Phone className="bg-black px-3 py-3 text-white w-12 h-12" />
                                    <h3 className="text-md font-mono font-normal text-gray-400 ml-3">
                                        +355693286179
                                    </h3>
                                </div>

                                <ChevronRight className="bg-white border border-gray-500 rounded-full px-2 py-2 text-black w-8 h-8" />
                            </div>

                            <div className="flex flex-col items-left text-left justify-between w-full gap-2">
                                <h3 className="text-3xl font-serif font-medium text-black">
                                    {t.phone}
                                </h3>
                                <p className="text-sm font-mono text-gray-600 group-hover:text-white">
                                    {t.phoneDesc}
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://maps.app.goo.gl/cbK9LtsyhPp9wCFcA"
                            className="flex flex-col justify-between border-1 border-black bg-white/90 hover:bg-white/10 w-full h-auto gap-10 px-5 md:px-10 py-10">

                            <div className="flex items-center justify-between w-full">

                                <div className="flex items-center">
                                    <MapPin className="bg-black px-3 py-3 text-white w-12 h-12" />
                                    <h3 className="text-md font-mono font-normal text-gray-400 ml-3">
                                        {t.locationTitle}
                                    </h3>
                                </div>

                                <p className="bg-white border border-gray-500 rounded-full px-2 py-1 text-gray-500 text-[0.7rem] font-bold tracking-widest">
                                    {t.addressLabel}
                                </p>
                            </div>

                            <div className="flex flex-col items-left text-left justify-between w-full gap-2">
                                <h3 className="text-3xl font-serif font-medium text-black">
                                    {t.address}
                                </h3>
                                <p className="text-sm font-mono text-gray-600 group-hover:text-white">
                                    {t.addressDesc}
                                </p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full py-10 border-b border-gray-400 gap-10">

                <div className="flex flex-col gap-2 md:gap-4 w-full lg:w-1/3">
                    <div className="flex items-center">
                        <img src="/Elif-Shop.webp" className="w-12 h-12" alt="Elif Shop" />

                        <div className="flex flex-col ml-3">
                            <h3 className="text-2xl font-serif font-light text-gray-900">
                                Elif Shop
                            </h3>
                            <p className="text-sm font-mono text-gray-500">
                                Tirana, Albania
                            </p>
                        </div>
                    </div>

                    <a
                        href="https://instagram.com/elif.silvershop1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-white/70 p-2 w-fit hover:bg-white transition"
                    >
                        <img
                            src="/Instagram.webp"
                            className="w-5 h-5 rounded-md"
                            alt="Instagram"
                        />
                    </a>
                </div>

                <div className="flex flex-col items-start w-full lg:w-1/4">
                    <h3 className="text-lg font-serif font-light text-gray-900 mb-2">
                        {t.nav}
                    </h3>

                    <div className="text-sm font-mono text-gray-500 flex flex-col gap-1 items-start">
                        <a href="/#Porosit" className="hover:text-black transition">Home</a>
                        <a href="/#Produktet" className="hover:text-black transition">Produkte</a>
                        <a href="/#PunimeDore" className="hover:text-black transition">Personalizime</a>
                        <a href="/#Kontakto" className="hover:text-black transition">Kontakto</a>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full lg:max-w-md">

                    <h3 className="text-lg font-serif font-light text-gray-900 text-left">
                        {t.write}
                    </h3>

                    <input
                        type="text"
                        placeholder={t.placeholder}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border border-gray-300 p-3 rounded bg-white/90 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />

                    <button
                        onClick={sendToWhatsApp}
                        className="bg-black/70 text-white p-3 rounded hover:bg-black transition cursor-pointer"
                    >
                        {t.send}
                    </button>
                </div>

            </div>

            <p className="flex text-left text-xs md:text-sm font-mono text-gray-800 py-2">
                {t.copyright}
            </p>

        </div>
    )
}