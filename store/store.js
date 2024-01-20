"use client";
import {configureStore} from "@reduxjs/toolkit";
import taskManagementSlice from "./feature/task-management/taskManagementSlice";
import authSlice from "./feature/user-management/authSlice";
// import  customeReducers  from "./Reducers";

export const store= configureStore({
    reducer:{
         auth:authSlice,
        task:taskManagementSlice
    },
});
