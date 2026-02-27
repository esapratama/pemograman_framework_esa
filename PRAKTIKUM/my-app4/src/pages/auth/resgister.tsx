import Link from "next/link";

const HalamanRegister = () => {
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
      {/* Kotak register */}
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
          Register
        </h1>

        <form>
          {/* Nama */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{ display: "block", marginBottom: "6px", fontWeight: 600 }}
            >
              Nama
            </label>
            <input
              type="text"
              placeholder="Masukkan nama"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#28a745")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{ display: "block", marginBottom: "6px", fontWeight: 600 }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Masukkan email"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#28a745")}
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
              placeholder="Masukkan password"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#28a745")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>

          {/* Tombol Register */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              backgroundColor: "#28a745",
              color: "white",
              fontWeight: 600,
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#218838")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#28a745")
            }
          >
            Register
          </button>

          {/* Link Login */}
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#555",
              fontSize: "14px",
            }}
          >
            Sudah punya akun?{" "}
            <Link
              href="/auth/login"
              style={{
                color: "#28a745",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Ke Halaman Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default HalamanRegister;