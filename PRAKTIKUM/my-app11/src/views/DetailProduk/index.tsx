// import { ProductType } from "@/types/Product.type";
import { ProdukType } from "../../types/Produk.type";
import styles from "./detailProduk.module.scss";

const DetailProduk = ({ products }: { products: ProdukType }) => {

  if (!products) {
    return (
      <div className={styles.produkdetail}>
        <p>Sedang memuat data produk...</p>
      </div>
    );
  }

  return (
    <>
      <h1 className={styles.title}>Detail Produk</h1>
      <div className={styles.produkdetail}>
        <div className={styles.produkdetail__image}>
          <img src={products.image} alt={products.name} />
        </div>

        <div className={styles.produkdetail__info}>
          <h1 className={styles.produkdetail__name}>{products.name}</h1>
          <p className={styles.produkdetail__category}>{products.category}</p>
          <p className={styles.produkdetail__price}>
            Rp {products.price && products.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;