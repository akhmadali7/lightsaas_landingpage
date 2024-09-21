import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logosaas.png'
import Image from "next/image"
import MenuIcon from "@/assets/menu.svg"
import Link from "next/link";

import {navLinks, adsHeader} from "@/data/data";


export const Header = () => {
    return (
        <header className="sticky top-0 z-20">
            {adsHeader.isShow && (
                <div className="flex items-center justify-center py-3 bg-black text-white text-sm gap-2">
                    <p className="hidden md:block text-white/60">Streamline your workflow & boost your productivity.</p>
                    <div className="inline-flex gap-1 items-center">
                        <p>Get started for free!</p>
                        <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
                    </div>
                </div>
            )}
            <div className="py-3 md:py-5 backdrop-blur-xl">
                <div className="container flex justify-between items-center">
                    <Link href="/"><Image src={Logo} alt="Logo" className="w-8 md:w-10"/></Link>
                    <MenuIcon className="h-5 w-5 md:hidden "/>
                    <nav className="hidden md:flex gap-1 text-black/60 justify-center items-center font-semibold ">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.a}
                               className="hover:bg-white/40 py-2 px-3 rounded-lg hover:text-black/90 ">{link.name}</a>
                        ))}
                        <div className="pl-2">
                            <button className="btn btn-primary text-white/90">
                                Get for free
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
