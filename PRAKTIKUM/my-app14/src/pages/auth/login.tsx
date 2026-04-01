import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react"; // 1. Import signIn dari next-auth
import styles from '../../views/auth/login/login.module.scss';

const TampilanLogin = () => {
    const { push } = useRouter();

    const handleLogin = async () => {
        const res = await signIn("credentials", {
            redirect: false, 
            email: "user@example.com", 
            callbackUrl: "/produk",
        });

        if (res?.ok) {
            push('/produk');
        } else {
            console.error("Login gagal:", res?.error);
        }
    }

    return (
        <div className={styles.login}>
            <h1 className="text-3xl font-bold text-blue-600">Halaman Login</h1>
            
            <button onClick={handleLogin}>Login</button> <br />
            
            <h1 style={{color:"red", border:"1px solid red", borderRadius:"5px", padding: "5px"}}>
                Belum punya akun?
            </h1>
            <Link href={"/auth/register"}>Ke Halaman Register</Link>
        </div>
    );
}

export default TampilanLogin;