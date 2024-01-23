"use client";
import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  reset,
} from "../../../store/feature/user-management/authSlice";

const Page = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const navigate = () => {
    router.push("/");
  };

  const { isLoading, isLoggedIn } = useSelector((state) => state.auth);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
   if (isLoggedIn) return redirect("/");

  return (
    <>
      {isLoading ? (
        <div>Loading.....</div>
      ) : (
        <section>
          <div className="login">
            <div onClick={navigate} className="closebtn">
              <CloseIcon fontSize="large" />
            </div>
            <form onSubmit={loginHandler} className="from">
              <div className="input">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="input">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter Your Password"
                />
              </div>

              <div
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div>
                  <button
                    style={{ background: "#191919", color: "#fff" }}
                    className="button"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                <div
                  style={{
                    padding: ".5rem",
                  }}
                >
                  or
                </div>
                <div>
                  <Link href={"/register"} className="registerbtn">
                    New User
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Page;
