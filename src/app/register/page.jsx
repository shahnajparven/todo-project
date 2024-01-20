"use client";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { regUser } from "../../../store/feature/user-management/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const dispatch=useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const navigate = () => {
    router.push("/");
  };

  const { isLoading, isLoggedIn,message,status,user } = useSelector((state) => state.auth);
  console.log(user)
  useEffect(() => {
  
    if (message) {
      alert(message);
    }
})
  const registerHandler = () => {
    console.log({ email, name,password });
    dispatch(regUser({ email,name,password }))
    
  };
  return (
    <>
      <div className="login">
        <div onClick={navigate} className="closebtn">
          <CloseIcon fontSize="large" />
        </div>
        <from className="from">
          <div className="input">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="input">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email"
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
                onClick={registerHandler}
              >
                Sign Up
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
              <Link href={"/login"} className="registerbtn">
                Login
              </Link>
            </div>
          </div>
        </from>
      </div>
    </>
  );
};

export default Register;
