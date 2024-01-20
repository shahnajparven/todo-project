"use client";
import React, { useState, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Context } from "../../components/Clients";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(Context);

  const router = useRouter();
  const navigate = () => {
    router.push("/");
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!data.success) {
        setUser(data.user);
      }

      console.log(data, "data");
    } catch (error) {}
  };
  // if (user._id) return redirect("/");

  return (
    //   <section>
    //   <form onSubmit={loginHandler}>
    //     <input
    //       onChange={(e) => setEmail(e.target.value)}
    //       value={email}
    //       type="email"
    //       placeholder="Enter Email"
    //     />
    //     <input
    //       onChange={(e) => setPassword(e.target.value)}
    //       value={password}
    //       type="password"
    //       placeholder="Enter Password"
    //     />
    //     <button type="submit">Login</button>

    //     <p>OR</p>
    //     <Link href={"/register"}>New User</Link>
    //   </form>
    // </section>
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
  );
};

export default Page;
