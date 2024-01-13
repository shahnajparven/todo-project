"use client";
import React, { useState } from "react";

const From = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="container">
      <div className="todoFrom">
        <from className="from">
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
                //   onClick={loginHandler}
              >
                Add Task
              </button>
            </div>
          </div>
        </from>
      </div>
    </div>
  );
};

export default From;
