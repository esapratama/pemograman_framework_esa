import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>404</h1>

        <p className={styles.subtitle}>
          Halaman Tidak Ditemukan
        </p>

        <p className={styles.description}>
          Maaf, halaman yang Anda cari mungkin telah dihapus atau dipindahkan.
        </p>

        <img
          src="/page-not-found.png"
          alt="404"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Custom404;