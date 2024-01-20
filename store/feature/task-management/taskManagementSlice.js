"use client";
import apiInstance from "../../../src/config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTask = createAsyncThunk(
  "task/fetchTask",
  async (task, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await apiInstance.get("alltask");
     
      return fulfillWithValue(data.data || data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

const initialState = {
  isLoading: false,
  task: [],
  error: null,
  isDeleted: false,
  message: "",
  success: false,
};

export const taskManagementSlice = createSlice({
  name: "task",
  initialState,

  extraReducers: (builder) => {
    // fetch data
    builder.addCase(fetchTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.task = action.payload;
      state.error = null;
    });
    builder.addCase(fetchTask.rejected, (state, action) => {
      state.isLoading = false;
      state.task = [];
      state.error = action.payload;
    });
  },
  reducers: {
    reset: () => initialState,
    clearError: (state) => ({
      ...state,
      error: null,
    }),
  },
});

export const { addUser } = taskManagementSlice.actions;
export default taskManagementSlice.reducer;
