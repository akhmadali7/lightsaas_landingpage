import {Header} from "@/sections/Header";
import {Hero} from "@/sections/Hero";
import {LogoTicker} from "@/sections/LogoTicker";
import {CallToAction} from "@/sections/CallToAction";
import {ProductShowcase} from "@/sections/ProductShowcase";
import {Pricing} from "@/sections/Pricing";


export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <LogoTicker/>
            <ProductShowcase/>
            <Pricing/>
            {/*<CallToAction/>*/}
        </>
    )

};