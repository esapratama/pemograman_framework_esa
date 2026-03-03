import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

const Kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProductData = () => {
    setIsLoading(true);
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      
      {/* Tombol Refresh Data */}
      <button 
        onClick={getProductData} 
        disabled={isLoading}
        style={{ marginBottom: "20px", padding: "10px", cursor: "pointer" }}
      >
        {isLoading ? "Sedang Memperbarui..." : "Refresh Data"}
      </button>

      {products.length > 0 ? (
        products.map((product: ProductType) => (
          <div key={product.id} style={{ borderBottom: "1px solid #ddd", marginBottom: "10px" }}>
            <h2>{product.name}</h2>
            <p>Harga: {product.price}</p>
            <p>Ukuran: {product.size}</p>
            <p>Kategori: {product.category}</p>
          </div>
        ))
      ) : (
        <p>{isLoading ? "Memuat data..." : "Data kosong."}</p>
      )}
    </div>
  );
};

export default Kategori;