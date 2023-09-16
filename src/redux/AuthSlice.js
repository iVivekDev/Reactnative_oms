import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

// Define your API call using createAsyncThunk
export const AuthApi = createAsyncThunk('Accounts/login', async userData => {
  try {
    const response = await fetch(
      'http://localhost:44884/api/Supplier/GetAll',
      //   {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(userData),
      //   },
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
});

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    data: [],
    isLoader: false,
    isError: false,
  },
  reducers: {
    Login(state, action) {},
  }, 

  extraReducers: builder => {
    builder
      .addCase(AuthApi.pending, state => {
        state.isLoader = true;
        state.isError = false;
      })
      .addCase(AuthApi.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload; 
        state.isError = false;
      })

      .addCase(AuthApi.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
      });
  },
});
  console.log(AuthSlice.action);


export {AuthSlice};
