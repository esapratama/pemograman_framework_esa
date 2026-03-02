import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Halaman Tidak Ditemukan</h1>

      <p className={styles.description}>
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>

      <img
        src="/page-not-found.png"
        alt="404"
        className={styles.error__image}
      />
    </div>
  );
};

export default Custom404;