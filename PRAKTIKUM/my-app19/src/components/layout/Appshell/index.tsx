import { useRouter } from "next/router";
import { Roboto, Lato } from "next/font/google"; 
import dynamic from 'next/dynamic'; 

const Navbar = dynamic(() => import("../navbar"), {
  loading: () => <p>Loading...</p>, 
  ssr: false 
});

const disableNavbar = ['/auth/login', '/auth/register', '/404'];

type AppShellProps = {
  children: React.ReactNode;
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: '--font-roboto', 
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: '--font-lato',
});

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <main className={`${roboto.variable} ${lato.variable} ${roboto.className}`}>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;