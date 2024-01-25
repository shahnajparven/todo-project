"use client";
import Link from "next/link";
import { LogoutButton } from "../components/Clients";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, reset } from "../../store/feature/user-management/authSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn, message, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      // dispatch(reset());
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" }); 
      // dispatch(reset());
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      {/* {isLoading ? (
        <div>Loading.....</div>
      ) : ( */}
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
            <LogoutButton isLoggedIn={isLoggedIn} />
          </div>
        </div>
      </div>
        {/* )}  */}
    </>
  );
};

export default Header;
