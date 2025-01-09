// 1. import two things
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { regUser } from "./userService";

// get user from the localstorage

const isUser = JSON.parse(localStorage.getItem("myUser"));

// 2. define initial State

const initialState = {
  user: isUser ? isUser : null,
  userLoading: false,
  userMessage: "",
  userError: false,
  userSuccess: false,
};

// 5. call the service function

export const registerMyUser = createAsyncThunk(
  "register-user",
  async (data, thunkAPI) => {
    try {
      return await regUser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// 3. create slice / global state

export const myUserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userReset: (state) => {
      state.userLoading = false;
      state.userError = false;
      state.userSuccess = false;
      state.userMessage = "";
    },
  },
  // 6. handle the state
  extraReducers: (builder) => {
    builder
      .addCase(registerMyUser.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(registerMyUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userMessage = action.payload;
        state.userError = true;
      })
      .addCase(registerMyUser.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      });
  },
});

// 4. export it to register it and  make it global

export default myUserSlice.reducer;
export const { userReset } = myUserSlice.actions;
