import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { filterItems } from "../../utils/filterItems";

const selectUsers = (state: RootState) => state.user.users;
const selectFilters = (state: RootState) => state.user.filters;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilters],
  (users, filters) => filterItems(users, filters)
);
