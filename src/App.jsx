import "./App.css";
import { useState } from "react";
import MyButton from "./components/UI/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./store/slices/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	const valueEl = document.querySelector('.value');

	if (valueEl) {
		if (count > 0) {
			valueEl.style.color = "teal";
		} else if (count < 0) {
			valueEl.style.color = "#9e000d";
		} else {
			valueEl.style.color = "#353535";
		}
	}

  return (
    <div className="counter-wrapper">
      <div className="counter">
        <h1 className="value">{count}</h1>
        <MyButton onClick={() => dispatch(decrement())}>DECREASE</MyButton>
        <MyButton onClick={() => dispatch(reset())}>RESET</MyButton>
        <MyButton onClick={() => dispatch(increment())}>INCREASE</MyButton>
      </div>
    </div>
  );
}

export default App;
