import * as api from "../../api";
import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";

interface SignupFormData {
  email: string;
}

interface AsyncThunkConfig {
  rejectValue: string;
}

interface InputDetails {
  email: string;
  username: string;
  token: string;
  password: string;
  subscribe: boolean;
}

export const signup: AsyncThunk<string, SignupFormData, AsyncThunkConfig> =
  createAsyncThunk<string, SignupFormData, AsyncThunkConfig>(
    "user/signup",
    async (formData: SignupFormData, thunkAPI) => {
      try {
        const { data } = await api.signupUser(formData);
        return data.status as string;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message as string);
      }
    }
  );

export const verifyAndSignup: AsyncThunk<
  string,
  InputDetails,
  AsyncThunkConfig
> = createAsyncThunk<string, InputDetails, AsyncThunkConfig>(
  "user/verify",
  async (userData: InputDetails, thunkAPI) => {
    try {
      const { data } = await api.verifyAndSignup(userData.token, {
        email: userData.email,
        username: userData.username,
        password: userData.password,
        subscribed: userData.subscribe,
      });
      window.location.pathname = "./home";
      return data.status as string;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message as string);
    }
  }
);
