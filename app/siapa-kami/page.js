import Image from "next/image"

export default function SiapaKami() {
    return (
        <>
            <div className="justify-center w-[50%] md:p-8 text-[16px] text-[#757575]">
                <p className="font-bold">Siapa Pendiri Creative Branding?</p>
                <br/>
                <p>Kartini Umbas</p>
                <br/>
                <p>Sarjana Teknologi Pangan  Institut Pertanian Bogor, mendalami ilmu manajemen di Prasetiya Mulya Business School. Karir profesionalnya selama hamper 15 tahun didedikasikan  pada perusahaan fragrance dan flavour terkemuka  sebelum memutuskan untuk bergabung bersama Frans mendirikan  PT. Creative Branding Indonesia.</p>
                <br/>
                <p>Frans A.M Nijnens</p>
                <br/>
                <p>Frans memiliki  pengalaman lebih dari 28 tahun di industri Flavour dan Fragrance khususnya  di Asia.Pada tahun 2001, Beliau kembali ke Eropa, dari mana Beliau mengarahkan  perusahaan-perusahaan yang memiliki  keterkaitan usaha  dengan PT. Creative Branding Indonesia.Disamping itu Beliau juga menawarkan keahlian dan jejaringnya  dalam rangka membantu pelanggan  memperluas area pemasaran produknya.  </p>
            </div>
            <div className="justify-center w-[50%] p-3 md:p-8">
                <Image src="/img/foto2.jpg" width={212} height={307} className="w-full h-auto mb-2" alt=""/>
                <Image src="/img/foto1.jpg" width={199} height={257} className="w-full h-auto" alt=""/>
            </div>
        </>
    )
}