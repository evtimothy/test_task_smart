import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserFilter, IUserState } from "../types/user";
import { fetchUsers } from "../actions/userActions";

const initialState: IUserState = {
  users: [],
  filters: { name: "", username: "", email: "", phone: "" },
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<IUserFilter>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { setFilters } = userSlice.actions;

export default userSlice.reducer;
