import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const mock = new MockAdapter(axios);

interface IFakeDataLogin {
  email: string;
  password: string;
}

const fakeDataLogin: IFakeDataLogin[] = [
  { email: "nguyendinhloc502@gmail.com", password: "vsii" },
  { email: "nguyendloc002@gmail.com", password: "vsii" },
  { email: "kidkaito976@yahoo.com.vn", password: "vsii" },
];

mock.onPost("/api/login").reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (
    fakeDataLogin.some((data) => data.email === email) &&
    fakeDataLogin.some((data) => data.password === password)
  ) {
    return [200, { email: email, password: password }];
  } else {
    return [401, { error: "Invalid credentials" }];
  }
});

interface User {
  email: string;
  password: string;
}

interface UserState {
  isLoading: boolean;
  error: string;
  isSuccess: boolean;
  userToken: string;
  userInfo: User;
}

const initialState: UserState = {
  isLoading: false,
  error: "",
  isSuccess: false,
  userToken: "",
  userInfo: { email: "", password: "" },
};

interface LoginResponse {
  token: string;
  email: string;
}

export const login = createAsyncThunk<
  LoginResponse,
  { email: string; password: string }
>("auth/login", async ({ email, password }) => {
  try {
    const response = await axios.post("/api/login", { email, password });
    return response.data;
  } catch (err: any) {
    throw new Error("Failed to login");
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.userToken = action.payload.token;
          state.userInfo.email = action.payload.email;
        }
      )
      .addCase(login.rejected, (state) => {
        state.error = "failed";
        state.isSuccess = false;
      });
  },
});

export default authSlice.reducer;
