/* eslint-disable react/jsx-key */
"use client";

import React, { useEffect } from "react";
import { TodoBtn } from "./Clients";
import { useDispatch, useSelector } from "react-redux";
// import { fetchTask, reset } from "../../store/feature/task-management/taskManagementSlice";
import toast from "react-hot-toast";
import {
  fetchTask,
  reset,
} from "../../store/feature/task-management/taskManagementSlice";

const TodoItem = () => {
  const dispatch = useDispatch();
  const { task, isLoading, error, message } = useSelector(
    (state) => state.task
  );
  useEffect(() => {
    if (message) {
      toast.success(message);
      // dispatch({ type: "clearMessage" });
      dispatch(reset());
    }
    if (error) {
      dispatch({ type: "clearError" });
    }
    dispatch(fetchTask());
  }, [dispatch, error, message]);
  return (
    <>
      {isLoading ? (
        <div>Loading.....</div>
      ) : (
        <div>
          {task?.map((item, id) => (
            <div key={item.id}>
              <div className="serverComponent">
                <div className="displayTask">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div style={{ paddingTop: "1rem" }}>
                    <TodoBtn id={item._id} completed={item.isCompleted} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TodoItem;
