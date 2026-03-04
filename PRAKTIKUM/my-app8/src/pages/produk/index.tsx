import { useEffect, useState } from "react";
import TampilanProduk from "../views/produk";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function Produk() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      });
  }, []);

  return (
    <div>
      <TampilanProduk products={products} />
    </div>
  );
}