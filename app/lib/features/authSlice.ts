import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface LoginPayload {
  email: string;
  password: string;
}

interface AuthState {
  loading: boolean;
  error: string | null;
  userInfo: { name: string; email: string } | null;
}

const userInfoFromStorage =
  typeof window !== 'undefined'
    ? localStorage.getItem('userInfo')
    : null;

const initialState: AuthState = {
  loading: false,
  error: null,
  userInfo: userInfoFromStorage ? JSON.parse(userInfoFromStorage) : null,
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (
    { email, password }: LoginPayload,
    { rejectWithValue }
  ) => {
    return new Promise<{ name: string; email: string }>((resolve) => {
      setTimeout(() => {
        resolve({ name: 'Fake User', email });
      }, 1000);
    });
  }
);


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.loading = false;
      state.error = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('userInfo');
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        if (typeof window !== 'undefined') {
          localStorage.setItem('userInfo', JSON.stringify(action.payload));
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
