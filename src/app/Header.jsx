'use client';
import Link from "next/link";
import { LogoutButton } from "../components/Clients";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../store/feature/user-management/authSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const {isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <div className="container" style={{ background: "#191919" }}>
      <div className="header">
        <div className="logo">ToDoApp</div>
        <article>
          <Link href={"/"} className="navItem">
            Home
          </Link>
          <Link href={"/about"} className="navItem">
            About
          </Link>
          <Link href={"/contact"} className="navItem">
            Contact
          </Link>
          <Link href={"/category"} className="navItem">
            Category
          </Link>
        </article>

        <div className="navItem">
          <LogoutButton isLoggedIn={isLoggedIn}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
