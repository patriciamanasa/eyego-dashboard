import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTableData, fetchChartData } from '../mockupApi';

interface TableItem {
  id: number;
  name: string;
  price: number;
}
interface DataState {
  tableData: TableItem[];
  chartData: { name: string; value: number }[];
  loading: boolean;
  error: string | null;
}
const initialState: DataState = {
  tableData: [],
  chartData: [],
  loading: false,
  error: null,
};


export const getTableData = createAsyncThunk('data/getTableData', async () => {
  const response = await fetchTableData();
  return response;
});

export const getChartData = createAsyncThunk('data/getChartData', async () => {
  const response = await fetchChartData();
  return response;
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTableData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTableData.fulfilled, (state, action) => {
        state.loading = false;
        state.tableData = action.payload;
      })
      .addCase(getTableData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch table data';
      })

      .addCase(getChartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChartData.fulfilled, (state, action) => {
        state.loading = false;
        state.chartData = action.payload;
      })
      .addCase(getChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch chart data';
      });
  },
});

export default dataSlice.reducer;
