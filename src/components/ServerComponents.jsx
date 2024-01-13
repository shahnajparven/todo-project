import React from "react";
import { TodoBtn } from "./Clients";

const TodoItem = ({ title, description, id ,completed}) => {
  return (
    <div className="serverComponent">
      <div>

      
      <h3>{title}</h3>
      <p>{description}</p>
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <TodoBtn id={id} completed={completed} />
      </div>
    </div>
  );
};

export default TodoItem;
