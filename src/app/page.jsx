"use client";
import AddTaskFrom from "@/AddTaskFrom";
import TodoItem from "../components/ServerComponents";
import AddTodoFrom from "./AddTodoFrom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTask, reset } from "../../store/feature/task-management/taskManagementSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const dispatch = useDispatch();
  const { task, isLoading, error, message } = useSelector(
    (state) => state.task
  );
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(reset());
    }
    if (error) {
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
    dispatch(fetchTask());
  }, [dispatch, error, message ]);


  return (
    <>
      {isLoading ? (
        <div>Loading.....</div>
      ) : (
        <div className="homePage">
          <AddTodoFrom />
          <div style={{ paddingTop: "2rem" }}>
            {task?.map((item, id) => (
              <div key={item.id}>
                <TodoItem
                  title={item.title}
                  description={item.description}
                  id={item._id}
                  completed={item.isCompleted}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
