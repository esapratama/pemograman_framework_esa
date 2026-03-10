import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduk";

const HalamanProduk = () => {
  const { query } = useRouter();

  const { data, error, isLoading } = useSWR(
    query.produk ? `/api/produk/${query.produk}` : null, 
    fetcher
  );
  
  return (
    <div>
      {/* Gunakan data?.data (dengan tanda tanya). 
        Artinya: "Ambil properti data JIKA variabel data sudah ada isinya".
      */}
      <DetailProduk products={isLoading ? null : data?.data} />
    </div>
  );
};

export default HalamanProduk;