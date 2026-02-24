import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function EditProfile() {
  return (
    <div className={styles.container}>
      <h3>Edit Data Profile</h3>

      <form>
        <div className={styles.formGroup}>
          <label>Nama Lengkap</label>
          <input
            type="text"
            defaultValue="Esa Pratama Putri"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>NIM</label>
          <input
            type="text"
            defaultValue="2341720061"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Kelas</label>
          <input
            type="text"
            defaultValue="TI-3D"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Program Studi</label>
          <input
            type="text"
            defaultValue="D4 Teknik Informatika"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Jurusan</label>
          <input
            type="text"
            defaultValue="Teknologi Informasi"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Kampus</label>
          <input
            type="text"
            defaultValue="Politeknik Negeri Malang"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Semester</label>
          <input
            type="text"
            defaultValue="6"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Angkatan</label>
          <input
            type="text"
            defaultValue="2023"
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.button}>
          Simpan Perubahan
        </button>
      </form>

      <br />

      <Link href="/profile">
        <button className={styles.buttonSecondary}>
          Kembali ke Profile
        </button>
      </Link>
    </div>
  );
}