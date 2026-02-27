import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Produk = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
      router.push("/auth/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Produk User Page</h1>
      <p>Selamat datang, kamu sudah login 🎉</p>
    </div>
  );
};

export default Produk;