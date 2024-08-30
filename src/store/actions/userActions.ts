import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../types/user";
import apiInstance from "../../api/instances";

export const fetchUsers = createAsyncThunk("user/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await apiInstance.get<IUser[]>("/users");
    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      return thunkAPI.rejectWithValue(err.message);
    }

    return thunkAPI.rejectWithValue("Failed to load users");
  }
});
