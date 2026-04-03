import Link from "next/link";
import style from "../../auth/register/register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true); // Menambahkan isLoading true saat submit dimulai
    setError("");
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const fullname = formData.get("fullname") as string;
    const password = formData.get("password") as string;

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, fullname, password }),
    });

    if (response.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(
        response.status === 400 ? "User already exists" : "An error occurred"
      );
    }
  };

  return (
    <div className={style.register}>
      <h1 className={style.register__title}>Halaman Register</h1>
      <div className={style.register__form}>
        <form onSubmit={handleSubmit}>
          <div className={style.register__form__item}>
            <label htmlFor="email" className={style.register__form__item__label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={style.register__form__item__input}
              required
            />
          </div>
          <div className={style.register__form__item}>
            <label htmlFor="fullname" className={style.register__form__item__label}>
              Fullname
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Fullname"
              className={style.register__form__item__input}
              required
            />
          </div>
          <div className={style.register__form__item}>
            <label htmlFor="password" className={style.register__form__item__label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className={style.register__form__item__input}
              required
            />
          </div>
          <button
            type="submit"
            className={style.register__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        <br />
        <p className={style.register__form__item__text}>
          Sudah punya akun? <Link href="/auth/login">Ke Halaman Login</Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanRegister;

// import Link from "next/link";
// import style from "../../auth/register/register.module.scss";

// const TampilanRegister = () => {
//   return (
//     <div className={style.register}>
//       <h1 className={style.register__title}>Halaman Register</h1>
//       <div className={style.register__form}>
//         <form action="">
//           <div className={style.register__form__item}>
//             <label
//               htmlFor="email"
//               className={style.register__form__item__label}
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Email"
//               className={style.register__form__item__input}
//             />
//           </div>

//           <div className={style.register__form__item}>
//             <label
//               htmlFor="Fullname"
//               className={style.register__form__item__label}
//             >
//               Fullname
//             </label>
//             <input
//               type="text"
//               id="Fullname"
//               name="Fullname"
//               placeholder="Fullname"
//               className={style.register__form__item__input}
//             />
//           </div>

//           <div className={style.register__form__item}>
//             <label
//               htmlFor="Password"
//               className={style.register__form__item__label}
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="Password"
//               name="Password"
//               placeholder="Password"
//               className={style.register__form__item__input}
//             />
//           </div>

//           <button type="submit" className={style.register__form__item__button}>
//             Register
//           </button>
//         </form>
//         <br />
//         <p className={style.register__form__item__text}>
//           Sudah punya akun? <Link href="/auth/login">Ke Halaman Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TampilanRegister;