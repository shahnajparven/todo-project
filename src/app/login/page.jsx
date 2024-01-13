"use client";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const router = useRouter();
    const navigate = () => {
      router.push('/');
    };
    const loginHandler = () => {
      console.log({ email, password });
    };
  return (
    <>
      <div className="login">
        <div onClick={navigate} className="closebtn">
          <CloseIcon fontSize="large"/>
        </div>
        <from className="from">
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
              type="email"
              placeholder="Enter your password"
            />
          </div>

          <div style={{ padding: "1.5rem",display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center", }}>
            <div>
            <button
              style={{ background: "#191919", color: "#fff" }}
              className="button"
              type="submit"
              onClick={loginHandler}
            >
              Submit
            </button>
            </div>
            <div
              style={{
                padding: ".5rem"}}
            >
              or
            </div>
            <div>
            <Link
            href={'/register'}
              className="registerbtn"
            >
              New User
            </Link>
            </div>
          </div>
        </from>
      </div>
    </>
  );
};

export default Login;