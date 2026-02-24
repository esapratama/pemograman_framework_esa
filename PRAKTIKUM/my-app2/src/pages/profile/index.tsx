import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <h3 className={styles.title}>Profil Mahasiswa</h3>

        <div className={styles.formGroup}>
          <p><strong>Nama:</strong> Esa Pratama Putri</p>
        </div>

        <div className={styles.formGroup}>
          <p><strong>NIM:</strong> 2341720061</p>
        </div>

        <div className={styles.formGroup}>
          <p><strong>Kelas:</strong> TI-3D</p>
        </div>

        <div className={styles.formGroup}>
          <p><strong>Program Studi:</strong> D4 Teknik Informatika</p>
        </div>

        <div className={styles.formGroup}>
          <p><strong>Jurusan:</strong> Teknologi Informasi</p>
        </div>

        <div className={styles.formGroup}>
          <p><strong>Kampus:</strong> Politeknik Negeri Malang</p>
        </div>

        <div className={styles.formGroup}>
          <p><strong>Semester:</strong> 6</p>
        </div>

        <div className={styles.formGroup}>
          <p><strong>Angkatan:</strong> 2023</p>
        </div>

        <Link href="/profile/edit">
          <button className={styles.button}>
            Edit Profile
          </button>
        </Link>
      </div>
    </div>
  );
}