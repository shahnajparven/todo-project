/* eslint-disable react/jsx-key */
"use client";

import React, { useEffect } from "react";
import { TodoBtn } from "./Clients";
import { useDispatch, useSelector } from "react-redux";
import { fetchTask } from "../../store/feature/task-management/taskManagementSlice";

const TodoItem = ({ title, description, id, completed }) => {
  const dispatch = useDispatch();

  const { task, isLoading } = useSelector((state) => state.task);
  console.log(task, "products");

  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  return (
    <div className="serverComponent">
      <div>
        {task?.map((item, id) => (
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
