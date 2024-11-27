import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-center lg:w-[78%]">
        <h1 className="text-center lg:p-5 text-[48px] font-[600] text-[#800B35]">Who are the Creative Branders?</h1>
        <div className="flex justify-center gap-5 w-auto mb-3 lg:mb-0">
          <Image src="/img/foto1.jpg" width={199} height={257} className="w-auto h-auto object-cover" alt=""/>
          <Image src="/img/foto2.jpg" width={212} height={307} className="w-auto h-auto object-cover" alt=""/>
        </div>
        <div className="text-[#757575] lg:p-5">
            <p>Creative Branding Indonesia was founded early 2005 by Kartini Umbas and Frans Nijnens as a company specialized in trading of specific ingredients, such as fragrances, flavours (essences) and raw materials for these ingredients.The company is the materialization of the founders’ passion for the flavour and fragrance industry after many years of expertise as professionals in the industry.Our knowledge of the business, nationally as well as internationally, supported by sound technological expertise, market understanding, an international network, the right commercial strategy and a reliable attitude, will provide the competitive advantage to our company. All of these aspects are presented to our customers for the sake of mutual benefits.</p>
            <br/>
            <p>We would be honored to be a partner to our valued customers, a partnership which is based on professionalism, cooperation and openness. Teamwork is the keyword, not only applied to our internal organization, but most importantly building a team with our customers. We officially opened our new facility in August 2016.</p>
            <br/>
            <p>You will find most information on our product categories on this website, but you can reach us for further information via <a href="mailto:info@creativebrandingindonesia.com" className="text-[#AF0F48] underline">info@creativebrandingindonesia.com</a></p>
        </div>
        {/* <!-- <div>
            <img src="/public/IMG_20151107_0949261.jpg" className="bg-covers" alt="">
        </div> --> */}
    </div>
  );
}
