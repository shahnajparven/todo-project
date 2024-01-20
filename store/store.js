"use client";
import {configureStore} from "@reduxjs/toolkit";
import userManagementSlice from "./feature/user-management/userManagementSlice";
// import  customeReducers  from "./Reducers";

export const store= configureStore({
    reducer:{
        // test:customeReducers,
        products:userManagementSlice
    },
});
