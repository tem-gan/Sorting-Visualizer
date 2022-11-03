import React from "react";
import { getBubbleSortAnimations } from "../sortingAlgorithms/bubbleSort.js";
import { getHeapSortAnimations } from "../sortingAlgorithms/heapSort.js";
import { getInsertionSortAnimations } from "../sortingAlgorithms/insertionSort.js";
import { getMergeSortAnimations } from "../sortingAlgorithms/mergeSort.js";
import { getQuickSortAnimations } from "../sortingAlgorithms/quickSort.js";
import { getSelectionSortAnimations } from "../sortingAlgorithms/selectionSort.js";
import "./SortingVisualizer.css";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MERGE = 1;
const ANIMATION_SPEED_QUICK = 7;
const ANIMATION_SPEED_BUBBLE = 0.3;
const ANIMATION_SPEED_INSERT = 0.1;
const ANIMATION_SPEED_SELECT = 5;
const ANIMATION_SPEED_HEAP = 6;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 162;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";
const COLOR_CHANGE = "blue";
const COLOR_DIFF = "black";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 710));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MERGE);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MERGE);
      }
    }
  }

  quickSort() {
    const animations = [];
    getQuickSortAnimations(
      this.state.array,
      0,
      this.state.array.length - 1,
      animations
    );
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isChange = i % 3 !== 2;
      if (isChange) {
        const [firstidx, secondidx] = animations[i];
        let color1;
        let color2;
        if (i % 3 === 0) {
          color1 = COLOR_CHANGE;
          color2 = COLOR_DIFF;
        } else {
          color1 = PRIMARY_COLOR;
          color2 = PRIMARY_COLOR;
        }
        setTimeout(() => {
          arrayBars[firstidx].style.backgroundColor = color1;
          arrayBars[secondidx].style.backgroundColor = color2;
        }, i * ANIMATION_SPEED_QUICK);
      } else {
        setTimeout(() => {
          const [firstidx, secondidx, firsth, secondh] = animations[i];
          const firststyle = arrayBars[firstidx].style;
          const secondstyle = arrayBars[secondidx].style;
          firststyle.height = `${firsth}px`;
          secondstyle.height = `${secondh}px`;
        }, i * ANIMATION_SPEED_QUICK);
      }
    }
  }

  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isChange = i % 3 !== 2;
      if (isChange) {
        const [firstidx, secondidx] = animations[i];
        let color1;
        let color2;
        if (i % 3 === 0) {
          color1 = COLOR_CHANGE;
          color2 = COLOR_DIFF;
        } else {
          color1 = PRIMARY_COLOR;
          color2 = PRIMARY_COLOR;
        }
        setTimeout(() => {
          arrayBars[firstidx].style.backgroundColor = color1;
          arrayBars[secondidx].style.backgroundColor = color2;
        }, i * ANIMATION_SPEED_HEAP);
      } else {
        setTimeout(() => {
          const [firstidx, secondidx, firsth, secondh] = animations[i];
          const firststyle = arrayBars[firstidx].style;
          const secondstyle = arrayBars[secondidx].style;
          firststyle.height = `${firsth}px`;
          secondstyle.height = `${secondh}px`;
        }, i * ANIMATION_SPEED_HEAP);
      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isChange = i % 3 !== 2;
      if (isChange) {
        const [firstidx, secondidx] = animations[i];
        let color1;
        let color2;
        if (i % 3 === 0) {
          color1 = COLOR_CHANGE;
          color2 = COLOR_DIFF;
        } else {
          color1 = PRIMARY_COLOR;
          color2 = PRIMARY_COLOR;
        }
        setTimeout(() => {
          arrayBars[firstidx].style.backgroundColor = color1;
          arrayBars[secondidx].style.backgroundColor = color2;
        }, i * ANIMATION_SPEED_BUBBLE);
      } else {
        setTimeout(() => {
          const [firstidx, secondidx, firsth, secondh] = animations[i];
          const firststyle = arrayBars[firstidx].style;
          const secondstyle = arrayBars[secondidx].style;
          firststyle.height = `${firsth}px`;
          secondstyle.height = `${secondh}px`;
        }, i * ANIMATION_SPEED_BUBBLE);
      }
    }
  }

  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isChange = i % 3 !== 2;
      if (isChange) {
        const [firstidx, secondidx] = animations[i];
        let color1;
        let color2;
        if (i % 3 === 0) {
          color1 = COLOR_CHANGE;
          color2 = COLOR_DIFF;
        } else {
          color1 = PRIMARY_COLOR;
          color2 = PRIMARY_COLOR;
        }
        setTimeout(() => {
          arrayBars[firstidx].style.backgroundColor = color1;
          arrayBars[secondidx].style.backgroundColor = color2;
        }, i * ANIMATION_SPEED_INSERT);
      } else {
        setTimeout(() => {
          const [firstidx, secondidx, firsth, secondh] = animations[i];
          const firststyle = arrayBars[firstidx].style;
          const secondstyle = arrayBars[secondidx].style;
          firststyle.height = `${firsth}px`;
          secondstyle.height = `${secondh}px`;
        }, i * ANIMATION_SPEED_INSERT);
      }
    }
  }

  selectionSort() {
    const animations = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isChange = i % 3 !== 2;
      if (isChange) {
        const [firstidx, secondidx] = animations[i];
        let color1;
        let color2;
        if (i % 3 === 0) {
          color1 = COLOR_CHANGE;
          color2 = COLOR_DIFF;
        } else {
          color1 = PRIMARY_COLOR;
          color2 = PRIMARY_COLOR;
        }
        setTimeout(() => {
          arrayBars[firstidx].style.backgroundColor = color1;
          arrayBars[secondidx].style.backgroundColor = color2;
        }, i * ANIMATION_SPEED_SELECT);
      } else {
        setTimeout(() => {
          const [firstidx, secondidx, firsth, secondh] = animations[i];
          const firststyle = arrayBars[firstidx].style;
          const secondstyle = arrayBars[secondidx].style;
          firststyle.height = `${firsth}px`;
          secondstyle.height = `${secondh}px`;
        }, i * ANIMATION_SPEED_SELECT);
      }
    }
  }
  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.

  // testSortingAlgorithms() {
  //   for (let i = 0; i < 100; i++) {
  //     const array = [];
  //     const length = randomIntFromInterval(1, 1000);
  //     for (let i = 0; i < length; i++) {
  //       array.push(randomIntFromInterval(-1000, 1000));
  //     }
  //     const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
  //     const mergeSortedArray = getMergeSortAnimations(array.slice());
  //     console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
  //   }
  // }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}
          ></div>
        ))}
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button onClick={() => this.selectionSort()}>Selection Sort</button>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function arraysAreEqual(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// }
