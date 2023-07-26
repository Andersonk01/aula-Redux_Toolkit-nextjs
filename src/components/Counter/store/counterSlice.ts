import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICounterState {
  value: number;
}
const initialState: ICounterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (
      state: ICounterState,
      action: PayloadAction<ICounterState>
    ) => {
      state.value += action.payload.value;
    },

    decrementByAmount: (
      state: ICounterState,
      action: PayloadAction<ICounterState>
    ) => {
      state.value -= action.payload.value;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
