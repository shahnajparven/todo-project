"use client";
import AddTaskFrom from "@/AddTaskFrom";
import TodoItem from "../components/ServerComponents";
import AddTodoFrom from "./AddTodoFrom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTask,
  reset,
} from "../../store/feature/task-management/taskManagementSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { loadUser } from "../../store/feature/user-management/authSlice";

export default function Home() {
  const dispatch = useDispatch();
  const {  isLoading, error, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    // if (isCreated) {
    //   // toast.success(message);
    //   dispatch({ type: "reset" });
    // }
    // if (isDeleted) {
    //   toast.success(message);
    //   dispatch({ type: "reset" });
    // }
    dispatch(loadUser());
  }, [dispatch, error, message]);

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
