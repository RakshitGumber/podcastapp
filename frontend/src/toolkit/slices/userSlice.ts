import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signup, verifyAndSignup } from "../actions/userActions";

export interface SignupState {
  email: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface CompleteSignup {
  email: string;
  username: string;
  token: string;
  password: string;
  subscribe: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SignupState | CompleteSignup = {
  email: "",
  status: "idle",
  error: null,
  username: "",
  token: "",
  password: "",
  subscribe: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    storeToken(state) {
      localStorage.setItem("token", state.token);
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(signup.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signup.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(verifyAndSignup.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(verifyAndSignup.fulfilled, (state) => {
        state.status = "succeeded";
        storeToken();
      })
      .addCase(verifyAndSignup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      }),
});

export const { setEmail, storeToken } = userSlice.actions;
export default userSlice.reducer;
