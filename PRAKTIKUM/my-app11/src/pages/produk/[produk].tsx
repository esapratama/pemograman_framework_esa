// import fetcher from "@/utils/swr/fetcher";
// import { useRouter } from "next/router";
// import useSWR from "swr";
// import DetailProduk from "../../views/DetailProduk";

// const HalamanProduk = () => {
//   const { query } = useRouter();

//   const { data, error, isLoading } = useSWR(
//     query.produk ? `/api/produk/${query.produk}` : null, 
//     fetcher
//   );
  
//   return (
//     <div>
//       <DetailProduk produk={isLoading ? null : data?.data} />
//     </div>
//   );
// };

// export default HalamanProduk;

import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduk";
import { ProdukType } from "@/types/Produk.type";

const HalamanProduk = ({ produk }: { produk: ProdukType }) => {
  // (digunakan client-side rendering)
  // const Router = useRouter();
  // console.log(Router);
  // const { query } = useRouter();
  // const { data, error, isLoading } = useSWR(
  //   `/api/produk/${query.produk}`,
  //   fetcher,
  // );

  // return (
  //   <div>
  //     <DetailProduk produk={isLoading ? [] : data.data} />
  //   </div>
  // )

  return (
    <div>
      <DetailProduk produk={produk} />
    </div>
  );
};

export default HalamanProduk;

// Fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses, dan akan mengambil data produk dari API sebelum merender halaman.
// (digunakan server-side rendering)
export async function getServerSideProps({ params }: { params: { produk: string } }) {
  const res = await fetch(`http://localhost:3000/api/produk/${params.produk}`);
  const respone = await res.json();

  // console.log("Data produk yang diambil dari API:", respone);
  return {
    props: {
      produk: respone.data, // Pastikan untuk memberikan nilai default jika data tidak tersedia
    },
  };
}