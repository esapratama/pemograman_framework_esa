import { useRouter } from "next/router";
import TampilanProduk from "../../views/produk";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const Kategori = ({ produk }: { produk?: any[] }) => {
  const { data, isLoading } = useSWR("/api/produk", fetcher);

  const dataProduk = produk || (isLoading ? [] : data?.data);

  return (
    <div>
      <div data-testid="title" style={{ display: 'none' }}>Daftar Produk</div>
      <TampilanProduk produk={dataProduk} />
    </div>
  );
};

export default Kategori;