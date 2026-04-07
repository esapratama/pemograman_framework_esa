import styles from './navbar.module.css';
import { signIn, signOut, useSession } from "next-auth/react";
import Script from 'next/script'; // Import yang lebih standar untuk Next.js

const Navbar = () => {
  const { data }: any = useSession();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__brand}>
        MyApp
      </div>

      {/* Bagian Script untuk manipulasi DOM (sesuai gambar sebelumnya) */}
      <div className={styles.navbar__brand} id="title"></div>
      <Script id="title-script" strategy='lazyOnload'>
        {`document.getElementById('title').innerHTML = 'MyApp';`}
      </Script>

      <div className={styles.navbar__actions}>
        {data ? (
          <>
            <div className={styles.navbar__user}>
              Welcome, {data.user?.fullname || data.user?.name}
              {data.user?.image && (
                <img
                  src={data.user.image}
                  alt={data.user.fullname || "User Image"}
                  className={styles.navbar__user__image}
                />
              )}
            </div>
            <button
              className={`${styles.navbar__button} ${styles["navbar__button--danger"]}`}
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            className={`${styles.navbar__button} ${styles["navbar__button--primary"]}`}
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;