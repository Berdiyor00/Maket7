// reducersa.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const APIKEY = 'AIzaSyB9b7pkbTNPXDiTWW0nMbpNG9tMpllBuD0';
export const ALLDATA = 'all'; 

export const fetchData = createAsyncThunk('user/fetchData', async (_, { getState }) => {
  const allData = getState().user.allData;
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${allData}&printType=books&projection=full&key=${APIKEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const changeData = createSlice({
  name: 'user',
  initialState: {
    allData: ALLDATA,
    userss: [],
    loading: false,
    error: null,
  },
  reducers: {
    setAllData: (state, action) => {
      state.allData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.userss = action.payload.items;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setAllData } = changeData.actions;
export default changeData.reducer;
