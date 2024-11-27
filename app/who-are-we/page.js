import Image from "next/image"

export default function WhoAreWe() {
    return (
        <>
            <div className="justify-center w-[50%] md:p-8 text-[16px] text-[#757575]">
                <p className="font-bold">Who are the Creative Branders?</p>
                <br/>
                <p>Creative Branding Indonesia was founded early 2005 by Kartini Umbas and Frans Nijnens as a company specialized in trading of specific ingredients, such as fragrances, flavours (essences) and raw materials for these ingredients. The company is the materialization of the founders’ passion for the flavour and fragrance industry after many years of expertise as professionals in the industry. Our knowledge of the business, nationally as well as internationally, supported by sound technological expertise, market understanding, an international network, the right commercial strategy and a reliable attitude, will provide the competitive advantage to our company. All of these aspects are presented to our customers for the sake of mutual benefits.</p>
                <br/>
                <p>We would be honored to be a partner to our valued customers, a partnership which is based on professionalism, cooperation and openness. Teamwork is the keyword, not only applied to our internal organization, but most importantly building a team with our customers.</p>
                <br/>
                <p>You will find most information on our product categories on this website, but you can reach us for further information via <a href="mailto:info@creativebrandingindonesia.com" className="text-[#AF0F48] underline">info@creativebrandingindonesia.com</a></p>
            </div>
            <div className="justify-center w-[50%] p-3 md:p-8 float-end">
                <Image src="/img/foto2.jpg" width={212} height={307} className="w-full h-auto mb-2" alt=""/>
                <Image src="/img/foto1.jpg" width={199} height={257} className="w-full h-auto" alt=""/>
            </div>
        </>
    )
}