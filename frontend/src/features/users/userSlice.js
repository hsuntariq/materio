// 1.always import 2 things first
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 2. define your initial state

const initialState = {
  user: null,
  userLoading: false,
  userSuccess: false,
  userError: false,
  userMessage: "",
};

// 3. create your slice / global state

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

// 4.export for registration of reducer to make it global
export default userSlice.reducer;
