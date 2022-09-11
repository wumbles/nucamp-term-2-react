import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return { ...state, setCurrentUser: action.payload }; //might need to fix this line if breaks
    },
  },
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser } = userSlice.actions;

export const selectCurrentUser = (state) => {
  return state.user.currentUser;
};
