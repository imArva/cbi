import Gallery from "./gallery"

export default function Fragrances() {
    return (
        <>
            <div className="justify-center lg:w-[78%]">
                <h1 className="text-center pt-5 text-red-700 font-bold text-[48px]">Fragrances</h1>
                <div className="justify-center px-2 pt-5 md:p-8 text-[16px] text-[#757575]">
                    <p>
                        Fragrances are mixtures of odoriferous ingredients, mostly nature-identical or synthetic, although many natural oils , such as essential oils, absolutes and concretes are also found in fragrance formulations.
                    </p>
                    <br/>
                    <p>
                        Fragrances exist in many odour types, from simple single notes, such as floral, fruity or woody to more complex compositions. The product form is mostly liquid; fragrances in powder form can be obtained via additional processes, which are complex and usually increase the costs. Fragrances can be applied to every product that requires a strong and pleasant odour.
                    </p>
                    <br/>
                    <p>
                        In order to ensure human and environmental safety, all fragrance ingredients are subject to global regulations and norms, such as IFRA (International Fragrance Association).
                    </p>
                    <br/>
                    <p>
                        Our fragrances are created and manufactured abroad, guided by our Indonesian consumer insights and market knowledge.
                    </p>
                </div>
                <div className="p-5 md:px-10">
                    <Gallery/>
                </div>
                <div className="justify-center px-2 md:p-8 text-[16px] text-[#757575]">
                    <p>
                        We keep many fragrances as inventory in Indonesia.
                    </p>
                </div>
            </div>
        </>
    )
}