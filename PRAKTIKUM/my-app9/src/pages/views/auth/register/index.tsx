import { useRouter } from "next/router";
import styles from "./register.module.scss";

const RegisterView = () => {
    const { push } = useRouter();

    const handleRegister = () => {
        // logic register disini
        push('/auth/login');
    };

    return (
        <div className={styles.register}>
            <h1 className={styles.title}>Halaman Register</h1>

            <div className={styles.formGroup}>
                <label>Nama</label>
                <input type="text" placeholder="Masukkan nama" />
            </div>

            <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" placeholder="Masukkan email" />
            </div>

            <div className={styles.formGroup}>
                <label>Password</label>
                <input type="password" placeholder="Masukkan password" />
            </div>

            <button className={styles.button} onClick={handleRegister}>
                Register
            </button>
        </div>
    );
};

export default RegisterView;