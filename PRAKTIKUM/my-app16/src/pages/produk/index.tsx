import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../../views/produk";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const Kategori = () => {
  const { push } = useRouter();
  
  // Menggunakan SWR untuk mengambil data
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  return (
    <div>
      <TampilanProduk produk={isLoading ? [] : (data?.data || [])} />
    </div>
  );
};

export default Kategori;