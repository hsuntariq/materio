import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProducts, getProducts } from "./productService";

// define initial State

let initialState = {
  products: [],
  productLoading: false,
  productError: false,
  productSuccess: false,
  productMessage: "",
};

// call the service funvction

export const addProductData = createAsyncThunk(
  "add-product",
  async (productData, thunkAPI) => {
    try {
      let token = thunkAPI.getState().auth.user.token;

      return await addProducts(productData, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const getProductData = createAsyncThunk(
  "get-products",
  async (_, thunkAPI) => {
    try {
      return await getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// create Slice

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productReset: (state) => {
      state.productError = false;
      state.productSuccess = false;
      state.productLoading = false;
      state.productMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductData.pending, (state, action) => {
        state.productLoading = true;
      })
      .addCase(addProductData.rejected, (state, action) => {
        state.productLoading = false;
        state.productError = true;
        state.productMessage = action.payload;
      })
      .addCase(addProductData.fulfilled, (state, action) => {
        state.productLoading = false;
        state.productSuccess = true;
        state.products.push(action.payload);
      })
      .addCase(getProductData.pending, (state, action) => {
        state.productLoading = true;
      })
      .addCase(getProductData.rejected, (state, action) => {
        state.productLoading = false;
        state.productError = true;
        state.productMessage = action.payload;
      })
      .addCase(getProductData.fulfilled, (state, action) => {
        state.productLoading = false;
        state.productSuccess = true;
        state.products = action.payload;
      });
  },
});

// export
export const { productReset } = productSlice.actions;
export default productSlice.reducer;
