import "./App.css";
import { useState } from "react";
import IncreaseButton from "./components/IncreaseBtn";
import DecreaseButton from "./components/decreaseBtn";
import ResetButton from "./components/ResetBtn";

function App() {
  let [value, setValue] = useState(0);

	const valueEl = document.querySelector('.value');

	if (valueEl) {
		if (value > 0) {
			valueEl.style.color = "teal";
		} else if (value < 0) {
			valueEl.style.color = "#9e000d";
		} else {
			valueEl.style.color = "#353535";
		}
	}

  function increaseValue() {
    setValue(value + 1);
  }

  function decreaseValue() {
    setValue(value - 1);
  }

  function resetValue() {
    setValue((value = 0));
  }

  return (
    <div className="counter-wrapper">
      <div className="counter">
        <h1 className="value">{value}</h1>
        <DecreaseButton decrement={decreaseValue} />
        <ResetButton reset={resetValue} />
        <IncreaseButton increment={increaseValue} />
      </div>
    </div>
  );
}

export default App;
