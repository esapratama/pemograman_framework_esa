import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
};

const Kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, []);

  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        // console.log("Data produk:", responsedata.data);
        setProducts(responsedata.data);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      });
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      {products.map((products: ProductType) => (
        <div key={products.id}>
          <h2>{products.name}</h2>
          <p>Harga: {products.price}</p>
          <p>Ukuran: {products.size}</p>
        </div>
      ))}
    </div>
  );
};

export default Kategori;


// import ProdukView from "../views/produk/index";

// const ProdukPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold text-blue-600 mb-4">
//         Halaman Produk
//       </h1>

//       <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
//         <p className="text-gray-700">
//           Selamat datang di halaman produk 
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProdukPage;