import React, { useState } from "react";
import "./App.css";

const colors = [
  "#ff5733", // Orange
  "#ff8c33", // Light Orange
  "#ffc733", // Yellow
  "#aaff33", // Lime Green
  "#33ff57", // Bright Green
  "#33ffaa", // Teal
  "#33aaff", // Light Blue
  "#3366ff", // Blue
  "#8c33ff", // Purple
  "#ff33aa", // Pink
  "#ff3333", // Red
  "#aaaaaa", // Gray
];

function App() {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [colorPickerVisible, setColorPickerVisible] = useState(false);

  const toggleColorPicker = () => {
    setColorPickerVisible(!colorPickerVisible);
  };

  const changeColor = (color) => {
    setSelectedColor(color);
    setColorPickerVisible(false); // Hide color picker after selecting a color
  };

  return (
    <>
      <div className="app-container">
        <h1>Color Picker</h1>
        <div
          className="selected-color"
          style={{ backgroundColor: selectedColor }}
        ></div>
        {colorPickerVisible && (
          <div className="color-picker-container">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-box"
                style={{ backgroundColor: color }}
                onClick={() => changeColor(color)}
              ></div>
            ))}
          </div>
        )}
        <button className="color-picker-button" onClick={toggleColorPicker}>
          Pick a color
        </button>
      </div>
    </>
  );
}

export default App;
