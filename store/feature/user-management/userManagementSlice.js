"use client";
import apiInstance from "../../../src/config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (products, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await apiInstance.get("alltask");
      console.log(data.data,'action')
      return fulfillWithValue(data.data || data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

const initialState = {
  isLoading: false,
  products: [],
  error: null,
  isDeleted: false,
  message: "",
  success: false,
};

export const userManagementSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    // fetch data
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action.payload,'reducer')
      console.log(action.payload);
      state.isLoading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
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

export const { addUser } = userManagementSlice.actions;
export default userManagementSlice.reducer;
