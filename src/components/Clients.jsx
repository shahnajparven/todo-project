"use client";

import Link from "next/link";
import { createContext, useContext } from "react";

const Context = createContext({ user: {} });
export const ContextProvider = ({ children }) => {
  const [user, setUser] = [{}];

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const LogoutButton = () => {
  const logoutHandler = () => {
    alert("logout");
  };

  const { user } = useContext(Context);
  return user.id ? (
    <button onClick={logoutHandler} NameName="button">
      Logout
    </button>
  ) : (
    <Link href={"/login"} className="navItem">
      Login
    </Link>
  );
};

export const TodoBtn = ({ id, completed }) => {
  const deleteHandler = () => {
    alert("deleted");
  };
  return (
    <div className="checkboxs">
      <div>
      <label class="container">
        <input type="checkbox"  />
        <span class="checkmark"></span>
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
