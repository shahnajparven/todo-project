/* eslint-disable react/jsx-key */
"use client";

import React, { useEffect } from "react";
import { TodoBtn } from "./Clients";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/feature/user-management/userManagementSlice";

const TodoItem = ({ title, description, id, completed }) => {
  const dispatch = useDispatch();

  const { products, isLoading } = useSelector((state) => state.products);
  console.log(products, "products");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="serverComponent">
      <div>
        {products?.map((item, id) => (
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
        {/* <h3>{title}</h3>
        <p>{description}</p> */}
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <TodoBtn id={id} completed={completed} />
      </div>
    </div>
  );
};

export default TodoItem;
