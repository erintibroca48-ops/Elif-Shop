import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Section3() {

    const { lang } = useLanguage();

    const text = {
        sq: "Shiko Personalizimet",
        en: "View Customizations",
        it: "Vedi Personalizzazioni"
    };

    const t = text[lang] || text.sq;

    return (
        <div id="PunimeDore"
            className="flex flex-col w-full h-[600px] md:h-[700px] items-center text-center justify-center mt-20 scroll-mt-[10vh]">
            <Link
                href="/punime-dore"
                className="relative flex w-full h-full items-center justify-center overflow-hidden"
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-10 border-1 border-white z-10 pointer-events-none" />
                <p className="
                        absolute bottom-30 z-10
                        text-white text-2xl font-thin font-sans
                        border border-white px-6 py-2
                        hover:bg-white hover:text-black
                        transition-colors duration-300"
                >
                    {t}
                </p>
            </Link>
        </div>
    );
}