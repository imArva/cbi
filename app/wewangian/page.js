import Gallery from "./gallery"

export default function Wewangian() {
    return (
        <>
            <div className="justify-center lg:w-[78%]">
                <h1 className="text-center pt-5 text-red-700 font-bold text-[48px]">Wewangian</h1>
                <div className="justify-center p-8 text-[16px] text-[#757575]">
                    <p>
                        Wewangian adalah campuran dari berbagai bahan baku yang memiliki wangi  . Pada umumnya bahan baku  tersebut  bersifat  “nature-identic” atau sintetik. Walaupun demikian ada juga  yang berasal dari  alam seperti  minyak esensial, absolute maupun konsentrat.
                    </p>
                    <br/>
                    <p>
                        Berjenis-jenis type wewangian, mulai  dari yang sederhana , seperti wangi-wangi tunggal dari  bunga-bungaan,  buah-buahan atau kayu-kayuan hingga yang kompleks .  Fragrance umumnya berbentuk  cair. Bentuk powder dapat diperoleh melalui proses yang cukup kompleks dan biaya produksi yang lebih tinggi. Fragrance  digunakan dalam  berbagai produk yang memerlukan aroma/wangi  yang  menyenangkan dan mudah tercium.
                    </p>
                    <br/>
                    <p>
                        Untuk menjaga  keselamatan manusia dan keamanan lingkungan semua bahan baku fragrance harus memenuhi regulasi dan peraturan yang ditentukan oleh lembaga internasional  seperti IFRA ( International Fragrance Association) 
                    </p>
                </div>
                <div className="px-10">
                    <Gallery/>
                </div>
            </div>
        </>
    )
}