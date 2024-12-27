import React, { useState } from 'react';
import { bubbleSort } from './BubbleSort';
import { insertionSort } from './InsertionSort';
import { selectionSort } from './SelectionSort';
import './SortingVisualizer.css'; // Ensure this import is correct

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [highlighted, setHighlighted] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("Bubble Sort");

  const generateRandomArray = () => {
    return Array.from({ length: 20 }, () => Math.floor(Math.random() * 300) + 50);
  };

  const resetArray = () => {
    if (!sorting) {
      setArray(generateRandomArray());
      setHighlighted([]);
    }
  };

  const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleChange = (event) => {
    setSelectedAlgorithm(event.target.value);
  };

  const startSorting = async () => {
    setSorting(true);
    if (selectedAlgorithm === "Bubble Sort") {
      await bubbleSort(array, setArray, setHighlighted, pause);
    } else if (selectedAlgorithm === "Insertion Sort") {
      await insertionSort(array, setArray, setHighlighted, pause);
    } else if (selectedAlgorithm === "Selection Sort") {
      await selectionSort(array, setArray, setHighlighted, pause);
    }
    setSorting(false);
  };

  return (
    <div className="sorting-visualizer-container">
      <div className="controls">
        <h2>Sorting Controls</h2>
        <button onClick={resetArray} disabled={sorting}>
          Generate Array
        </button>
        <div>
          <h3>Select Algorithm</h3>
          <select onChange={handleChange} value={selectedAlgorithm}>
            <option>Bubble Sort</option>
            <option>Insertion Sort</option>
            <option>Selection Sort</option>
          </select>
        </div>
        <button onClick={startSorting} disabled={sorting}>
          Start {selectedAlgorithm}
        </button>
      </div>

      <div className="array-container">
        {array.map((value, index) => (
          <div
            className={`array-bar ${highlighted.includes(index) ? 'highlighted' : ''}`}
            key={index}
            style={{
              height: `${value * 1.5}px`,
              backgroundColor: highlighted.includes(index) ? "red" : "greenyellow",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SortingVisualizer;
