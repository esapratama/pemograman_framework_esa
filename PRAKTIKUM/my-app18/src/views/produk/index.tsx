import styles from "../../pages/produk/produk.module.scss";
import Link from "next/link";
import Image from "next/image";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const TampilanProduk = ({ produk = [] }: { produk: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>
        
        {produk && produk.length > 0 ? (
          <>
            
            {produk.map((item: ProductType) => (
              <Link
                href={`/produk/${item.id}`}
                key={item.id}
                className={styles.produk__content__item} 
                
              >
                <Image src={item.image} alt={item.name} width={200} height={200} />
                <div className={styles.produk__content__item__image}>
                  {/* <img src={item.image} alt={item.name} width={200} /> */}
                </div>
                <h4 className={styles.produk__content__item__name}>
                  {item.name}
                </h4>
                <p className={styles.produk__content__item__category}>
                  {item.category}
                </p>
                <p className={styles.produk__content__item__price}>
                  
                  Rp {item.price?.toLocaleString("id-ID") || "0"}
                </p>
              </Link>
            ))}
          </>
        ) : (
          
          <div className={styles.produk__content__skeleton}>
            <div className={styles.produk__content__skeleton__image}></div>
            <div className={styles.produk__content__skeleton__name}></div>
            <div className={styles.produk__content__skeleton__category}></div>
            <div className={styles.produk__content__skeleton__price}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;