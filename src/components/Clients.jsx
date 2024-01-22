"use client";

import Link from "next/link";
import { useState, createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask } from "../../store/feature/task-management/taskManagementSlice";
import { logoutUser } from "../../store/feature/user-management/authSlice";

export const LogoutButton = ({ isLoggedIn }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  return (
    <>
      {isLoggedIn ? (
        <button onClick={logoutHandler} className="logout-button">
          Logout
        </button>
      ) : (
        <Link href={"/login"} className="navItem">
          Login
        </Link>
      )}
    </>
  );
};

export const TodoBtn = ({ id, completed }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTask(id));
  };

  const updateHandler = async (id) => {
    
    dispatch(updateTask(id));
    // try {
    //   const res = await fetch(`/api/task/${id}`, {
    //     method: "PUT",
    //   });
    //   const data = await res.json();
    //   if (!data.success) return toast.error(data.message);
    //   toast.success(data.message);
    //   router.refresh();
    // } catch (error) {
    //   return toast.error(error);
    // }
  };
  return (
    <div className="checkboxs">
      <div>
        <label className="checkbokContainer">
          <input type="checkbox" checked={completed}  onChange={() => updateHandler(id)}/>
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
