import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image";

export const ProductShowcase = () => {
    return (
        <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
            <div className="container text-center">
                <div className="max-w-[540px] mx-auto">
                    <div className="flex flex-col items-center justify-center">
                        <p className="section-title">Boost your productivity</p>
                        <h2 className="h2-custom py-2 mt-5">
                            A more effective way to track progress</h2>
                        <p className="section-description mt-3">
                            Effortlessly turn your idea into a fully functional, responsive, SaaS website in just
                            minutes with this template.</p>
                    </div>
                </div>
                <div className="relative">
                    <Image src={productImage} alt="Product Image" className="mt-10"/>
                    <Image src={pyramidImage} alt="Pyramid Image"
                           className="absolute hidden md:block -top-32 -right-36 h-72 w-auto"
                    />
                    <Image src={tubeImage} alt="Pyramid Image 2"
                           className="absolute hidden md:block bottom-10 -left-48  h-72 w-auto"/>
                </div>
            </div>
        </section>
    );
};
