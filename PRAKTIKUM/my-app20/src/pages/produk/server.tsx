import TampilanProduk from "../../views/produk";
import { ProdukType } from "../../types/Produk.type";

const halamanProdukServer = (props: { produk: ProdukType[] }) => {
  const { produk } = props;
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk produk={produk} />
    </div>
  );
};

export default halamanProdukServer;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/`);
  const respone = await res.json();
  // console.log("Data produk yang diambil dari API:", respone);
  return {
    props: {
      produk: respone.data, 
    },
  };
}