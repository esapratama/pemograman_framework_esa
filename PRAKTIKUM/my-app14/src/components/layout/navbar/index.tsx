import { signIn, signOut, useSession } from 'next-auth/react';
import syles from './navbar.module.css';

const Navbar = () => {
  const { data } = useSession();
  return (
    <div className={syles.navbar}>
      <div className="big"> 
        Navbar
      </div>
      {data ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </div>
  );
};

export default Navbar;