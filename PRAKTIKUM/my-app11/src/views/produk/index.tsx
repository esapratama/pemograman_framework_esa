// import styles from "../../pages/produk/produk.module.scss";
// import Link from "next/link";

// type ProductType = {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   category: string;
// };

// const TampilanProduk = ({ produk }: { produk: ProductType[] }) => {
//   return (
//     <div className={styles.produk}>
//       <h1 className={styles.produk__title}>Daftar Produk</h1>
//       <div className={styles.produk__content}>
//         {produk.length > 0 ? (
//           <>
//             {produk.map((produk: ProductType) => (
//               <Link
//                 href={`/produk/${produk.id}`}
//                 key={produk.id}
//                 className={styles.produk__content__item}
//               >
//                 <div className={styles.produk__content__item__image}>
//                   <img src={produk.image} alt={produk.name} width={200} />
//                 </div>
//                 <h4 className={styles.produk__content__item__name}>
//                   {produk.name}
//                 </h4>
//                 <p className={styles.produk__content__item__category}>
//                   {produk.category}
//                 </p>
//                 <p className={styles.produk__content__item__price}>
//                   Rp {produk.price.toLocaleString("id-ID")}
//                 </p>
//               </Link>
//             ))}
//           </>
//         ) : (
//           <div className={styles.produk__content__skeleton}>
//             <div className={styles.produk__content__skeleton__image}></div>
//             <div className={styles.produk__content__skeleton__name}></div>
//             <div className={styles.produk__content__skeleton__category}></div>
//             <div className={styles.produk__content__skeleton__price}></div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TampilanProduk;

import styles from "../../pages/produk/produk.module.scss";
import Link from "next/link";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

// Tambahkan = [] untuk jaga-jaga jika props "produk" tidak terkirim atau kosong
const TampilanProduk = ({ produk = [] }: { produk: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>
        {/* Gunakan optional chaining (?.) untuk memastikan variabel ada sebelum cek length */}
        {produk && produk.length > 0 ? (
          <>
            {/* Ganti nama variabel di dalam map menjadi 'item' agar tidak bentrok dengan 'produk' */}
            {produk.map((item: ProductType) => (
              <Link
                href={`/produk/${item.id}`}
                key={item.id}
                className={styles.produk__content__item}
              >
                <div className={styles.produk__content__item__image}>
                  <img src={item.image} alt={item.name} width={200} />
                </div>
                <h4 className={styles.produk__content__item__name}>
                  {item.name}
                </h4>
                <p className={styles.produk__content__item__category}>
                  {item.category}
                </p>
                <p className={styles.produk__content__item__price}>
                  {/* Tambahkan safety check ?. agar tidak error jika price kosong */}
                  Rp {item.price?.toLocaleString("id-ID") || "0"}
                </p>
              </Link>
            ))}
          </>
        ) : (
          /* Tampilan Skeleton saat data sedang dimuat atau kosong */
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