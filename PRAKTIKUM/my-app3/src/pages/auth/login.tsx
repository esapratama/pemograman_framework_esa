import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const HalamanLogin = () => {
  const { push } = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlerLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email dan password wajib diisi!");
      return;
    }
    localStorage.setItem("isLogin", "true");
    
    // Navigasi ke halaman produk
    push("/produk");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Kotak login */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#333",
          }}
        >
          Login
        </h1>

        <form onSubmit={handlerLogin}>
          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{ display: "block", marginBottom: "6px", fontWeight: 600 }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#0070f3")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{ display: "block", marginBottom: "6px", fontWeight: 600 }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#0070f3")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>

          {/* Error */}
          {error && (
            <p style={{ color: "red", marginBottom: "20px", fontWeight: 500 }}>
              {error}
            </p>
          )}

          {/* Button Login */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              backgroundColor: "#0070f3",
              color: "white",
              fontWeight: 600,
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#005bb5")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#0070f3")
            }
          >
            Login
          </button>
        </form>

        {/* Link Register */}
        <p style={{ textAlign: "center", marginTop: "20px", color: "#555" }}>
          Belum punya akun?{" "}
          <Link
            href="/auth/register"
            style={{
              color: "#0070f3",
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HalamanLogin;