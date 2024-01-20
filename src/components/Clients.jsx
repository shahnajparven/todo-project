"use client";

import Link from "next/link";
import { useState, createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../store/feature/task-management/taskManagementSlice";
import toast from "react-hot-toast";

export const LogoutButton = () => {
  const logoutHandler = () => {
    alert("logout");
  };
  return(
  <Link href={"/login"} className="navItem">
    Login
  </Link>
  // return user.id ? (
  //   <button onClick={logoutHandler} NameName="button">
  //     Logout
  //   </button>
  // ) : (
  //   <Link href={"/login"} className="navItem">
  //     Login
  //   </Link>
   );
};

export const TodoBtn = ({ id, completed }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="checkboxs">
      <div>
        <label className="checkbokContainer">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div>
        <button onClick={deleteHandler} className="button">
          Delete
        </button>
      </div>
    </div>
  );
};
