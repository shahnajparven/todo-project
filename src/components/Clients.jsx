"use client";

import Link from "next/link";
import { useState, createContext, useContext, useEffect } from "react";

//  export const Context = createContext({ user: {} });
// export const ContextProvider = ({ children }) => {
//   const [user, setUser] = [{}];

//   return (
//     <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
//   );
// };

export const Context = createContext({ user: {} });
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setUser(data.user);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
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
      <label className="checkbokContainer">
        <input type="checkbox"  />
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
