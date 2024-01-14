"use client";
import React, { useState } from "react";

const AddTodoFrom = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="containerFrom">
      <div className="todoFrom">
        <from className="from">
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
                //   onClick={loginHandler}
              >
                Add Task
              </button>
           
          </div>
        </from>
      </div>
    </div>
  );
};

export default AddTodoFrom;
