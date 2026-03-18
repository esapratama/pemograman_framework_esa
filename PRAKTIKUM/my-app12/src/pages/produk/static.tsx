// import TampilanProduk from "../../views/produk";
// import { ProdukType } from "../../types/Produk.type";

// const halamanProdukStatic = (props: { produk: ProdukType[] }) => {
//   const { produk } = props;
//   return (
//     <div>
//       <h1>Halaman Produk Static</h1>
//       <TampilanProduk produk={produk} />
//     </div>
//   );
// };

// export default halamanProdukStatic;

// export async function getStaticProps() {
//   const res = await fetch('http://127.0.0.1:3000/api/produk');
//   // const response: ProductType[] = await res.json();
//   const response: { data: ProdukType[] } = await res.json();

//   // console.log("Data produk yang diambil dari API:", response);
//   return {
//     props: {
//       produk: response.data,
//     }
//   }
// }

import TampilanProduk from "../../views/produk";
import { ProdukType } from "../../types/Produk.type";

const halamanProdukStatic = (props: { produk: ProdukType[] }) => {
  const { produk } = props;
  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk produk={produk} />
    </div>
  );
};

export default halamanProdukStatic;

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3000/api/produk");
  // const response: ProductType[] = await res.json();
  const response: { data: ProdukType[] } = await res.json();

  // console.log("Data produk yang diambil dari API:", response);
  return {
    props: {
      produk: response.data,
    },
    revalidate: 10, // Revalidate data setiap 10 detik
  };
}