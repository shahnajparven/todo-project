"use client";
import apiInstance from "../../../src/config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const addTask = createAsyncThunk(
  "task/addTask",
  async (task, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await apiInstance.post("newtask", task);
      return fulfillWithValue(data || data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);


export const fetchTask = createAsyncThunk(
  "task/fetchTask",
  async (task, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await apiInstance.get("mytask");
     
      return fulfillWithValue(data || data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);
export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (id, { rejectWithValue, fulfillWithValue }) => {
    console.log(id)
    try {
      const { data } = await apiInstance.delete(`task/${id}`);
      return fulfillWithValue(data || data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (id, { rejectWithValue, fulfillWithValue }) => {
    console.log(id)
    try {
      const { data } = await apiInstance.put(`task/${id}`);
      return fulfillWithValue(data || data.message);
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
  isCreated: false,
  isUpdated: false,
  message: "",
  success: false,
};

export const taskManagementSlice = createSlice({
  name: "task",
  initialState,

  extraReducers: (builder) => {

     // add task
     builder.addCase(addTask.pending, (state) => {
      state.isLoading = true;
      state.isCreated = false;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isCreated = true;
      state.message = action.payload.message;
      state.error = null;
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.isLoading = false;
      state.task = [];
      state.error = action.payload;
      state.isCreated = false;
    });

    // fetch data
    builder.addCase(fetchTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.task = action.payload.task;
      state.error = null;
    });
    builder.addCase(fetchTask.rejected, (state, action) => {
      state.isLoading = false;
      state.task = [];
      state.error = action.payload;
    });

      // delete task
      builder.addCase(deleteTask.pending, (state) => {
        state.isLoading = true;
        state.isDeleted=false;
      });
      builder.addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.isDeleted=true;
        state.error = null;
      });
      builder.addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isDeleted=false;
        state.task = [];
        state.error = action.payload;
      });
      // update task
      builder.addCase(updateTask.pending, (state) => {
        state.isLoading = true;
        state.isUpdated=false;
      });
      builder.addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.isUpdated=true;
        state.error = null;
      });
      builder.addCase(updateTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isUpdated=false;
        state.task = [];
        state.error = action.payload;
      });
  },
  reducers: {
    reset: () =>initialState,
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
});

export const { reset,clearError,clearMessage } = taskManagementSlice.actions;
export default taskManagementSlice.reducer;
