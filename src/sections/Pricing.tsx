import CheckIcon from '@/assets/check.svg'
import {twMerge} from "tailwind-merge";
import {pricingTiers} from "@/data/data";


export const Pricing = () => {
    return (
        <section className="py-24">
            <div className="container">
                <h2 className="section-title">Pricing</h2>
                <p className="section-description text-center max-w-[500px] mx-auto">
                    Free forever, upgrade for unlimited tasks, better security, and exclusive features.</p>
                <div className="flex flex-col md:flex-row justify-around pt-10 gap-4">

                    {pricingTiers.map(({title, monthlyPrice, buttonText, isPopular, isInverse, features}) => (
                        <div key={title}
                             className={twMerge("p-10 bg-slate-50/70 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14p_#EAEAEA]", isInverse ? 'border-black bg-black text-white' : '')}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className={twMerge("text-lg font-bold text-black/50", isInverse && ("text-white/90"))}>
                                    {title}
                                </h3>
                                {isPopular && (
                                    <div
                                        className="inline-flex text-sm px-4 py-1.5 rouFrameworknded-xl border border-white/20 rounded-lg">
                                        <span
                                            className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                                            Popular
                                        </span>
                                    </div>)}
                            </div>

                            <div className="flex items-baseline gap-1 mt-[30px]">
                                <span className="text-4xl font-bold tracking-tighter leading-none">
                                  ${monthlyPrice}
                                </span>
                                <span
                                    className={twMerge("tracking-tighter font-bold text-black/50", isPopular && ('text-white/50'))}>/month</span>
                            </div>
                            <button
                                className={twMerge("btn btn-primary w-full mt-[30px]", isPopular && ('bg-white text-black'))}>{buttonText}</button>
                            <ul className="flex flex-col gap-3 mt-8">
                                {features.map((feature, index) => (
                                    <li className="flex items-center gap-x-4 text-sm" key={index}>
                                        <CheckIcon className="h-6 w-6"/>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};
