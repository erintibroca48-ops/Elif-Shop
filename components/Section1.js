"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Section1() {

    const { lang } = useLanguage();

    const t = {
        sq: [
            {
                image: "/img1.webp",
                title: "Parfume për elegancë që mbetet",
                description: "Porosit Parfume",
                name: "Parfume"
            },
            {
                image: "/img2.webp",
                title: "Çanta për stil modern çdo ditë",
                description: "Porosit Çanta",
                name: "Çanta"
            },
            {
                image: "/img3.webp",
                title: "Syze për pamje të sofistikuar",
                description: "Porosit Syze",
                name: "Syze"
            },
            {
                image: "/img4.webp",
                title: "Ora për luks në çdo moment",
                description: "Porosit Ora",
                name: "Ora"
            },
            {
                image: "/img5.webp",
                title: "Stoli për shkëlqim elegant",
                description: "Porosit Stoli",
                name: "Stoli"
            }
        ],
        en: [
            {
                image: "/img1.webp",
                title: "Perfumes for lasting elegance",
                description: "Order Perfumes",
                name: "Perfumes"
            },
            {
                image: "/img2.webp",
                title: "Bags for modern everyday style",
                description: "Order Bags",
                name: "Bags"
            },
            {
                image: "/img3.webp",
                title: "Glasses for a sophisticated look",
                description: "Order Glasses",
                name: "Glasses"
            },
            {
                image: "/img4.webp",
                title: "Watches for luxury in every moment",
                description: "Order Watches",
                name: "Watches"
            },
            {
                image: "/img5.webp",
                title: "Jewelry for elegant shine",
                description: "Order Jewelry",
                name: "Jewelry"
            }
        ],
        it: [
            {
                image: "/img1.webp",
                title: "Profumi per eleganza duratura",
                description: "Ordina Profumi",
                name: "Profumi"
            },
            {
                image: "/img2.webp",
                title: "Borse per uno stile moderno ogni giorno",
                description: "Ordina Borse",
                name: "Borse"
            },
            {
                image: "/img3.webp",
                title: "Occhiali per un look sofisticato",
                description: "Ordina Occhiali",
                name: "Occhiali"
            },
            {
                image: "/img4.webp",
                title: "Orologi per lusso in ogni momento",
                description: "Ordina Orologi",
                name: "Orologi"
            },
            {
                image: "/img5.webp",
                title: "Gioielli per brillantezza elegante",
                description: "Ordina Gioielli",
                name: "Gioielli"
            }
        ]
    };

    const slides = t[lang] || t.sq;

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div id="Porosit"
            className="w-full h-[90vh] mt-14 bg-black relative scroll-mt-[40vh]">

            <img
                src={slides[index].image}
                alt="slider"
                className="w-full h-full object-cover transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute inset-0 flex items-center justify-center">

                <div className="flex flex-col items-center text-center text-white gap-6 bg-gradient-to-t from-transparent to-black/80 px-8 py-3 rounde leading-loose">

                    <h3 className="text-3xl md:text-6xl font-light font-serif tracking-wide">
                        {slides[index].title}
                    </h3>

                    <Link href={`https://wa.me/355693286179?text=Përshëndetje%2C%20isha%20i%20interesuar%20për%20${slides[index].name}.`} className="text-gray-100 text-md tracking-wide md:text-xl font-extralight font-sans border-1 border-gray-100 px-6 py-2 hover:bg-gray-100 hover:text-black transition-colors duration-300 ">
                        {slides[index].description}
                    </Link>

                </div>

            </div>

        </div>
    );
}