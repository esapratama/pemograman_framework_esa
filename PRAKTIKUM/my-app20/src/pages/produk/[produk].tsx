import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduk";
import { ProdukType } from "@/types/Produk.type";

const HalamanProduk = ({ produk }: { produk: ProdukType }) => {
  // (digunakan client-side rendering)
  // const Router = useRouter();
  
  return (
    <div>
      <DetailProduk produk={produk} />
    </div>
  );
};

export default HalamanProduk;

// (digunakan server-side rendering)
export async function getServerSideProps({ params }: { params: { produk: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params?.produk}`);
  const respone = await res.json();
  // console.log("Data produk yang diambil dari API:", respone);
  return {
    props: {
      produk: respone.data, // Pastikan untuk memberikan nilai default jika data tidak tersedia
    },
  };
}

// (digunakan static-site generation)
// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3000/api/produk");
//   const respone = await res.json();

//   const paths = respone.data.map((produk: ProdukType) => ({
//     params: { produk: produk.id }
//   }));

//   console.log("Paths yang dihasilkan untuk produk:", paths); // Debugging: Tampilkan paths yang dihasilkan
//   return {
//     paths,
//     fallback: false
//   };
// }

// export async function getStaticProps({ params }: { params: { produk: string } }) {
//   const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
//   const respone: { data: ProdukType } = await res.json();

//   // console.log("Data produk yang diambil dari API:", respone);
//   return {
//     props: {
//       produk: respone.data,
//     },
//   };
// }