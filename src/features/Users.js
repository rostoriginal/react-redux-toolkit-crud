import { createSlice } from "@reduxjs/toolkit";

import { UsersData as Users } from "../FakeData";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: Users,
  },
  reducers: {
    addUser: (state, action) => {
      state.value.unshift(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
    },
    updateUsername: (state, action) => {
      state.value.forEach((user) => {
        if(user.id === action.payload.id) {
          user.username = action.payload.username
        }
      })
    },
  },
});

export const { addUser, deleteUser, updateUsername } = usersSlice.actions;
export default usersSlice.reducer;
