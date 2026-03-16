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

// Fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses, dan akan mengambil data produk dari API sebelum merender halaman.
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const respone = await res.json();
  // console.log("Data produk yang diambil dari API:", respone);
  return {
    props: {
      produk: respone.data, // Pastikan untuk memberikan nilai default jika data tidak tersedia
    },
  };
}