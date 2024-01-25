"use client";
import TodoItem from "../components/ServerComponents";
import AddTodoFrom from "./AddTodoFrom";
import { useSelector } from "react-redux";

export default function Home() {
  const { isLoading } = useSelector((state) => state.auth);
  return (
    <>
      {isLoading ? (
        <div>Loading.....</div>
      ) : (
        <div className="homePage">
          <AddTodoFrom />
          <div style={{ paddingTop: "2rem" }}>
            <TodoItem />
          </div>
        </div>
      )}
    </>
  );
}
