import { useRouter } from "next/router";
import Navbar from "../navbar";

const disableNavbar = ['/auth/login', '/auth/register', '/404'];

const AppShell = ({ children }: { children: React.ReactNode }) => {
    const { pathname } = useRouter();

    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            <div className="container"> 
                {children}
            </div>
        </main>
    );
};

export default AppShell;