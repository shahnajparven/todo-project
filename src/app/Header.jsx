import Link from "next/link";
import {  LogoutButton } from "../components/Clients";

const Header = () => {
  return (
    <div className="container" style={{background:'#191919'}}>
      <div className="header" >
        <div className="logo">ToDoApp</div>
        <article>
          <Link href={"/"} className="navItem">Home</Link>
          <Link href={"/about"} className="navItem">About</Link>
          <Link href={"/contact"} className="navItem">Contact</Link>
          <Link href={"/category"} className="navItem">Category</Link>
        </article>
        <div className="navItem">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
