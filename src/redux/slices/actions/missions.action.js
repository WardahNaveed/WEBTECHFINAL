import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getMissionsAction = createAsyncThunk(
  "missions/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://api.spacexdata.com/v3/missions");
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message || "Something went wrong");
    }
  }
);
