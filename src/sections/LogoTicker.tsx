import acmeLogo from "@/assets/logo-acme.png"
import quantumLogo from "@/assets/logo-quantum.png"
import echoLogo from "@/assets/logo-echo.png"
import celestialLogo from "@/assets/logo-celestial.png"
import pulseLogo from "@/assets/logo-pulse.png"
import apexLogo from "@/assets/logo-apex.png"
import Image from "next/image"

export const LogoTicker = () => {
    const logos = [
        {
            src: "acmeLogo", alt: "Acme Logo"
        }, {
            src: "quantumLogo",
            alt: "quantum Logo"
        }, {
            src: "echoLogo",
            alt: "echo Logo"
        }, {
            src: "celestialLogo",
            alt: "Celestial Logo"
        }, {
            src: "celestialLogo",
            alt: "celestial Logo"
        }, {
            src: "pulseLogo",
            alt: "pulse Logo"
        },
    ]
    return (
        <section className="py-8 bg-white md:py-12">
            <div className="container">
                <div
                    className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <div className="flex gap-x-14 flex-none">
                        <Image src={quantumLogo} alt="quantum Logo" className="logo-ticker-image"/>
                        <Image src={echoLogo} alt="echo Logo" className="logo-ticker-image"/>
                        <Image src={celestialLogo} alt="celestial Logo" className="logo-ticker-image"/>
                        <Image src={pulseLogo} alt="pulse Logo" className="logo-ticker-image"/>
                        <Image src={apexLogo} alt="apex Logo" className="logo-ticker-image"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
