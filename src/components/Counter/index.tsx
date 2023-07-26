"use client";

import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./store/counterSlice";
import { ChangeEvent, useState } from "react";

export const Counter = () => {
  const [valueInput, setValueInput] = useState<number>(0);

  const CounterSelector = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();

  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementAmount = () => {
    dispatch(incrementByAmount({ value: valueInput }));
  };
  const handleDecrementAmount = () => {
    dispatch(decrementByAmount({ value: valueInput }));
  };

  return (
    <div>
      <section>
        <h1>Counter App</h1>
        <h3>{CounterSelector.value < 0 ? 0 : CounterSelector.value}</h3>
      </section>

      <section>
        <div>
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onDecrement}>Decrement</button>
        </div>

        <input
          type="number"
          value={valueInput}
          onChange={(e) => {
            // Verifica se o valor é menor ou igual a zero
            if (Number(e.target.value) <= 0) {
              setValueInput(0);
            } else {
              // Caso contrário, define o valor normalmente.
              setValueInput(Number(e.target.value));
            }
          }}
        />
        <div>
          <button onClick={handleIncrementAmount}>Increment Amount</button>
          <button onClick={handleDecrementAmount}>Decrement Amount</button>
        </div>
      </section>
    </div>
  );
};
