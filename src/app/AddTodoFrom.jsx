"use client";
import React, { useState } from "react";
import { addTask } from "../../store/feature/task-management/taskManagementSlice";
import { useDispatch } from "react-redux";

const AddTodoFrom = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(addTask({ title, description }));
  };

  return (
    <div className="containerFrom">
      <div className="todoFrom">
        <form className="from" onSubmit={submitHandler}>
          <div>
            <div className="input">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="title"
                placeholder="Task Title"
              />
            </div>
            <div className="input">
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="description"
                placeholder="Task Description"
              />
            </div>
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
            <button
              style={{ background: "#191919", color: "#fff" }}
              className="button"
              type="submit"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodoFrom;
